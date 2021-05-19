import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Promotions from '../../features/Promotions/PromotionsContainer';
import Promoted from '../../features/Promoted/Promoted';
import Chatbot from '../../features/Chatbot/Chatbot';

const Homepage = () => (
  <div className={styles.root}>
    <div className={styles.chatbot}>
      <Chatbot />
    </div>
    <div className={styles.home}>
      <Promoted />
      <FeatureBoxes />
      <NewFurniture />
      <Brands />
      <Promotions />
    </div>
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
