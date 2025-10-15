import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
// 1. Reset CSS first
import '@/scss/reset.scss';
// 2. Material UI is imported in App.tsx via CssBaseline
import App from '@/App';
import ErrorFallback from '@/components/error-fallback';
import { store } from '@/store/store';
import { injectCssVariables } from '@/theme/design-tokens';
// 3. Custom global styles last (after all component imports)
import '@/index.scss';

// Inject CSS custom properties from centralized design tokens
injectCssVariables();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // Reset app state here if needed
      window.location.href = '/';
    }}
    onError={(error, info) => {
      // Log error to error reporting service
      console.error('Error caught by boundary:', error, info);
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
