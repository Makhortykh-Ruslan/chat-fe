import { appRoutes } from '@core/constants';
import { useLoaderOverlay } from '@core/context';
import { UserService } from '@core/services';
import { useStore } from '@core/store/useStore.tsx';
import { TAuthStatuses } from '@core/types';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const SessionGuard = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [status, setStatus] = useState<TAuthStatuses>('checking');

  const { update } = useLoaderOverlay();
  const setUserToStore = useStore((store) => store.setUser);

  useEffect(() => {
    update(true);

    UserService.getVerifiedUser()
      .then((user) => {
        if (user) {
          setUserToStore(user);
          setStatus('authenticated');
        } else {
          setStatus('unauthenticated');
        }
      })
      .catch(() => setStatus('unauthenticated'))
      .finally(() => update(false));
  }, []);

  if (status === 'checking') return null;

  if (status === 'unauthenticated') {
    return <Navigate to={appRoutes.auth.routerPath} />;
  }
  return <>{children}</>;
};
