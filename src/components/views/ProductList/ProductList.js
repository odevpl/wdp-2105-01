import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='col-12'>BANNER</div>
      <div className='row'>
        <div className='col-9'>PRODUCT LIST</div>
        <div className='col-3'>FILTERS</div>
      </div>
      <div className='col-12'>BRANDS</div>
    </div>
  </div>
);
// ProductList.propTypes = {};

export default ProductList;
