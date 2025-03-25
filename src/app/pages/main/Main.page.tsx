import Layout from '@core/components/Layout/Layout.tsx';
import SideBar from '@core/components/SideBar/SideBar.tsx';
import React from 'react';

import styles from './Main.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <SideBar />
      <Layout />
    </div>
  );
};

export default MainPage;
