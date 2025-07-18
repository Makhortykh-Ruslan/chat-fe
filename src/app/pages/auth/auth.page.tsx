import Container from '@mui/material/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthPage = (): React.ReactNode => {
  return (
    <Container component='main' maxWidth='xs'>
      <Outlet />
    </Container>
  );
};
