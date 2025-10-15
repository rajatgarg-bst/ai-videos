import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Typography } from '@mui/material';
import type { FC } from 'react';
import './index.scss';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <Box className="error-message">
      <ErrorOutlineIcon className="error-message__icon" />
      <Typography variant="h6" className="error-message__title">
        Oops! Something went wrong
      </Typography>
      <Typography variant="body1" className="error-message__text">
        {message}
      </Typography>
      {onRetry && (
        <Button
          variant="contained"
          color="primary"
          onClick={onRetry}
          className="error-message__button"
        >
          Try Again
        </Button>
      )}
    </Box>
  );
};

export default ErrorMessage;
