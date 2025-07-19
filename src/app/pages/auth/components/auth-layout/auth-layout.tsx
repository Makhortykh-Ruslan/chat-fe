import { ToggleTheme } from '@core/components/ToggleTheme/ToggleTheme.tsx';
import { Box, Container, Stack } from '@mui/material';
import React from 'react';

export const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <Container
      component='main'
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        px: '10px',
        py: '10px',
      }}
    >
      <Stack direction='row' justifyContent='flex-end'>
        <ToggleTheme></ToggleTheme>
      </Stack>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <Stack spacing={3} sx={{ width: '100%' }}>
            {children}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
