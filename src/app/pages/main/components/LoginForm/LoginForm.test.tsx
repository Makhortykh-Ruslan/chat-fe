import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { LoginForm } from './LoginForm.tsx';

describe('loginForm', () => {
  it('input should be render in DOM', () => {
    render(<LoginForm />);
    const inputRef = screen.queryByTestId('email-input');
    expect(inputRef).toBeInTheDocument();
  });

  it('input should change value', async () => {
    render(<LoginForm />);
    const inputRef = screen.queryByTestId('email-input');
    await userEvent.type(inputRef, 'some value');
    expect(inputRef).toHaveValue();
  });

  it('invalid input', async () => {
    render(<LoginForm />);
    const button = screen.getByTestId('submit-button');
    await userEvent.click(button);

    const error = await screen.findByTestId('error');
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('Invalid email');
  });

  it('should submit when email is valid', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<LoginForm />);
    const input = screen.getByTestId('email-input');
    const button = screen.getByTestId('submit-button');

    await userEvent.type(input, 'test@example.com');
    await userEvent.click(button);

    const error = screen.queryByTestId('error');
    expect(error).not.toBeInTheDocument();
    expect(window.alert).toHaveBeenCalledWith('Logged in!');
  });

  it('should not submit', async () => {
    render(<LoginForm />);
    const input = screen.getByTestId('email-input');
    const button = screen.getByTestId('submit-button');

    await userEvent.click(button);
    const error = screen.queryByTestId('error');

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('Invalid email');

    await userEvent.type(input, 'test@example.com');

    const errorAfter = screen.queryByTestId('error');
    expect(errorAfter).not.toBeInTheDocument();
  });
});
