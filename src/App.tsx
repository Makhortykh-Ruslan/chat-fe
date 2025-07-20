import { LoaderOverlayContext, ThemeContext } from '@core/context';
import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { appRoutesConfig } from './app/pages/app-routes.config.ts';

const App: () => JSX.Element = () => (
  <ThemeContext>
    <LoaderOverlayContext>
      <RouterProvider router={appRoutesConfig} />
    </LoaderOverlayContext>
  </ThemeContext>
);

export default App;
