import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import homePageReducer from './home-page/home-page-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    homePage: homePageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
