import React from 'react';
import styles from './Chatbot.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faSync,
  faCommentDots,
  faPaperPlane,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';

class Chatbot extends React.Component {
  state = {
    showChat: false,
  };

  render() {
    return (
      <div className={styles.chatbot}>
        <div className={styles.root}>
          {!this.state.showChat && (
            <div
              className={styles.button}
              onClick={() => this.setState({ showChat: true })}
            >
              Need help? Contact us
            </div>
          )}
          {this.state.showChat && (
            <div className={styles.chat}>
              <div className={styles.top}>
                <FontAwesomeIcon
                  icon={faSync}
                  className={styles.topButton}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faTimes}
                  className={styles.topButton}
                  onClick={() =>
                    this.setState({
                      showChat: false,
                    })
                  }
                ></FontAwesomeIcon>
              </div>
              <div className={styles.chatBody}>
                <div className={styles.robot}>
                  <FontAwesomeIcon
                    className={styles.user}
                    icon={faHeadset}
                  ></FontAwesomeIcon>
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
          )}
        </div>
      </div>
    );
  }
}

export default Chatbot;
