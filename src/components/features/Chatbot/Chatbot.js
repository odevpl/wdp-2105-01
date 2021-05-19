import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Chatbot.module.scss';

const Chatbot = () => (
  <div className={styles.root}>
    <div className={styles.button}>
      <a href='#'>Need help? Write!</a>
    </div>
  </div>
);

// Chatbot.propTypes = {};

export default Chatbot;
