import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { SideBar } from '../main/components/SideBar/SideBar.tsx';

const MainPage = (): React.ReactNode => {
  return (
    <Box display='flex' height='100vh'>
      <SideBar />
      <Box component='main' flexGrow={1} overflow='auto'>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainPage;
