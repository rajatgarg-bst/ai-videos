import { createTheme } from '@mui/material/styles';
import { colors } from './design-tokens';

/**
 * Material-UI theme configuration using centralized design tokens
 * Colors are imported from design-tokens.ts (single source of truth)
 * This ensures consistency between MUI components and custom SCSS styling
 */
export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      light: colors.primaryLight,
      contrastText: colors.textLight,
    },
    secondary: {
      main: colors.secondary,
      dark: colors.secondaryDark,
      light: colors.secondaryLight,
      contrastText: colors.textLight,
    },
    error: {
      main: colors.error,
      contrastText: colors.textLight,
    },
    warning: {
      main: colors.warning,
      contrastText: colors.textLight,
    },
    info: {
      main: colors.info,
      contrastText: colors.textLight,
    },
    success: {
      main: colors.success,
      contrastText: colors.textLight,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      disabled: colors.textMuted,
    },
    background: {
      default: colors.bgPrimary,
      paper: colors.bgSecondary,
    },
    divider: colors.borderColor,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // $font-family-base
    fontSize: 16, // $font-size-base
    fontWeightLight: 300, // $font-weight-light
    fontWeightRegular: 400, // $font-weight-normal
    fontWeightMedium: 500, // $font-weight-medium
    fontWeightBold: 700, // $font-weight-bold
    h1: {
      fontSize: '36px', // $font-size-4xl
      fontWeight: 700, // $font-weight-bold
      lineHeight: 1.2, // $line-height-tight
    },
    h2: {
      fontSize: '30px', // $font-size-3xl
      fontWeight: 700, // $font-weight-bold
      lineHeight: 1.2, // $line-height-tight
    },
    h3: {
      fontSize: '24px', // $font-size-2xl
      fontWeight: 600, // $font-weight-semibold
      lineHeight: 1.2, // $line-height-tight
    },
    h4: {
      fontSize: '20px', // $font-size-xl
      fontWeight: 600, // $font-weight-semibold
      lineHeight: 1.5, // $line-height-normal
    },
    h5: {
      fontSize: '18px', // $font-size-lg
      fontWeight: 600, // $font-weight-semibold
      lineHeight: 1.5, // $line-height-normal
    },
    h6: {
      fontSize: '16px', // $font-size-base
      fontWeight: 600, // $font-weight-semibold
      lineHeight: 1.5, // $line-height-normal
    },
    body1: {
      fontSize: '16px', // $font-size-base
      lineHeight: 1.5, // $line-height-normal
    },
    body2: {
      fontSize: '14px', // $font-size-sm
      lineHeight: 1.5, // $line-height-normal
    },
    button: {
      fontSize: '14px', // $font-size-sm
      fontWeight: 500, // $font-weight-medium
      textTransform: 'none',
    },
    caption: {
      fontSize: '12px', // $font-size-xs
      lineHeight: 1.5, // $line-height-normal
    },
  },
  spacing: 8, // Base spacing unit (matches $spacing-sm)
  shape: {
    borderRadius: 8, // $border-radius-md
  },
  transitions: {
    duration: {
      shortest: 150, // $transition-fast
      shorter: 200,
      short: 250,
      standard: 300, // $transition-base
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'ease-in-out', // $transition-timing-in-out
      easeOut: 'ease-out', // $transition-timing-out
      easeIn: 'ease-in', // $transition-timing-in
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // $shadow-sm
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // $shadow-md
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // $shadow-lg
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // $shadow-xl
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // $shadow-2xl
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // $border-radius-md
          textTransform: 'none',
          fontWeight: 500, // $font-weight-medium
          padding: '8px 16px', // $spacing-sm $spacing-md
          transition: 'all 0.3s ease', // $transition-base
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 10px 15px -3px ${colors.shadowPrimary}`,
          },
        },
        contained: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // $border-radius-lg
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 10px 15px -3px ${colors.shadowPrimary}`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // $border-radius-lg
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        elevation2: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        elevation3: {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          borderBottom: `1px solid ${colors.borderColor}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '9999px', // $border-radius-full
          fontWeight: 500, // $font-weight-medium
          fontSize: '14px', // $font-size-sm
          backgroundColor: colors.bgTertiary,
          color: colors.textPrimary,
          border: `1px solid ${colors.borderColor}`,
          '&:hover': {
            backgroundColor: colors.bgDark,
            borderColor: colors.primary,
          },
        },
        colorPrimary: {
          backgroundColor: colors.primary,
          color: colors.textLight,
          border: 'none',
          '&:hover': {
            backgroundColor: colors.primaryDark,
          },
        },
        deleteIcon: {
          color: colors.textSecondary,
          fontSize: '18px',
          '&:hover': {
            color: colors.primary,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            padding: '4px', // $spacing-xs
            backgroundColor: colors.bgPrimary,
          },
        },
        paper: {
          borderRadius: '8px', // $border-radius-md
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          marginTop: '4px',
          backgroundColor: colors.bgSecondary,
        },
        listbox: {
          padding: '8px', // $spacing-sm
          backgroundColor: colors.bgSecondary,
          '& .MuiAutocomplete-option': {
            borderRadius: '4px', // $border-radius-sm
            margin: '2px 0',
            color: colors.textPrimary,
            '&:hover': {
              backgroundColor: colors.bgTertiary,
            },
            '&[aria-selected="true"]': {
              backgroundColor: colors.bgTertiary,
            },
          },
        },
        tag: {
          borderRadius: '9999px', // $border-radius-full
          backgroundColor: colors.bgTertiary,
          color: colors.textPrimary,
          border: `1px solid ${colors.borderColor}`,
          '& .MuiChip-deleteIcon': {
            color: colors.textSecondary,
            fontSize: '18px',
            '&:hover': {
              color: colors.primary,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // $border-radius-md
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary,
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            borderRadius: '8px', // $border-radius-md
            fontWeight: 500, // $font-weight-medium
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: colors.gradientStart,
              transform: 'translateY(-2px)',
            },
            '&.Mui-selected': {
              backgroundColor: colors.primary,
              color: colors.textLight,
              '&:hover': {
                backgroundColor: colors.primaryDark,
              },
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '16px', // $border-radius-xl
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: colors.overlayBlack30,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          borderRadius: '8px', // $border-radius-md
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: '4px', // $border-radius-sm
          margin: '2px 8px',
          '&:hover': {
            backgroundColor: colors.gradientStart,
          },
          '&.Mui-selected': {
            backgroundColor: colors.gradientEnd,
            '&:hover': {
              backgroundColor: '#99f6e4',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: colors.primary,
          },
        },
      },
    },
  },
});
