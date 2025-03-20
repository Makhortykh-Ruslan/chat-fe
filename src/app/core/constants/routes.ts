import { RouterPath } from '../types/router-path.ts';

type AuthRoutingPath = 'auth' | 'registration' | 'login';

type MainRoutingPath = 'chat';

export type AppRouting = AuthRoutingPath | MainRoutingPath;

export const appRoutes: Record<AppRouting, RouterPath> = {
  // AUTH ROUTING //
  auth: {
    routerPath: 'auth',
  },
  registration: {
    routerPath: 'registration',
  },
  login: {
    routerPath: 'login',
  },

  // MAIN ROUTING //
  chat: {
    routerPath: 'chat',
  },
};
