import { appRoutes } from '@core/constants/routes.ts';
import { SessionGuard } from '@core/guards/session.guard.tsx';
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import MainPage from './Main.page.tsx';

const Chat = lazy(() => import('./pages/Chat/Chat.page.tsx'));
const Settings = lazy(() => import('./pages/Settings/Settings.page.tsx'));

const { chat, settings } = appRoutes;

const children = [
  { index: true, element: <Navigate to={chat.routerPath} /> },
  { path: chat.routerPath, element: <Chat /> },
  { path: settings.routerPath, element: <Settings /> },
];

export const mainRoutingConfig = {
  path: '',
  element: (
    <SessionGuard>
      <MainPage />
    </SessionGuard>
  ),
  children,
} as RouteObject;
