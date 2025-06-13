import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { SimpleForm } from './SimpleForm.tsx';

describe('simpleForm', () => {
  test('should input to be render dom', () => {
    const simpleForm = <SimpleForm />;
    render(simpleForm);
    const input = screen.getByLabelText('Name:');
    expect(input).toBeInTheDocument();
  });

  test('should button to be render dom', () => {
    const simpleForm = <SimpleForm />;
    render(simpleForm);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
  });

  test('should can writing value in field', async () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Name:');
    const button = screen.getByRole('button', { name: /submit/i });

    await userEvent.type(input, 'Руслан');
    await userEvent.click(button);

    expect(screen.getByTestId('success')).toBeInTheDocument();
  });

  test('if clicked on submit button without value', async () => {
    render(<SimpleForm />);
    const button = screen.getByRole('button', { name: /submit/i });

    await userEvent.click(button);

    expect(screen.queryByTestId('success')).not.toBeInTheDocument();
  });
});
