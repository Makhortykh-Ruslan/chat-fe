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
  const [isShowLoader, setIsAuthenticated] = useState(true);
  const [isSession, setIsLoading] = useState(false);

  useEffect(() => {
    UserService.getSession()
      .then(({ data }) => {
        if (!data.session) {
          setIsAuthenticated(false);
          return null;
        }

        return UserService.getUser();
      })
      .then((result) => {
        if (result?.data?.user) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsAuthenticated(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isShowLoader) {
    return <CircularProgress size={20} color='inherit' />;
  }

  if (!isSession) {
    return <Navigate to={appRoutes.auth.routerPath} />;
  }

  return <>{children}</>;
};
