import { LoaderOverlay } from '@core/components/LoaderOverlay/LoaderOverlay.tsx';
import React, { createContext, useContext, useState } from 'react';

interface LoaderOverlayContext {
  state: boolean;
  update: (bool: boolean) => void;
}

const context = createContext<LoaderOverlayContext | null>(null);

export const LoaderOverlayContext = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [state, setState] = useState(false);

  const update = (bool: boolean): void => {
    setState(bool);
  };

  return (
    <context.Provider value={{ state, update }}>
      {state && <LoaderOverlay />}
      {children}
    </context.Provider>
  );
};

export const useLoaderOverlay = (): LoaderOverlayContext => {
  const ctx = useContext(context);
  if (!ctx) throw new Error('useThemeMode must be used within ThemeWrapper');
  return ctx;
};
