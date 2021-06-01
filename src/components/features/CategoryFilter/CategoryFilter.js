import React from 'react';
import styles from './CategoryFilter.module.scss';

const CategoryFilter = () => (
  <div className={styles.root}>
    <div className={styles.header}>
      <h5>Filter by categories</h5>
    </div>
    <div className={styles.categories}>
      <div className={styles.category}>
        <h6>{'>'} Furniture </h6>
        <p className={styles.number}>3</p>
      </div>
      <div className={styles.category}>
        <h6>{'>'} Sofa</h6>
        <p className={styles.number}>4</p>
      </div>
      <div className={styles.category}>
        <h6>{'>'} Chair</h6>
        <p className={styles.number}>5</p>
      </div>
      <div className={styles.category}>
        <h6>{'>'} Table</h6>
        <p className={styles.number}>5</p>
      </div>
      <div className={styles.category}>
        <h6>{'>'} Bedroom</h6>
        <p className={styles.number}>5</p>
      </div>
      <div className={styles.category}>
        <h6>{'>'} Furniture</h6>
        <p className={styles.number}>5</p>
      </div>
    </div>
  </div>
);

export default CategoryFilter;
