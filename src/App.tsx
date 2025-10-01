import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
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
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" />
        <BrowserRouter>
          <SidebarProvider defaultOpen={true}>
            <div className="flex min-h-screen w-full">
              <div className="hidden md:flex">
                <AppSidebar />
              </div>
              <div className="flex flex-1 flex-col">
                <PageHeader />
                <main className="flex-1 pb-16 md:pb-0">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/configuration" element={<Configuration />} />
                    <Route path="/settlements" element={<Settlements />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/balance" element={<Balance />} />
                    <Route path="/disputes" element={<Disputes />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <MobileNav />
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
