import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
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
// ProductList.propTypes = {};

export default ProductList;
