import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useCallback } from 'react';
import { logoutUser } from '@/store/auth/auth-thunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Logo from './logo';
import type { FC } from 'react';
import './index.scss';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = useCallback(() => {
    void dispatch(logoutUser());
  }, [dispatch]);

  return (
    <AppBar position="static" className="header" elevation={0}>
      <Toolbar className="header__toolbar">
        <Box className="header__logo-container">
          <Logo className="header__logo" />
        </Box>

        <Box className="header__user-section">
          {user?.profileUrl && (
            <Avatar src={user.profileUrl} alt={user.name} className="header__avatar" />
          )}
          {user?.name && (
            <Typography variant="body1" className="header__username">
              {user.name}
            </Typography>
          )}
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            className="header__logout-button"
            sx={{
              '& .MuiButton-startIcon': {
                margin: { xs: 0, sm: '0 8px 0 -4px' },
              },
            }}
          >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
              Logout
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
