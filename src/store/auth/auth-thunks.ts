import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '@/services/api.service';
import { loginSuccess, logout, setError, setLoading } from './auth-slice';

export const googleLogin = createAsyncThunk(
  'auth/googleLogin',
  async (idToken: string, { dispatch }) => {
    try {
      dispatch(setLoading(true));

      const response = await apiService.googleLogin(idToken);

      // Update auth state with token and user data
      // localStorage will be updated by useAuth hook
      dispatch(
        loginSuccess({
          accessToken: response.accessToken,
          user: {
            email: response.email,
            name: response.name,
            profileUrl: response.profileUrl,
          },
        })
      );

      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      dispatch(setError(errorMessage));
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logout', (_, { dispatch }) => {
  // Update Redux state
  // localStorage will be cleared by useAuth hook
  dispatch(logout());
});
