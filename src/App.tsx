import { ThemeContext } from '@core/Context/theme.context.tsx';
import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { appRoutesConfig } from './app/pages/app-routes.config.ts';

const App: () => JSX.Element = () => (
  <ThemeContext>
    <RouterProvider router={appRoutesConfig} />
  </ThemeContext>
);

export default App;
