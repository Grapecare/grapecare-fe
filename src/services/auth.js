const baseUrl = import.meta.env.VITE_BASE_URL;

export const register = async (payload) => {
    return await httpRequest(`${baseUrl}/register`,'POST',payload)
} 

export const login = async (payload) => {
    return await httpRequest(`${baseUrl}/auth/login`,'POST',payload)
} 


import httpRequest from '../utils/httpRequest';
// Simple auth service for login

import api from './api';

async function loginRequest(payload) {
  const { data } = await api.post('/auth/login/', payload);

  if (data?.tokens) {
    localStorage.setItem('accessToken', data.tokens.access);
    localStorage.setItem('refreshToken', data.tokens.refresh);
  }
  if (data?.user) {
    localStorage.setItem('user', JSON.stringify(data.user));
  }

  return data;
}

// export function loginWithEmail(email, password) {
//   return loginRequest({ email, password });
// }

export const loginWithEmail = async (payload) => {
  return await httpRequest(`${baseUrl}/auth/login`,'POST',payload)
}

export function loginWithPhone(phoneNumber, password) {
  return loginRequest({ phone_number: phoneNumber, password });
}
