import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Box } from "@mui/material";
import { SnackbarProvider } from 'notistack';
import { AppSidebar } from "@/components/app-sidebar";
import { PageHeader } from "@/components/page-header";
import { MobileNav } from "@/components/mobile-nav";
import Dashboard from "./pages/Dashboard";
import Configuration from "./pages/Configuration";
import Settlements from "./pages/Settlements";
import Invoices from "./pages/Invoices";
import Balance from "./pages/Balance";
import Disputes from "./pages/Disputes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <BrowserRouter>
          <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <AppSidebar />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <PageHeader />
              <Box component="main" sx={{ flex: 1, pb: { xs: 8, md: 0 } }}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/configuration" element={<Configuration />} />
                  <Route path="/settlements" element={<Settlements />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/balance" element={<Balance />} />
                  <Route path="/disputes" element={<Disputes />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Box>
              <MobileNav />
            </Box>
          </Box>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
