import React from 'react';
import styles from './Reviews.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

class Reviews extends React.Component {
  state = {
    activeTab: 'reviews',
    tabSwitchingStyle: 'fadeIn',
  };

  handleTabChange(newTab) {
    this.setState({ tabSwitchingStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeTab: newTab, tabSwitchingStyle: styles.fadeIn });
    }, 500);
  }

  render() {
    const { stars, activeTab, showTabContent, tabSwitchingStyle } = this.state;

    const tabs = [
      { id: 'description', name: 'DESCRIPTION' },
      { id: 'reviews', name: 'REVIEWS (0)' },
      { id: 'specification', name: 'SPECIFICATION' },
      { id: 'customTab', name: 'CUSTOM TAB' },
    ];

    tabs.filter(tabs => {
      for (let tab in tabs) {
        if (tabs[tab] === 'description' && tabs[tab] === this.state.activeTab) {
          this.showTabContent = <div> Here is a card {tabs.name}</div>;
          return showTabContent;
        } else if (
          tabs[tab] === 'specification' &&
          tabs[tab] === this.state.activeTab
        ) {
          this.showTabContent = <div> Here is a card {tabs.name}</div>;
          return showTabContent;
        } else if (tabs[tab] === 'customTab' && tabs[tab] === this.state.activeTab) {
          this.showTabContent = <div> Here is a card {tabs.name}</div>;
          return showTabContent;
        } else if (tabs[tab] === 'reviews' && tabs[tab] === this.state.activeTab) {
          this.showTabContent = (
            <div>
              <p>There are no reviews fot this product.</p>
              <p className={styles.add}>Add a review</p>
              <p>Your Rating</p>
              <div className={styles.rating}>
                <p>Bad</p>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <Link key={i} to='/#'>
                      {i <= stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </Link>
                  ))}
                </div>
                <p>Good</p>
              </div>
              <form>
                <p>Your Review</p>
                <textarea className={styles.textArea} rows='5' placeholder='' />
                <div className={styles.inputs}>
                  <input type='text' placeholder='Name*' />
                  <input type='email' placeholder='Email*' />
                  <Button className={styles.continue} variant='main'>
                    CONTINUE
                  </Button>
                </div>
              </form>
            </div>
          );
          return showTabContent;
        }
      }
      return 0;
    });

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <div className={styles.tabs}>
              <ul>
                {tabs.map(tab => (
                  <li
                    key={tab.id}
                    className={tab.id === activeTab ? styles.active : ''}
                  >
                    <Button noJump onClick={() => this.handleTabChange(tab.id)}>
                      {tab.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={tabSwitchingStyle}>
              <div className={styles.tabContent}>{this.showTabContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
