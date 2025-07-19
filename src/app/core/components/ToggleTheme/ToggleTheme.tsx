import { useThemeMode } from '@core/Context/theme.context.tsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { IconButton } from '@mui/material';
import React from 'react';

export const ToggleTheme = (): React.ReactNode => {
  const { mode, toggleTheme } = useThemeMode();
  return (
    <IconButton onClick={toggleTheme}>
      {mode === 'light' ? <NightlightIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
