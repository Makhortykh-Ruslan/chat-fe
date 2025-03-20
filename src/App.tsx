import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { appRoutesConfig } from './app/pages/app-routes.config.ts';

const App: () => JSX.Element = () => (
  <RouterProvider router={appRoutesConfig} />
);

export default App;
