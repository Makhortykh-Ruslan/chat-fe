import { AlertSnackbar } from '@core/components/Alert/AlertSnackbar.tsx';
import { TSeverity } from '@core/types';
import React, { createContext, useContext, useState } from 'react';

interface AlertSnackbarContext {
  success: (message: string, autoHideDuration?: number) => void;
  error: (message: string, autoHideDuration?: number) => void;
  warning: (message: string, autoHideDuration?: number) => void;
}

const context = createContext<AlertSnackbarContext | null>(null);

export const AlertSnackbarContext = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [message, setMassage] = useState('');
  const [severity, setSeverity] = useState<TSeverity>('error');
  const [autoHideDuration, setAutoHideDuration] = useState(3000);
  const [open, setOpen] = useState(false);

  const success = (message: string, autoHideDuration?: number): void => {
    setMassage(message);
    setSeverity('success');
    setOpen(true);
    if (autoHideDuration) {
      setAutoHideDuration(autoHideDuration);
    }
  };

  const error = (message: string, autoHideDuration?: number): void => {
    setMassage(message);
    setSeverity('error');
    setOpen(true);
    if (autoHideDuration) {
      setAutoHideDuration(autoHideDuration);
    }
  };

  const warning = (message: string, autoHideDuration?: number): void => {
    setMassage(message);
    setSeverity('warning');
    setOpen(true);
    if (autoHideDuration) {
      setAutoHideDuration(autoHideDuration);
    }
  };

  const onClose = (): void => {
    setOpen(false);
  };

  return (
    <context.Provider value={{ success, error, warning }}>
      <AlertSnackbar
        onClose={onClose}
        open={open}
        message={message}
        autoHideDuration={autoHideDuration}
        severity={severity}
      ></AlertSnackbar>
      {children}
    </context.Provider>
  );
};

export const useAlertSnackbar = (): AlertSnackbarContext => {
  const ctx = useContext(context);
  if (!ctx)
    throw new Error(
      'useAlertSnackbar must be used within AlertSnackbarContext',
    );
  return ctx;
};
