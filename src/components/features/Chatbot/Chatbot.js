import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Chatbot.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faSync,
  faCommentDots,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => (
  <div className={styles.root}>
    <div className={styles.chat}>
      <div className={styles.top}>
        <a href='#'>
          <FontAwesomeIcon icon={faSync}></FontAwesomeIcon>
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </a>
      </div>
      <div className={styles.chatBody}>
        <div className={styles.robot}>
          <img
            src='https://img-premium.flaticon.com/png/512/3774/3774694.png?token=exp=1621423716~hmac=a4a30ce28e182faa22181dbd43ec51b8'
            alt=''
          />
          <p>Welcome in our shop! How can I help You?</p>
        </div>
        <a href='#'>Select a conversation topic</a>
      </div>
      <div className={styles.message}>
        <textarea placeholder='Type your question...'></textarea>
        <a className={styles.sendIcon} href='#'>
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
        </a>
      </div>
      <div className={styles.send}>
        <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
      </div>
    </div>
    <div className={styles.button}>
      <a href='#'>Need help? Write!</a>
    </div>
  </div>
);

// Chatbot.propTypes = {};

export default Chatbot;
