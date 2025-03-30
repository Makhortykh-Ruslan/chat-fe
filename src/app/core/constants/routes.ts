import { RouterPath } from '@core/types/router-path.ts';

type AuthRoutingPath = 'auth' | 'registration' | 'login';

type MainRoutingPath = 'chat' | 'settings';

export type AppRouting = AuthRoutingPath | MainRoutingPath;

export const appRoutes: Record<AppRouting, RouterPath> = {
  // AUTH ROUTING //
  auth: {
    routerPath: 'auth',
  },
  registration: {
    routerPath: 'singUp',
  },
  login: {
    routerPath: 'singIn',
  },

  // MAIN ROUTING //
  chat: {
    routerPath: 'chat',
  },
  settings: {
    routerPath: 'settings',
  },
};
