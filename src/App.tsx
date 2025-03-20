import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { IconsProvider } from './app/core/icons-config/IconsContext.tsx';
import { appRoutesConfig } from './app/pages/app-routes.config.ts';

const App: () => JSX.Element = () => (
  <IconsProvider>
    <RouterProvider router={appRoutesConfig} />
  </IconsProvider>
);

export default App;
