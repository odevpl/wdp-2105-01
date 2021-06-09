import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CompanyClaim = ({ productsInCart }) => (
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
            <img src='images/logo.png' alt='Bazar' />
          </Link>
        </div>
        <div className={`col text-right ${styles.cart}`}>
          <Link to='/Cart' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>{productsInCart}</div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

CompanyClaim.propTypes = {
  productsInCart: PropTypes.number,
};

export default CompanyClaim;
