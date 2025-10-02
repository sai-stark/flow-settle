import { Box, CircularProgress, Typography } from '@mui/material';
import { AccountBalance } from '@mui/icons-material';

export function LoadingScreen() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 3,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CircularProgress size={60} thickness={4} />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <AccountBalance sx={{ fontSize: 30, color: 'primary.main' }} />
        </Box>
      </Box>
      <Typography variant="h6" color="text.secondary">
        Loading...
      </Typography>
    </Box>
  );
}
