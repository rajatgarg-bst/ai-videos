import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Container, Typography } from '@mui/material';
import type { FC } from 'react';
import type { FallbackProps } from 'react-error-boundary';

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <ErrorOutlineIcon
          sx={{
            color: 'error.main',
            fontSize: 80,
            marginBottom: 2,
          }}
        />

        <Typography variant="h4" gutterBottom>
          Oops! Something went wrong
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
          We&apos;re sorry, but something unexpected happened. Please try again.
        </Typography>

        {import.meta.env.DEV && (
          <Box
            sx={{
              backgroundColor: 'grey.100',
              borderLeft: '4px solid',
              borderRadius: 1,
              color: 'error.main',
              marginBottom: 3,
              marginTop: 2,
              padding: 2,
              textAlign: 'left',
              width: '100%',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Error Details (Development Only):
            </Typography>
            <Typography
              variant="body2"
              component="pre"
              sx={{
                fontFamily: 'monospace',
                overflow: 'auto',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {error instanceof Error ? error.message : String(error)}
            </Typography>
          </Box>
        )}

        <Button variant="contained" color="primary" onClick={resetErrorBoundary} size="large">
          Try Again
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorFallback;
