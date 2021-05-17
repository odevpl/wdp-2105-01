import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Shop.module.scss';

const Shop = () => (
  <div className={styles.root}>
    <div className='container'>
      <div>BANNER</div>
      <div className='row'>
        <div className='col-9'>PRODUCT LIST</div>
        <div className='col-3'>FILTERS</div>
      </div>
      <div>BRANDS</div>
    </div>
  </div>
);

// Shop.propTypes = {};

export default Shop;
