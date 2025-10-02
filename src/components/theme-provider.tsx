import { useEffect, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { useThemeStore } from '@/stores/theme-store';
import { createAppTheme } from '@/theme/mui-theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeMode = useThemeStore((state) => state.theme);

  const resolvedTheme = useMemo(() => {
    if (themeMode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return themeMode;
  }, [themeMode]);

  const muiTheme = useMemo(() => createAppTheme(resolvedTheme), [resolvedTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
