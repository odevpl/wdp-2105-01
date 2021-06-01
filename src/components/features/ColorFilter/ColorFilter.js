import React from 'react';
import styles from './ColorFilter.module.scss';

const ColorFilter = () => (
  <div className={styles.root}>
    <div className={styles.header}>
      <h5>Filter by color</h5>
    </div>
    <div className={styles.categories}>
      <div className={styles.category}>
        <p className={styles.red}></p>
        <h6>Red</h6>
      </div>
      <div className={styles.category}>
        <p className={styles.black}></p>
        <h6>Black</h6>
      </div>
      <div className={styles.category}>
        <p className={styles.yellow}></p>
        <h6>Yellow</h6>
      </div>
      <div className={styles.category}>
        <p className={styles.blue}></p>
        <h6>Blue</h6>
      </div>
      <div className={styles.category}>
        <p className={styles.pink}></p>
        <h6>Pink</h6>
      </div>
      <div className={styles.category}>
        <p className={styles.green}></p>
        <h6>Green</h6>
      </div>

    </div>
  </div>
);

export default ColorFilter;
