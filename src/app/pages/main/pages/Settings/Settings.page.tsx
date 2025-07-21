import { ToggleTheme } from '@core/components/ToggleTheme/ToggleTheme.tsx';
import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div>
      <ToggleTheme></ToggleTheme>
      Settings
    </div>
  );
};

export default SettingsPage;
