import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Alert, Box, Paper, Typography } from '@mui/material';
import { type CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '@/components/common/loading-spinner';
import { useAppSelector } from '@/store/hooks';
import type { FC } from 'react';
import './index.scss';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);

  const handleSuccess = useCallback(
    (credentialResponse: CredentialResponse) => {
      if (credentialResponse.credential) {
        // Redirect to /login-callback with credential
        void navigate(`/login-callback?credential=${credentialResponse.credential}`);
      }
    },
    [navigate]
  );

  const handleError = useCallback(() => {
    // Handle Google OAuth error
    toast.error('Google login failed. Please try again.');
  }, []);

  if (loading) {
    return (
      <div className="login-page">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="login-page">
      <Paper className="login-page__card" elevation={3}>
        <Box className="login-page__icon-container">
          <Box className="login-page__icon">
            <PlayArrowIcon className="login-page__play-icon" />
          </Box>
        </Box>

        <Box className="login-page__header">
          <Typography variant="h3" className="login-page__title">
            Welcome
          </Typography>
          <Typography variant="body1" className="login-page__subtitle">
            Sign in to explore our video collection
          </Typography>
        </Box>

        <Box className="login-page__content">
          {error && (
            <Alert severity="error" className="login-page__error">
              {error}
            </Alert>
          )}

          <Box className="login-page__button-container">
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
              size="large"
              width="300"
              theme="filled_blue"
              text="signin_with"
            />
          </Box>

          <Typography variant="caption" className="login-page__footer-text">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default LoginPage;
