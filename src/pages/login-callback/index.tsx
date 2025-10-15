import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoadingSpinner from '@/components/common/loading-spinner';
import { googleLogin } from '@/store/auth/auth-thunks';
import { useAppDispatch } from '@/store/hooks';
import type { FC } from 'react';
import './index.scss';

const LoginCallback: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      // Get the credential from URL parameters (sent by Google OAuth)
      const credential = searchParams.get('credential');

      if (!credential) {
        // No credential found, redirect back to home
        void navigate('/', { replace: true });
        return;
      }

      try {
        // Make API call with the credential
        await dispatch(googleLogin(credential)).unwrap();
        // Success - redirect to home page
        void navigate('/', { replace: true });
      } catch {
        // Error - redirect back to home (login page will show via withAuth HOC)
        void navigate('/', { replace: true });
      }
    };

    void handleCallback();
  }, [dispatch, navigate, searchParams]);

  return (
    <div className="login-callback">
      <LoadingSpinner />
      <p className="login-callback__text">Completing sign in...</p>
    </div>
  );
};

export default LoginCallback;
