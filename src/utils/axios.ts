import axios from 'axios';
import toast from 'react-hot-toast';
import { logout } from '@/store/auth/auth-slice';
import { store } from '@/store/store';
import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

// Flag to prevent multiple logout actions for simultaneous 401 errors
let isLoggingOut = false;

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token, logging, etc.
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token from Redux state (single source of truth)
    const token = store.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request in development
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log('API Request:', config.method?.toUpperCase(), config.url);
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle responses and errors globally
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log('API Response:', response.status, response.config.url);
    }

    return response;
  },
  (error: AxiosError) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      const { status } = error.response;

      if (status === 401) {
        // Unauthorized - update Redux state
        // Check if user is actually logged in before showing error
        const { isLoggedIn } = store.getState().auth;

        if (isLoggedIn && !isLoggingOut) {
          isLoggingOut = true;
          toast.error('Session expired. Please login again.');
          store.dispatch(logout());
          // Reset flag after a short delay to allow for edge cases
          setTimeout(() => {
            isLoggingOut = false;
          }, 1000);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
