import React from 'react';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CompanyClaim = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row align-items-center`}>
        <div className={`col text-left ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>
        <div className={`col text-center ${styles.logo}`}>
          <Link to='/#'>
            <img src='/images/logo.png' alt='Bazar' />
          </Link>
        </div>
        <div className={`col text-right ${styles.cart}`}>
          <Link to='/#' className={styles.cartBox}>
            <Link to={`/cart`}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
            </Link>
            <div className={styles.cartCounter}>12345</div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CompanyClaim;
