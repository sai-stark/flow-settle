import { createTheme, ThemeOptions } from '@mui/material/styles';

const getThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? 'hsl(210, 100%, 40%)' : 'hsl(210, 100%, 50%)',
      light: mode === 'light' ? 'hsl(210, 100%, 50%)' : 'hsl(210, 100%, 60%)',
      dark: mode === 'light' ? 'hsl(210, 100%, 30%)' : 'hsl(210, 100%, 40%)',
    },
    success: {
      main: 'hsl(142, 71%, 45%)',
      light: 'hsl(142, 71%, 55%)',
      dark: 'hsl(142, 71%, 35%)',
    },
    warning: {
      main: 'hsl(38, 92%, 50%)',
      light: 'hsl(38, 92%, 60%)',
      dark: 'hsl(38, 92%, 40%)',
    },
    error: {
      main: 'hsl(0, 84%, 60%)',
      light: 'hsl(0, 84%, 70%)',
      dark: 'hsl(0, 84%, 50%)',
    },
    background: {
      default: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(222, 47%, 11%)',
      paper: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(217, 33%, 17%)',
    },
    text: {
      primary: mode === 'light' ? 'hsl(222, 47%, 11%)' : 'hsl(213, 31%, 91%)',
      secondary: mode === 'light' ? 'hsl(215, 16%, 47%)' : 'hsl(215, 20%, 65%)',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
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
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: mode === 'light' 
            ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            : '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export const createAppTheme = (mode: 'light' | 'dark') => createTheme(getThemeOptions(mode));
