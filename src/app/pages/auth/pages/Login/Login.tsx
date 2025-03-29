import { Button } from '@core/components/Button/Button.tsx';
import { Input } from '@core/components/Input/Input.tsx';
import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TLoginForm, useLoginForm } from '../../hooks/useLoginHooks.tsx';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useLoginForm();

  const onHandleSubmit = (data: TLoginForm): void => {
    console.log('SUBMIT:', data);
  };

  return (
    <section className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-1/5 grid grid-cols-1 gap-4'>
        <h1 className='text-3xl text-center'>{t('title.login')}</h1>

        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label={t('labels.email')}
              placeholder={t('placeholders.email')}
              error={errors.email?.message as string}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label={t('labels.password')}
              placeholder={t('placeholders.password')}
              error={errors.password?.message as string}
            />
          )}
        />

        <Button
          disabled={isValid}
          name={t('login')}
          onClick={handleSubmit(onHandleSubmit)}
        />
      </div>
    </section>
  );
};

export default Login;
