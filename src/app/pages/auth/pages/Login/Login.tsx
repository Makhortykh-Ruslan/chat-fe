import { appRoutes } from '@core/constants';
import { useAlertSnackbar } from '@core/context';
import { useModuleNavigate } from '@core/hooks';
import { AuthService } from '@core/services';
import { useStore } from '@core/store/useStore.tsx';
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '@/app/pages/auth/components/AuthLayout/AuthLayout.tsx';
import { useAuthForm } from '@/app/pages/auth/hooks';

const Login = (): React.ReactNode => {
  const [isShowLoader, setIsShowLoader] = useState(false);
  const navigateFromModule = useModuleNavigate();
  const navigate = useNavigate();
  const alert = useAlertSnackbar();
  const setUserToStore = useStore((store) => store.setUser);

  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useAuthForm();

  const handleSubmit = async (): Promise<void> => {
    setIsShowLoader(true);

    const model = getValues();
    const { data, error } = await AuthService.login(model);

    if (error) {
      alert.error(error.message);
      setIsShowLoader(false);
      return;
    }

    setUserToStore(data.user);

    navigate('/');

    setIsShowLoader(false);
  };

  const handleRedirectToSingUp = (): void => {
    navigateFromModule(appRoutes.registration.routerPath);
  };

  return (
    <AuthLayout>
      <Typography
        data-testid='login-form'
        variant='h4'
        align='center'
        sx={{ textAlign: 'center' }}
      >
        Login
      </Typography>

      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            data-testid='email-field'
            id='outlined-basic'
            type='email'
            label='Email'
            variant='outlined'
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
        )}
      />

      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            data-testid='password-field'
            id='outlined-basic'
            type='password'
            label='Password'
            variant='outlined'
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />
        )}
      />

      <Button
        data-testid='button'
        variant='contained'
        onClick={handleSubmit}
        disabled={isShowLoader || !isValid}
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
