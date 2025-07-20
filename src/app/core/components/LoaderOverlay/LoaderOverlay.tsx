import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const LoaderOverlay = (): React.ReactNode => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      bgcolor: 'rgba(255,255,255,0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1300,
    }}
  >
    <CircularProgress size='3rem' />
  </Box>
);
