import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProductPage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <h1>
                BEDROOM <span>FURTNITURE</span>
              </h1>
              <h5>
                ALWAYS <span>25%</span> OFF OR MORE
              </h5>
            </div>
            <div className={styles.bannerNav}>
              <Button className={styles.navBtn}>Home</Button>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
              <Button className={styles.navBtn}>Furniture</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
