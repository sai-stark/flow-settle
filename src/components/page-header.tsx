import { Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-media-query';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AppSidebar } from '@/components/app-sidebar';
import { DollarSign } from 'lucide-react';

export function PageHeader() {
  const isMobile = useIsMobile();
  const { open } = useSidebar();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-2 px-4 md:h-16 md:gap-4 md:px-6">
        {/* Mobile menu trigger */}
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <div className="flex h-full flex-col">
                <div className="border-b border-sidebar-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                      <DollarSign className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">BillSettle</span>
                      <span className="text-xs text-muted-foreground">Settlement Platform</span>
                    </div>
                  </div>
                </div>
                <AppSidebar />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <SidebarTrigger className="-ml-2" />
        )}
        
        <div className="flex flex-1 items-center justify-end gap-1 md:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-9 w-9 md:h-10 md:w-10">
                <Bell className="h-4 w-4 md:h-5 md:w-5" />
                <Badge 
                  variant="destructive" 
                  className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center p-0 text-[10px] md:h-5 md:w-5 md:text-xs"
                >
                  3
                </Badge>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-50 w-[calc(100vw-2rem)] bg-popover md:w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">New settlement pending</p>
                  <p className="text-xs text-muted-foreground">TSP Partner A requires approval</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Invoice overdue</p>
                  <p className="text-xs text-muted-foreground">Invoice #INV-2024-001 is 5 days overdue</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">API usage alert</p>
                  <p className="text-xs text-muted-foreground">You've reached 80% of your monthly limit</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
