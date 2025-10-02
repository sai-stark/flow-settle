import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightMode, DarkMode, SettingsBrightness } from '@mui/icons-material';
import { useState } from 'react';
import { useThemeStore } from '@/stores/theme-store';

export function ThemeToggle() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { theme, setTheme } = useThemeStore();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    handleClose();
  };

  const getIcon = () => {
    if (theme === 'light') return <LightMode />;
    if (theme === 'dark') return <DarkMode />;
    return <SettingsBrightness />;
  };

  return (
    <>
      <IconButton onClick={handleClick} color="inherit" size="small">
        {getIcon()}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={() => handleThemeChange('light')} selected={theme === 'light'}>
          <ListItemIcon><LightMode fontSize="small" /></ListItemIcon>
          <ListItemText>Light</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange('dark')} selected={theme === 'dark'}>
          <ListItemIcon><DarkMode fontSize="small" /></ListItemIcon>
          <ListItemText>Dark</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange('system')} selected={theme === 'system'}>
          <ListItemIcon><SettingsBrightness fontSize="small" /></ListItemIcon>
          <ListItemText>System</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
