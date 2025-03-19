import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { appRoutesPath } from '../../core/constants/routes.ts';

const Layout = lazy(() => import('../../core/components/Layout/Layout.tsx'));

const Login = lazy(() => import('../auth/pages/Login/Login.tsx'));
const Registration = lazy(
  () => import('../auth/pages/Registration/Registration.tsx'),
);

export const authRoutesConfig = {
  path: appRoutesPath.auth.routerPath,
  element: <Layout />,
  children: [
    { path: appRoutesPath.login.routerPath, element: <Login /> },
    { path: appRoutesPath.registration.routerPath, element: <Registration /> },
  ],
} as RouteObject;
