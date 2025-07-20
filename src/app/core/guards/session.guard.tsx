import { appRoutes } from '@core/constants';
import { useLoaderOverlay } from '@core/context';
import { UserService } from '@core/services';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const SessionGuard = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [isSession, setIsAuthenticated] = useState(true);
  const { state, update } = useLoaderOverlay();

  useEffect(() => {
    update(true);

    UserService.getVerifiedUser()
      .then((user) => setIsAuthenticated(!!user))
      .catch(() => setIsAuthenticated(false))
      .finally(() => update(false));
  }, []);

  if (state) return;

  if (!isSession) {
    return <Navigate to={appRoutes.auth.routerPath} />;
  }

  return <>{children}</>;
};
