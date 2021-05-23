import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Chatbot.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faSync,
  faCommentDots,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

class Chatbot extends React.Component {
  state = {
    openBot: false,
  };

  render() {
    return this.state.openBot ? (
      <div className={styles.chatbot}>
        <div className={styles.root}>
          <div className={styles.chat}>
            <div className={styles.top}>
              <Link to='#'>
                <FontAwesomeIcon icon={faSync}></FontAwesomeIcon>
              </Link>
              <Link to='#'>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </Link>
            </div>
            <div className={styles.chatBody}>
              <div className={styles.robot}>
                <img
                  src='https://img-premium.flaticon.com/png/512/3421/3421082.png?token=exp=1621430936~hmac=a4b8542f74c140eba120e9ed902e5352'
                  alt=''
                />
                <p>Welcome in our shop! How can I help You?</p>
              </div>
              <Link to='#'>Select a conversation topic</Link>
            </div>
            <div className={styles.message}>
              <textarea placeholder='Type your question...'></textarea>
              <Link className={styles.sendIcon} to='#'>
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </Link>
            </div>
            <div className={styles.send}>
              <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={styles.chatbot}>
        <div className={styles.button}>
          <Link onClick={this.setState({ openBot: true })} to='#'>
            Need help? Write!
          </Link>
        </div>
      </div>
    );
  }
}

export default Chatbot;
