import { ToggleTheme } from '@core/components/ToggleTheme/ToggleTheme.tsx';
import { useStore } from '@core/store/useStore.tsx';
import { Button } from '@mui/material';
import React from 'react';

const SettingsPage: React.FC = () => {
  const logout = useStore((state) => state.logout);

  const logOut = (): void => {
    logout();
    localStorage.clear();
    sessionStorage.clear();

    window.location.reload();
  };

  return (
    <div>
      <ToggleTheme></ToggleTheme>
      Settings
      <Button
        variant='text'
        onClick={() => logOut()}
        sx={{ textTransform: 'none', padding: 0, minWidth: 'auto' }}
      >
        Log out
      </Button>
    </div>
  );
};

export default SettingsPage;
