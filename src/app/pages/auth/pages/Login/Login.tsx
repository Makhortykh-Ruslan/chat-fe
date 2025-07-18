import { Input } from '@core/components/Input/Input.tsx';
import { appRoutes } from '@core/constants';
import { useModuleNavigate } from '@core/hooks';
import React from 'react';
import { Controller } from 'react-hook-form';

import { useLoginForm } from '../../hooks/useLoginHooks.tsx';

const Login: React.FC = () => {
  const navigateFromModule = useModuleNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useLoginForm();

  const handleRedirectToSingUp = (): void => {
    navigateFromModule(appRoutes.registration.routerPath);
  };

  return (
    <section>
      <div>
        <h1>Hello</h1>

        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Input
              label='Email'
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
              label='Password'
              {...field}
              error={errors.password?.message as string}
            />
          )}
        />

        <div>
          undefined
          <span
            className='font-bold text-blue-500 cursor-pointer'
            onClick={handleRedirectToSingUp}
          >
            sing up
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
