import { TSeverity } from '@core/types';
import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export interface AlertSnackbarProps {
  autoHideDuration: number;
  severity: TSeverity;
  message: string;
  open: boolean;
  onClose: () => void;
}

export const AlertSnackbar = React.memo(
  ({
    open,
    autoHideDuration,
    severity,
    message,
    onClose,
  }: AlertSnackbarProps): React.ReactNode => {
    return (
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={onClose}
          severity={severity}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    );
  },
);
