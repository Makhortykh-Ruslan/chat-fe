import { appRoutes } from '@core/constants';
import { UserService } from '@core/services';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const SessionGuard = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [isShowLoader, setIsShowLoader] = useState(true);
  const [isSession, setIsSession] = useState(false);

  useEffect(() => {
    UserService.getSession()
      .then((response) => setIsSession(!!response.data.session))
      .catch((error) => {
        console.error('Session check failed:', error);
      })
      .finally(() => setIsShowLoader(false));
  }, []);

  if (isShowLoader) {
    return <CircularProgress size={20} color='inherit' />;
  }

  if (!isSession) {
    return <Navigate to={appRoutes.auth.routerPath} />;
  }

  return <>{children}</>;
};
