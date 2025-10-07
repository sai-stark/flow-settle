import { 
  LayoutDashboard, 
  Settings, 
  FileText, 
  Wallet, 
  MessageSquare,
  Users,
  DollarSign
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { useAuthStore } from '@/stores/auth-store';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const mainItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Configuration', url: '/configuration', icon: Settings },
  { title: 'TSP Settlement', url: '/settlements', icon: DollarSign },
  { title: 'Invoices', url: '/invoices', icon: FileText },
  { title: 'Balance', url: '/balance', icon: Wallet },
  { title: 'Disputes', url: '/disputes', icon: MessageSquare },
];

export function AppSidebar() {
  const user = useAuthStore((state) => state.user);

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary flex-shrink-0">
            <DollarSign className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden min-w-0">
            <span className="text-sm font-semibold text-sidebar-foreground truncate">BillSettle</span>
            <span className="text-xs text-sidebar-foreground/60 truncate">Settlement Platform</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      end={item.url === '/'}
                      className={({ isActive }) =>
                        isActive
                          ? 'sidebar-item-active font-semibold'
                          : 'sidebar-item-hover'
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <Avatar className="h-8 w-8 flex-shrink-0">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              {user?.name.split(' ').map(n => n[0]).join('') || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden min-w-0">
            <span className="text-sm font-medium text-sidebar-foreground truncate">{user?.name}</span>
            <span className="text-xs text-sidebar-foreground/60 capitalize truncate">
              {user?.role.replace('-', ' ')}
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
