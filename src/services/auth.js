import api from './api';
import storeInit from '../redux/store';
import { persistAuth, removeUser } from '../redux/slices/authSlice';

export const register = async (payload) => {
  const { data } = await api.post('/auth/signup/', payload);
  return data;
};

export const login = async (payload) => {
  const { data } = await api.post('/auth/login/', payload);

  // Store tokens in localStorage for API interceptor
  if (data?.tokens) {
    localStorage.setItem('accessToken', data.tokens.access);
    localStorage.setItem('refreshToken', data.tokens.refresh);
  }

  // Dispatch to Redux to persist user and token
  if (data) {
    storeInit.store.dispatch(persistAuth({
      user: data.user,
      accessToken: data.tokens?.access,
    }));
  }

  return data;
};

export const loginWithEmail = async (email, password) => {
  return login({ email, password });
};

export const loginWithPhone = async (phoneNumber, password) => {
  return login({ phone_number: phoneNumber, password });
};

export const verifyEmail = async (email, code) => {
  const { data } = await api.post('/auth/verify-email/', { email, code });
  return data;
};

export const resendVerificationCode = async (email) => {
  const { data } = await api.post('/auth/resend-verification/', { email });
  return data;
};

export const forgotPassword = async (payload) => {
  // payload can be { email, send_via: 'email' } or { phone_number, send_via: 'sms' }
  const { data } = await api.post('/auth/forgot-password/', payload);
  return data;
};

export const verifyResetCode = async (payload) => {
  // payload can be { email, code } or { phone_number, code }
  const { data } = await api.post('/auth/verify-reset-code/', payload);
  return data;
};

export const resetPassword = async (payload) => {
  // payload: { email/phone_number, code, password, confirm_password }
  const { data } = await api.post('/auth/reset-password/', payload);
  return data;
};

export const logout = () => {
  // Clear localStorage
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  
  // Clear Redux state
  storeInit.store.dispatch(removeUser());
};
