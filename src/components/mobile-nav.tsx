import { useLocation, useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
  Dashboard,
  Settings,
  Receipt,
  AccountBalance,
  Gavel,
} from '@mui/icons-material';

const navItems = [
  { label: 'Dashboard', path: '/', icon: Dashboard },
  { label: 'Config', path: '/configuration', icon: Settings },
  { label: 'Invoices', path: '/invoices', icon: Receipt },
  { label: 'Balance', path: '/balance', icon: AccountBalance },
  { label: 'Disputes', path: '/disputes', icon: Gavel },
];

export function MobileNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: 'block', md: 'none' },
        zIndex: 1000,
      }}
      elevation={3}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(_, newValue) => navigate(newValue)}
        showLabels
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <BottomNavigationAction
              key={item.path}
              label={item.label}
              value={item.path}
              icon={<Icon />}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}
