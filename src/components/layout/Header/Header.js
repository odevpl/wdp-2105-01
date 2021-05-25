import React from 'react';

import styles from './Header.module.scss';

import TopBar from '../TopBar/TopBar';
import CompanyClaim from '../CompanyClaim/CompanyClaim';
import MenuBar from '../MenuBar/MenuBar';

const Header = props => (
  <header className={styles.root}>
    <TopBar />
    <CompanyClaim />
    <MenuBar />
  </header>
);

export default Header;
