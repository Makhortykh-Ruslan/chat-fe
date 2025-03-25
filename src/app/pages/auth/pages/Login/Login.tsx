import Input from '@core/components/Input/Input.tsx';
import React, { ChangeEvent } from 'react';

const Login: React.FC = () => {
  const handleLogin = (event: ChangeEvent): void => {
    console.log('event', event);
  };

  return (
    <div>
      <h1>Hello</h1>

      <Input
        placeholder={'hello'}
        label={'Hello'}
        value={''}
        onChange={(e) => handleLogin(e)}
      />
    </div>
  );
};

export default Login;
