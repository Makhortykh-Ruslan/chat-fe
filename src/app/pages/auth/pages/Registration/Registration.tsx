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
import { Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '@/app/pages/auth/components/AuthLayout/AuthLayout.tsx';
import { useRegistrationForm } from '@/app/pages/auth/hooks/useRegistrationForm.tsx';

const Registration: React.FC = () => {
  const [isShowLoader, setIsShowLoader] = useState(false);
  const navigateFromModule = useModuleNavigate();
  const navigate = useNavigate();

  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useRegistrationForm();

  const handleSubmit = async (): Promise<void> => {
    setIsShowLoader(true);

    try {
      const model = getValues();

      const { error: registerError } = await AuthService.register(model);
      if (registerError) {
        alert(registerError.message ?? 'Registration error');
        return;
      }

      const { error: updateError } = await AuthService.updateUser({
        data: { username: model.userName },
      });

      if (updateError) {
        alert(updateError.message ?? 'Failed to update username');
        return;
      }

      navigate('/');
    } catch (e) {
      console.error('Unexpected error during sign up', e);
      alert('Unexpected error, please try again.');
    } finally {
      setIsShowLoader(false);
    }
  };

  const handleRedirectToSingIn = (): void => {
    navigateFromModule(appRoutes.login.routerPath);
  };

  return (
    <AuthLayout>
      <Typography variant='h4' align='center' sx={{ textAlign: 'center' }}>
        Sing Up
      </Typography>

      <Controller
        name='userName'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id='outlined-basic'
            label='User name'
            variant='outlined'
            error={!!errors.userName}
            helperText={errors.userName?.message}
            fullWidth
          />
        )}
      />

      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
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
        variant='contained'
        onClick={handleSubmit}
        disabled={isShowLoader || !isValid}
        startIcon={
          isShowLoader ? <CircularProgress size={20} color='inherit' /> : null
        }
      >
        {isShowLoader ? 'please wait...' : 'Sing up'}
      </Button>

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
