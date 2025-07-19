import { appRoutes } from '@core/constants';
import { useModuleNavigate } from '@core/hooks';
import { AuthService } from '@core/services';
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { AuthLayout } from '@/app/pages/auth/components/auth-layout/auth-layout.tsx';

const Login = (): React.ReactNode => {
  const [isShowLoader, setIsShowLoader] = useState(false);
  const navigateFromModule = useModuleNavigate();

  const handleSubmit = async (): Promise<void> => {
    setIsShowLoader(true);

    const { data, error } = await AuthService.register({
      email: 'someone@email.com',
      password: 'UcdmCvDmXghTKMfxUyfZ',
    });

    if (error) {
      alert(error);
      setIsShowLoader(false);
      return;
    }

    console.log('handleSubmit', data, error);
  };

  const handleRedirectToSingUp = (): void => {
    navigateFromModule(appRoutes.registration.routerPath);
  };

  return (
    <AuthLayout>
      <Typography variant='h4' align='center' sx={{ textAlign: 'center' }}>
        Login
      </Typography>

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

      <Button
        variant='contained'
        onClick={handleSubmit}
        disabled={isShowLoader}
        startIcon={
          isShowLoader ? <CircularProgress size={20} color='inherit' /> : null
        }
      >
        {isShowLoader ? 'please wait...' : 'Sing in'}
      </Button>

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
