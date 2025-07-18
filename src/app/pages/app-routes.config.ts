import { createBrowserRouter } from 'react-router-dom';

import { mainRoutingConfig } from '@/app/pages/main/main.routing.config.tsx';

import { authRoutingConfig } from './auth/auth.routing.config.tsx';

export const appRoutesConfig = createBrowserRouter([
  authRoutingConfig,
  mainRoutingConfig,
]);
