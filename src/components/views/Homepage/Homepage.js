import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Promotions from '../../features/Promotions/PromotionsContainer';
import Feedbacks from '../../features/Feedbacks/FeedbacksContainer';
import Promoted from '../../features/Promoted/Promoted';
import Gallery from '../../features/Gallery/GalleryContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Gallery />
    <Brands />
    <Promotions />
    <Feedbacks />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
