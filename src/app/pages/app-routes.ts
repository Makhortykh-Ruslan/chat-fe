import { createBrowserRouter } from 'react-router-dom';

import { authRoutesConfig } from './auth/auth-routes.config.tsx';
import { mainRoutesConfig } from './main/main-routes.config.tsx';

export const appRoutes = createBrowserRouter([
  authRoutesConfig,
  mainRoutesConfig,
]);
