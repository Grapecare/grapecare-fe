import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Optional: attach access token from localStorage if present
api.interceptors.request.use((config) => {
  // Do NOT send auth header when logging in
  if (config.url && config.url.startsWith('/auth/login')) {
    return config;
  }

  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
