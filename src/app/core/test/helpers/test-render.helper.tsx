import { ThemeContext } from '@core/context';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <ThemeContext>{ui}</ThemeContext>
    </MemoryRouter>,
  );
};
