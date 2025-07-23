import { appRoutes } from '@core/constants';
import { ERegistrationStep, TRegistrationStep } from '@core/enum/e-steps.ts';
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

import { useAlertSnackbar } from '@/app/core/context';
import { AuthLayout } from '@/app/pages/auth/components/AuthLayout/AuthLayout.tsx';
import { useRegistrationForm } from '@/app/pages/auth/hooks/useRegistrationForm.tsx';

const Registration = (): React.ReactNode => {
  const [step, updateStep] = useState<TRegistrationStep>(
    ERegistrationStep.FORM,
  );
  const [isShowLoader, setIsShowLoader] = useState(false);
  const navigateFromModule = useModuleNavigate();
  const alert = useAlertSnackbar();

  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useRegistrationForm();

  const handleSubmit = async (): Promise<void> => {
    setIsShowLoader(true);

    try {
      const { email, password, userName } = getValues();

      const { error: registerError } = await AuthService.register({
        email,
        password,
        options: {
          data: {
            userName,
            email,
          },
        },
      });

      if (registerError) {
        alert.error(registerError.message ?? 'Registration error');
        return;
      }

      updateStep(ERegistrationStep.SUBMITTED_EMAIL);
    } catch (error) {
      console.error('Unexpected error during sign up', error);
      alert.error('Unexpected error, please try again.');
    } finally {
      setIsShowLoader(false);
    }
  };

  const handleRedirectToSingIn = (): void => {
    navigateFromModule(appRoutes.login.routerPath);
  };

  return (
    <AuthLayout>
      {step === ERegistrationStep.SUBMITTED_EMAIL && (
        <>
          <Typography variant='h4' align='center' sx={{ textAlign: 'center' }}>
            We have sent a confirmation email to your email. Please follow the
            link to activate your account.
          </Typography>
        </>
      )}
      {step === ERegistrationStep.FORM && (
        <>
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
              isShowLoader ? (
                <CircularProgress size={20} color='inherit' />
              ) : null
            }
          >
            {isShowLoader ? 'please wait...' : 'Sing up'}
          </Button>
        </>
      )}
      <Stack
        direction='row'
        justifyContent='center'
        spacing={1}
        alignItems='center'
      >
        <Typography variant='body2'>Move back to </Typography>

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
