import { ThemProvider } from '@core/Context/testContext.tsx';
import { IconsProvider } from '@core/icons-config/IconsContext.tsx';
import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { appRoutesConfig } from './app/pages/app-routes.config.ts';

const App: () => JSX.Element = () => (
  <IconsProvider>
    <ThemProvider>
      <RouterProvider router={appRoutesConfig} />
    </ThemProvider>
  </IconsProvider>
);

export default App;
