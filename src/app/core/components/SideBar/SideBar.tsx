import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SideBar.module.scss';

const SideBar: React.FC = () => {
  return (
    <nav className={styles.component}>
      <NavLink to='/chat' end>
        Chat
      </NavLink>
      <NavLink to='/settings' end>
        Settings
      </NavLink>
    </nav>
  );
};

export default SideBar;
