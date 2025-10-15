/**
 * Design Tokens - Single Source of Truth
 * All color values are defined here and used across the application:
 * - Material-UI theme (mui-theme.ts)
 * - CSS Custom Properties (injected at runtime)
 * - SCSS files reference the CSS variables
 */

export const colors = {
  // Brand Colors - Softer Pink/Purple Gaming Theme (eye-friendly)
  primary: '#e879f9',
  primaryDark: '#c026d3',
  primaryLight: '#f0abfc',
  secondary: '#8b5cf6',
  secondaryDark: '#7c3aed',
  secondaryLight: '#a78bfa',
  accent: '#e879f9',

  // State Colors - Muted for dark theme
  success: '#4ade80',
  error: '#f87171',
  warning: '#fbbf24',
  info: '#60a5fa',

  // Text Colors - Dark Theme Optimized
  textPrimary: '#e5e7eb',
  textSecondary: '#9ca3af',
  textTertiary: '#6b7280',
  textLight: '#f9fafb',
  textMuted: '#6b7280',

  // Background Colors - Dark Gaming Theme
  bgPrimary: '#0f0f14',
  bgSecondary: '#18181b',
  bgTertiary: '#27272a',
  bgDark: '#09090b',
  bgGlass: 'rgba(15, 15, 20, 0.9)',

  // Border Colors - Subtle Dark Theme
  borderColor: '#27272a',
  borderLight: '#3f3f46',
  borderFocus: '#e879f9',

  // Gradient Colors - Softer Pink/Purple
  gradientStart: '#e879f9',
  gradientEnd: '#8b5cf6',
  gradientAccent: '#c026d3',
  gradientLightStart: '#f0abfc',
  gradientLightEnd: '#a78bfa',

  // Shadow Colors - Softer Purple/Pink Glow
  shadowPrimary: 'rgba(232, 121, 249, 0.2)',
  shadowSecondary: 'rgba(139, 92, 246, 0.2)',
  shadowSubtle: 'rgba(232, 121, 249, 0.1)',

  // Overlay Colors - For transparency effects
  overlayWhite10: 'rgba(255, 255, 255, 0.1)',
  overlayWhite20: 'rgba(255, 255, 255, 0.2)',
  overlayWhite30: 'rgba(255, 255, 255, 0.3)',
  overlayBlack10: 'rgba(0, 0, 0, 0.1)',
  overlayBlack20: 'rgba(0, 0, 0, 0.2)',
  overlayBlack30: 'rgba(0, 0, 0, 0.3)',
} as const;

/**
 * Maps design tokens to CSS custom property names
 * This mapping is used to inject CSS variables at runtime
 */
export const cssVariableMapping = {
  // Brand Colors
  '--primary-color': colors.primary,
  '--primary-dark': colors.primaryDark,
  '--primary-light': colors.primaryLight,
  '--secondary-color': colors.secondary,
  '--secondary-dark': colors.secondaryDark,
  '--secondary-light': colors.secondaryLight,
  '--accent-color': colors.accent,

  // State Colors
  '--success-color': colors.success,
  '--error-color': colors.error,
  '--warning-color': colors.warning,
  '--info-color': colors.info,

  // Text Colors
  '--text-primary': colors.textPrimary,
  '--text-secondary': colors.textSecondary,
  '--text-tertiary': colors.textTertiary,
  '--text-light': colors.textLight,
  '--text-muted': colors.textMuted,

  // Background Colors
  '--bg-primary': colors.bgPrimary,
  '--bg-secondary': colors.bgSecondary,
  '--bg-tertiary': colors.bgTertiary,
  '--bg-dark': colors.bgDark,
  '--bg-glass': colors.bgGlass,

  // Border Colors
  '--border-color': colors.borderColor,
  '--border-light': colors.borderLight,
  '--border-focus': colors.borderFocus,

  // Gradient Colors
  '--gradient-start': colors.gradientStart,
  '--gradient-end': colors.gradientEnd,
  '--gradient-accent': colors.gradientAccent,
  '--gradient-light-start': colors.gradientLightStart,
  '--gradient-light-end': colors.gradientLightEnd,

  // Shadow Colors
  '--shadow-primary': colors.shadowPrimary,
  '--shadow-secondary': colors.shadowSecondary,
  '--shadow-subtle': colors.shadowSubtle,

  // Overlay Colors
  '--overlay-white-10': colors.overlayWhite10,
  '--overlay-white-20': colors.overlayWhite20,
  '--overlay-white-30': colors.overlayWhite30,
  '--overlay-black-10': colors.overlayBlack10,
  '--overlay-black-20': colors.overlayBlack20,
  '--overlay-black-30': colors.overlayBlack30,
} as const;

/**
 * Injects CSS custom properties into the :root element
 * Call this function early in your app initialization (e.g., in main.tsx)
 */
export function injectCssVariables(): void {
  const root = document.documentElement;
  Object.entries(cssVariableMapping).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}
