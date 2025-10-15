import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home-page';
import LoginCallback from '@/pages/login-callback';
import { colors } from '@/theme/design-tokens';
import { muiTheme } from '@/theme/mui-theme';
import './App.scss';

// Replace this with your actual Google Client ID
const GOOGLE_CLIENT_ID = (import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined) ?? '';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: colors.bgSecondary,
                color: colors.textLight,
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '8px',
                padding: '16px',
              },
              success: {
                iconTheme: {
                  primary: colors.success,
                  secondary: colors.bgSecondary,
                },
              },
              error: {
                iconTheme: {
                  primary: colors.error,
                  secondary: colors.bgSecondary,
                },
              },
            }}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login-callback" element={<LoginCallback />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
