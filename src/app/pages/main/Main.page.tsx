import React from 'react';
import { Outlet } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainPage;
