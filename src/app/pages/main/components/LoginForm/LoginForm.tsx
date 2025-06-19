import React, { useState } from 'react';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }

    setError('');
    // here would be login logic
    alert('Logged in!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (validateEmail(value)) {
      setError('');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input data-testid='email-input' value={email} onChange={handleChange} />
      <button data-testid='submit-button' onClick={handleSubmit}>
        Submit
      </button>
      {error && <p data-testid='error'>{error}</p>}
    </div>
  );
};
