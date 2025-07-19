import { appRoutes } from '@core/constants';
import { useModuleNavigate } from '@core/hooks';
import { Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

import { AuthLayout } from '@/app/pages/auth/components/auth-layout/auth-layout.tsx';

const Registration: React.FC = () => {
  const navigateFromModule = useModuleNavigate();

  const handleRedirectToSingIn = (): void => {
    navigateFromModule(appRoutes.login.routerPath);
  };

  return (
    <AuthLayout>
      <Typography variant='h4' align='center' sx={{ textAlign: 'center' }}>
        Sing Up
      </Typography>

      <TextField
        id='outlined-basic'
        type='text'
        label='Name'
        variant='outlined'
      />
      <TextField
        id='outlined-basic'
        type='email'
        label='Email'
        variant='outlined'
      />
      <TextField
        id='outlined-basic'
        type='password'
        label='Password'
        variant='outlined'
      />

      <Stack
        direction='row'
        justifyContent='center'
        spacing={1}
        alignItems='center'
      >
        <Typography variant='body2'>Move back </Typography>

        <Button
          variant='text'
          sx={{ textTransform: 'none', padding: 0, minWidth: 'auto' }}
          onClick={handleRedirectToSingIn}
        >
          Sing in
        </Button>
      </Stack>
    </AuthLayout>
  );
};

export default Registration;
