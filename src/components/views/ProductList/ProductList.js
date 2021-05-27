import React from 'react';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner';
import Brands from '../../features/Brands/BrandsContainer';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='col-12'>
        <Banner />
      </div>
      <div className='row'>
        <div className='col-9'>PRODUCT LIST</div>
        <div className='col-3'>FILTERS</div>
      </div>
      <div className='col-12'>
        <Brands />
      </div>
    </div>
  </div>
);

export default ProductList;
