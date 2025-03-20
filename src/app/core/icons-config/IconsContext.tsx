import React, { createContext, useContext } from 'react';

import { cfIcon, completeIconSet } from './icons-config.ts';

interface IconsContextType {
  icons: Map<cfIcon, string>;
}

const IconsContext = createContext<IconsContextType | null>(null);

export const IconsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const iconsMap = new Map<cfIcon, string>(
    completeIconSet.map((icon) => [icon.name, icon.data]),
  );

  return (
    <IconsContext.Provider value={{ icons: iconsMap }}>
      {children}
    </IconsContext.Provider>
  );
};

export const useIconsContext: () => IconsContextType = () =>
  useContext(IconsContext) as IconsContextType;
