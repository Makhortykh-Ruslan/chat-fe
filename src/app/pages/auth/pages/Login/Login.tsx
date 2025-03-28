import { Input } from '@core/components/Input/Input.tsx';
import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useLoginForm } from '../../hooks/useLoginHooks.tsx';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useLoginForm();

  const onSubmit = (data: any): void => {
    console.log('SUBMIT:', data);
  };

  return (
    <div>
      <h1>{t('form.email')}</h1>

      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label='Email'
            placeholder={t('placeholders.email')}
            error={errors.email?.message as string}
          />
        )}
      />

      <button onClick={handleSubmit(onSubmit)}>Увійти</button>
    </div>
  );
};

export default Login;
