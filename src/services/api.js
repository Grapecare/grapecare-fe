import axios from 'axios';
import storeInit from '../redux/store';
import { removeUser, persistAuth } from '../redux/slices/authSlice';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  
  failedQueue = [];
};

// Request interceptor: attach access token
api.interceptors.request.use((config) => {
  // Do NOT send auth header when logging in or refreshing token
  if (config.url && (config.url.startsWith('/auth/login') || config.url.includes('/token/refresh') || config.url.includes('/token/verify'))) {
    return config;
  }

  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried to refresh yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If already refreshing, queue this request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch(err => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = localStorage.getItem('refreshToken');

      if (!refreshToken) {
        // No refresh token, logout user
        isRefreshing = false;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        storeInit.store.dispatch(removeUser());
        window.location.href = '/login';
        return Promise.reject(error);
      }

      try {
        // Call refresh token endpoint
        console.log('🔄 Refreshing access token...');
        const { data } = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/auth/token/refresh/`,
          { refresh: refreshToken }
        );

        const newAccessToken = data.access;
        console.log('✅ Token refreshed successfully');
        
        // Update tokens in localStorage
        localStorage.setItem('accessToken', newAccessToken);
        
        // Update Redux store with new token
        const currentUser = storeInit.store.getState()?.auth?.user;
        if (currentUser) {
          storeInit.store.dispatch(persistAuth({
            user: currentUser,
            accessToken: newAccessToken,
          }));
        }
        
        // Update the failed request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        
        // Process queued requests
        processQueue(null, newAccessToken);
        isRefreshing = false;
        
        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed, logout user
        processQueue(refreshError, null);
        isRefreshing = false;
        
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        storeInit.store.dispatch(removeUser());
        
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
