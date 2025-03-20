import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { appRoutes } from '../../core/constants/routes.ts';

const Layout = lazy(() => import('../../core/components/Layout/Layout.tsx'));
const Chat = lazy(() => import('../main/pages/Chat/Chat.tsx'));

const children = [
  { index: true, element: <Navigate to={appRoutes.chat.routerPath} /> },
  { path: appRoutes.chat.routerPath, element: <Chat /> },
];

export const mainRoutesConfig = {
  path: '',
  element: <Layout />,
  children,
} as RouteObject;
