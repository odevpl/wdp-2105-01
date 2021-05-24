import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <a href='/#'>
                USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='/#'>
                English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='/#'>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='/#'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                <span>Login</span>
              </a>
            </li>
            <Link to={`/register`}>
              <li className='nav-item'>Register</li>
            </Link>
            <li>
              <a href='/#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
