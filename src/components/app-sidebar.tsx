import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  Avatar,
  IconButton,
} from '@mui/material';
import {
  Dashboard,
  Settings,
  Receipt,
  AccountBalance,
  Gavel,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { useAuthStore } from '@/stores/auth-store';

const drawerWidth = 240;
const drawerWidthCollapsed = 64;

const menuItems = [
  { title: 'Dashboard', path: '/', icon: Dashboard },
  { title: 'Configuration', path: '/configuration', icon: Settings },
  { title: 'Settlements', path: '/settlements', icon: AccountBalance },
  { title: 'Invoices', path: '/invoices', icon: Receipt },
  { title: 'Balance', path: '/balance', icon: AccountBalance },
  { title: 'Disputes', path: '/disputes', icon: Gavel },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const currentWidth = collapsed ? drawerWidthCollapsed : drawerWidth;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: currentWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: currentWidth,
          boxSizing: 'border-box',
          transition: (theme) => theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'space-between' }}>
          {!collapsed && (
            <Typography variant="h6" noWrap sx={{ fontWeight: 700, color: 'primary.main' }}>
              BillSettle
            </Typography>
          )}
          <IconButton onClick={() => setCollapsed(!collapsed)} size="small">
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </Box>
        
        <Divider />
        
        <List sx={{ flex: 1, py: 1 }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  selected={isActive}
                  onClick={() => navigate(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: collapsed ? 'center' : 'initial',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: collapsed ? 0 : 3,
                      justifyContent: 'center',
                      color: isActive ? 'primary.main' : 'inherit',
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  {!collapsed && <ListItemText primary={item.title} />}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        
        <Divider />
        
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: collapsed ? 0 : 2, justifyContent: collapsed ? 'center' : 'flex-start' }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              {user?.name?.charAt(0) || 'U'}
            </Avatar>
            {!collapsed && (
              <Box sx={{ overflow: 'hidden' }}>
                <Typography variant="body2" noWrap sx={{ fontWeight: 600 }}>
                  {user?.name || 'User'}
                </Typography>
                <Typography variant="caption" noWrap color="text.secondary">
                  {user?.role || 'Role'}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
