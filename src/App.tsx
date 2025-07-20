import {
  AlertSnackbarContext,
  LoaderOverlayContext,
  ThemeContext,
} from '@core/context';
import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { appRoutesConfig } from './app/pages/app-routes.config.ts';

const App: () => JSX.Element = () => (
  <ThemeContext>
    <LoaderOverlayContext>
      <AlertSnackbarContext>
        <RouterProvider router={appRoutesConfig} />
      </AlertSnackbarContext>
    </LoaderOverlayContext>
  </ThemeContext>
);

export default App;
