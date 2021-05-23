import React from 'react';
import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Promotions from '../../features/Promotions/PromotionsContainer';
import Feedbacks from '../../features/Feedbacks/FeedbacksContainer';
import Promoted from '../../features/Promoted/Promoted';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Brands />
    <Feedbacks />
  </div>
);

export default Homepage;
