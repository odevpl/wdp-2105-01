import React from 'react';
import styles from './SizeFilter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

const SizeFilter = () => (
  <div className={styles.root}>
    <div className={styles.header}>
      <h5>Filter by size</h5>
    </div>
    <div className={styles.sizes}>
      <div className={styles.size}>
        <h6>
          <FontAwesomeIcon className={styles.iconSquare} icon={faSquare} />
          <FontAwesomeIcon className={styles.iconCheck} icon={faCheckSquare} />
          S
        </h6>
        <p className={styles.number}>3</p>
      </div>

      <div className={styles.size}>
        <h6>
          <FontAwesomeIcon className={styles.iconSquare} icon={faSquare} />
          <FontAwesomeIcon className={styles.iconCheck} icon={faCheckSquare} />
          M
        </h6>
        <p className={styles.number}>4</p>
      </div>
      <div className={styles.size}>
        <h6>
          <FontAwesomeIcon className={styles.iconSquare} icon={faSquare} />
          <FontAwesomeIcon className={styles.iconCheck} icon={faCheckSquare} />
          L
        </h6>
        <p className={styles.number}>5</p>
      </div>
      <div className={styles.size}>
        <h6>
          <FontAwesomeIcon className={styles.iconSquare} icon={faSquare} />
          <FontAwesomeIcon className={styles.iconCheck} icon={faCheckSquare} />
          XL
        </h6>
        <p className={styles.number}>5</p>
      </div>
      <div className={styles.size}>
        <h6>
          <FontAwesomeIcon className={styles.iconSquare} icon={faSquare} />
          <FontAwesomeIcon className={styles.iconCheck} icon={faCheckSquare} />
          XX
        </h6>
        <p className={styles.number}>5</p>
      </div>
    </div>
  </div>
);

export default SizeFilter;
