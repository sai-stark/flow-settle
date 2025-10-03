import { createTheme, ThemeOptions } from '@mui/material/styles';

const getThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#635BFF' : '#7A73FF',
      light: mode === 'light' ? '#7A73FF' : '#8F89FF',
      dark: mode === 'light' ? '#0A2540' : '#635BFF',
    },
    success: {
      main: '#00D924',
      light: '#3ADB54',
      dark: '#00B81D',
    },
    warning: {
      main: '#FFC043',
      light: '#FFCD6A',
      dark: '#F5A623',
    },
    error: {
      main: '#DF1B41',
      light: '#E5476A',
      dark: '#C41537',
    },
    background: {
      default: mode === 'light' ? '#F6F9FC' : '#0A2540',
      paper: mode === 'light' ? '#FFFFFF' : '#0E1C2E',
    },
    text: {
      primary: mode === 'light' ? '#0A2540' : '#F6F9FC',
      secondary: mode === 'light' ? '#425466' : '#89A3B9',
    },
    divider: mode === 'light' ? '#E3E8EE' : '#1A2F45',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.5,
      color: mode === 'light' ? '#425466' : '#89A3B9',
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 6,
          padding: '8px 16px',
          boxShadow: 'none',
          fontSize: '0.9375rem',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-1px)',
            transition: 'transform 0.2s ease',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          background: mode === 'light' ? '#FFFFFF' : '#0E1C2E',
          border: mode === 'light' 
            ? '1px solid #E3E8EE'
            : '1px solid #1A2F45',
          boxShadow: mode === 'light'
            ? '0 1px 3px rgba(50, 50, 93, 0.05), 0 1px 0 rgba(0, 0, 0, 0.02)'
            : '0 1px 3px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.15s ease',
          '&:hover': {
            boxShadow: mode === 'light'
              ? '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
              : '0 4px 6px rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: mode === 'light' ? '#FFFFFF' : '#0E1C2E',
          boxShadow: mode === 'light'
            ? '0 1px 0 0 #E3E8EE'
            : '0 1px 0 0 #1A2F45',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: mode === 'light' ? '#FFFFFF' : '#0A2540',
          borderRight: mode === 'light'
            ? '1px solid #E3E8EE'
            : '1px solid #1A2F45',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: mode === 'light'
            ? '1px solid #E3E8EE'
            : '1px solid #1A2F45',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.8125rem',
        },
      },
    },
  },
});

export const createAppTheme = (mode: 'light' | 'dark') => createTheme(getThemeOptions(mode));
