import { AppBar, Toolbar, IconButton, Badge, Box } from '@mui/material';
import { Notifications, Menu as MenuIcon } from '@mui/icons-material';
import { ThemeToggle } from './theme-toggle';

export function PageHeader() {
  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit" size="small">
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
