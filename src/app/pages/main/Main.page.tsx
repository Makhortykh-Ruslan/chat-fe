import SideBar from '@core/components/SideBar/SideBar.tsx';
import React from 'react';

import styles from './Main.module.scss';

const Layout = React.lazy(
  () => import('../../core/components/Layout/Layout.tsx'),
);

const MainPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <SideBar />
      <Layout />
    </div>
  );
};

export default MainPage;
