import SideBar from '@core/components/SideBar/SideBar.tsx';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainPage;
