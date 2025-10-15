import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  email: string;
  name: string;
  profileUrl: string;
}

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  user: UserData | null;
}

const initialState: AuthState = {
  accessToken: null,
  isLoggedIn: false,
  loading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    loginSuccess: (state, action: PayloadAction<{ accessToken: string; user: UserData }>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.loading = false;
      state.error = null;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.error = null;
    },
    initializeAuth: (state, action: PayloadAction<{ accessToken: string; user: UserData }>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const { initializeAuth, loginSuccess, logout, setError, setLoading } = authSlice.actions;
export default authSlice.reducer;
