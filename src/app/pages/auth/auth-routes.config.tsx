import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { appRoutes } from '../../core/constants/routes.ts';

const Layout = lazy(() => import('../../core/components/Layout/Layout.tsx'));

const Login = lazy(() => import('../auth/pages/Login/Login.tsx'));
const Registration = lazy(
  () => import('../auth/pages/Registration/Registration.tsx'),
);

const children = [
  { path: appRoutes.login.routerPath, element: <Login /> },
  { path: appRoutes.registration.routerPath, element: <Registration /> },
];

export const authRoutesConfig = {
  path: appRoutes.auth.routerPath,
  element: <Layout />,
  children,
} as RouteObject;
