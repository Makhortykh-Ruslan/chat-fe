import { appRoutes } from '@core/constants/routes.ts';
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { AuthPage } from './auth.page.tsx';

const Login = lazy(() => import('../auth/pages/Login/Login.tsx'));
const Registration = lazy(
  () => import('../auth/pages/Registration/Registration.tsx'),
);

const { login, registration, auth } = appRoutes;

const children = [
  { index: true, element: <Navigate to={login.routerPath} /> },
  { path: login.routerPath, element: <Login /> },
  { path: registration.routerPath, element: <Registration /> },
];

export const authRoutingConfig = {
  path: auth.routerPath,
  element: <AuthPage />,
  children,
} as RouteObject;
