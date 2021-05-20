import React from 'react';
import PropTypes from 'prop-types';

import styles from './CompareBox.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CompareBox = ({ getCompared, removeItem }) => {
  const isActive = getCompared.length;

  //const isActive = getCompared.length > 0 && getCompared.length <= 4;

  if (isActive) {
    return (
      <div className={styles.root}>
        {getCompared.map(product => (
          <div
            key={product.id}
            className={styles.box}
            onClick={() => removeItem(product.id)}
          >
            <img alt={'product'} src={product.image} className={styles.image}></img>
            <div className={styles.close}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
        ))}
        <Button className={styles.button}>COMPARE</Button>
      </div>
    );
  } else {
    return '';
  }
};

CompareBox.propTypes = {
  getCompared: PropTypes.array,
  removeItem: PropTypes.func,
};

export default CompareBox;
