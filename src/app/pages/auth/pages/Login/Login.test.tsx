import { renderWithProviders } from '@core/test/helpers';
import { generalMocks } from '@core/test/mocks';
import { screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Login from './Login';

generalMocks();

describe('Login form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should render Login form', async () => {
    renderWithProviders(<Login />);
    const el = await screen.findByTestId('login-form');
    expect(el).toBeInTheDocument();
  });
});
