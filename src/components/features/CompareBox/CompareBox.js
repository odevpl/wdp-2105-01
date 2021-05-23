import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompareBox.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const CompareBox = ({ getCompared, removeItem }) => {
  const isActive = getCompared.length;

  if (isActive) {
    return (
      <div className={styles.root}>
        {getCompared.map(product => (
          <div
            key={product.id}
            className={styles.box}
            onClick={() => removeItem(product.id)}
          >
            <div className={styles.description}>
              <h6>{product.name}</h6>
              <p>Price: ${product.price} </p>
              <p className={styles.price_old}>
                {product.oldPrice ? <span> $ {product.oldPrice} </span> : ''}
              </p>
              <p>{product.favorite ? <FontAwesomeIcon icon={faHeart} /> : ''}</p>
            </div>
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
