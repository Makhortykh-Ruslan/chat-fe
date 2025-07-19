import { appRoutes } from '@core/constants';
import { useModuleNavigate } from '@core/hooks';
import { Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

import { AuthLayout } from '@/app/pages/auth/components/auth-layout/auth-layout.tsx';

const Login = (): React.ReactNode => {
  const navigateFromModule = useModuleNavigate();

  const handleRedirectToSingUp = (): void => {
    navigateFromModule(appRoutes.registration.routerPath);
  };

  return (
    <AuthLayout>
      <Typography variant='h4' align='center' sx={{ textAlign: 'center' }}>
        Login
      </Typography>

      <TextField id='outlined-basic' label='Login' variant='outlined' />
      <TextField id='outlined-basic' label='Password' variant='outlined' />

      <Button variant='contained'>Sing in</Button>

      <Stack
        direction='row'
        justifyContent='center'
        spacing={1}
        alignItems='center'
      >
        <Typography variant='body2'>Don’t have an account?</Typography>
        <Button
          variant='text'
          onClick={handleRedirectToSingUp}
          sx={{ textTransform: 'none', padding: 0, minWidth: 'auto' }}
        >
          Sign up
        </Button>
      </Stack>
    </AuthLayout>
  );
};

export default Login;
