import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useThemeStore } from '@/stores/theme-store';
import { getAntdTheme } from '@/theme/antd-theme';
import { AppLayout } from '@/components/app-layout';
import Dashboard from './pages/Dashboard';
import Configuration from './pages/Configuration';
import Settlements from './pages/Settlements';
import Invoices from './pages/Invoices';
import Balance from './pages/Balance';
import Disputes from './pages/Disputes';
import NotFound from './pages/NotFound';
import { useMemo, useEffect } from 'react';

const queryClient = new QueryClient();

function App() {
  const themeMode = useThemeStore((state) => state.theme);
  
  const resolvedTheme = useMemo(() => {
    if (themeMode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return themeMode;
  }, [themeMode]);

  const antdConfig = useMemo(() => ({
    ...getAntdTheme(resolvedTheme),
    algorithm: resolvedTheme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
  }), [resolvedTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={antdConfig}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="configuration" element={<Configuration />} />
              <Route path="settlements" element={<Settlements />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="balance" element={<Balance />} />
              <Route path="disputes" element={<Disputes />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
