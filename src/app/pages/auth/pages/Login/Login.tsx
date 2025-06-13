import { Button } from '@core/components/Button/Button.tsx';
import { Input } from '@core/components/Input/Input.tsx';
import { Spinner } from '@core/components/Spinner/Spinner.tsx';
import { appRoutes } from '@core/constants';
import { useModuleNavigate } from '@core/hooks';
import { TAuthForm } from '@core/types';
import { AuthTokenResponsePassword } from '@supabase/supabase-js';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useLoginForm } from '../../hooks/useLoginHooks.tsx';

const Login: React.FC = () => {
  const [isShowSpinner, toggleSpinner] = useState(false);
  const { t } = useTranslation();
  const navigateFromModule = useModuleNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useLoginForm();

  const onHandleSubmit = async (
    formData: TAuthForm,
  ): Promise<AuthTokenResponsePassword> => {};

  const handleRedirectToSingUp = (): void => {
    navigateFromModule(appRoutes.registration.routerPath);
  };

  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='grid w-96 gap-4'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          {t('login_title')}
        </h1>

        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Input
              label={t('login_title')}
              {...field}
              error={errors.email?.message as string}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <Input
              label={t('login_title')}
              {...field}
              error={errors.password?.message as string}
            />
          )}
        />

        <Button
          disabled={!isValid || isShowSpinner}
          onClick={handleSubmit(onHandleSubmit)}
        >
          {t('login')}
          {isShowSpinner && <Spinner />}
        </Button>

        <div className='flex gap-4 justify-center items-center'>
          {t('no_account')}
          <span
            className='font-bold text-blue-500 cursor-pointer'
            onClick={handleRedirectToSingUp}
          >
            {t('sign_up')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
