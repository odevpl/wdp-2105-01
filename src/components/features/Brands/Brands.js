import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Brands.module.scss';

const Brands = ({ brands }) => (
  <div className={styles.root}>
    <div className='container pb-3'>
      <div className='row '>
        <div className={'col-12 justify-content-between ' + styles.image}>
          <button type='button' className='btn btn-dark rounded-0'>
            <a href='#'>
              <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
            </a>
          </button>
          {brands.map(brand => (
            <div key={brand.id}>
              <img src={brand.logo} alt='' />
            </div>
          ))}
          <button type='button' className='btn btn-dark rounded-0'>
            <a href='#'>
              <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  brands: PropTypes.object,
  logo: PropTypes.string,
};

export default Brands;
