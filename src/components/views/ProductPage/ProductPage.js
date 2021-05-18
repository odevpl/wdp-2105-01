import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductPage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <NewFurniture productsOnPage={4} />
      </div>
    </div>
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
