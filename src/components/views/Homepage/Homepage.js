import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Promotions from '../../features/Promotions/PromotionsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <Brands />
    <Promotions />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
