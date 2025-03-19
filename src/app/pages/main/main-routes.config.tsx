import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { appRoutesPath } from '../../core/constants/routes.ts';

const Layout = lazy(() => import('../../core/components/Layout/Layout.tsx'));

const Chat = lazy(() => import('../main/pages/Chat/Chat.tsx'));

export const mainRoutesConfig = {
  path: '',
  element: <Layout />,
  children: [
    { index: true, element: <Navigate to={appRoutesPath.chat.routerPath} /> },
    { path: appRoutesPath.chat.routerPath, element: <Chat /> },
  ],
} as RouteObject;
