import { useEffect } from 'react';
import LoginPage from '@/pages/login-page';
import { initializeAuth } from '@/store/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearAuthStorage, getAccessToken, getUserData, setAuthStorage } from '@/utils/storage';
import type { ComponentType, FC } from 'react';

/**
 * Higher-Order Component that adds authentication check
 * If user is not logged in, shows LoginPage
 * Otherwise, renders the wrapped component
 */
export const withAuth = <P extends object>(Component: ComponentType<P>): FC<P> => {
  const AuthenticatedComponent: FC<P> = (props) => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector((state) => state.auth);

    // Initialize auth from localStorage on mount
    useEffect(() => {
      const storedToken = getAccessToken();
      const storedUserData = getUserData();

      if (storedToken && storedUserData) {
        dispatch(
          initializeAuth({
            accessToken: storedToken,
            user: storedUserData,
          })
        );
      }
    }, [dispatch]);

    // Sync Redux state to localStorage whenever it changes
    useEffect(() => {
      if (auth.isLoggedIn && auth.accessToken && auth.user) {
        // User is logged in - save to localStorage
        setAuthStorage(auth.accessToken, auth.user);
      } else {
        // User is logged out - clear localStorage
        clearAuthStorage();
      }
    }, [auth.isLoggedIn, auth.accessToken, auth.user]);

    // Show login page if not authenticated
    if (!auth.isLoggedIn) {
      return <LoginPage />;
    }

    // Show the wrapped component if authenticated
    return <Component {...props} />;
  };

  // Set display name for debugging
  AuthenticatedComponent.displayName = `withAuth(${Component.name})`;

  return AuthenticatedComponent;
};
