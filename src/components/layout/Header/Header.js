import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import TopBar from '../TopBar/TopBar';
import CompanyClaim from '../CompanyClaim/CompanyClaim';
import MenuBar from '../MenuBar/MenuBar';
import Chatbot from '../../features/Chatbot/Chatbot';

const Header = props => (
  <header className={styles.root}>
    <Chatbot />
    <TopBar />
    <CompanyClaim />
    <MenuBar />
  </header>
);

// Header.propTypes = {};

export default Header;
