// ValidatedForm.tsx
import { useState } from 'react';

export const ValidatedForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Ім’я обовʼязкове');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Імʼя:</label>
      <input id='name' value={name} onChange={(e) => setName(e.target.value)} />
      <button type='submit'>Надіслати</button>
      {error && <p role='alert'>{error}</p>}
      {submitted && <p data-testid='success'>Успішно надіслано!</p>}
    </form>
  );
};
