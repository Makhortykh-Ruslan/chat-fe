import React, { useState } from 'react';

export const SimpleForm: React.FC = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <form data-testid='data-test-form' onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input id='name' value={name} onChange={(e) => setName(e.target.value)} />
      <button data-testid='data-test-button' type='submit'>
        Submit
      </button>
      {submitted && <p data-testid='success'>Submitted!</p>}
    </form>
  );
};
