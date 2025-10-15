import { Box, CircularProgress } from '@mui/material';
import type { FC } from 'react';
import './index.scss';

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ message, size = 40 }) => {
  return (
    <Box className="loading-spinner">
      <CircularProgress size={size} />
      {message && <p className="loading-spinner__message">{message}</p>}
    </Box>
  );
};

export default LoadingSpinner;
