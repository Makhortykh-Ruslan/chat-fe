import { appRoutes } from '@core/constants/routes.ts';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Layout = lazy(() => import('../../core/components/Layout/Layout.tsx'));

const Login = lazy(() => import('../auth/pages/Login/Login.tsx'));
const Registration = lazy(
  () => import('../auth/pages/Registration/Registration.tsx'),
);

const { login, registration, auth } = appRoutes;

const children = [
  { path: login.routerPath, element: <Login /> },
  { path: registration.routerPath, element: <Registration /> },
];

export const authRoutesConfig = {
  path: auth.routerPath,
  element: <Layout />,
  children,
} as RouteObject;
