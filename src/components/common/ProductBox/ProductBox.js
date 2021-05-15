import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../features/Stars/Stars';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  customStars,
  image,
  favorite,
  compare,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.image} src={image} alt={name} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <Stars customStars={customStars} stars={stars} />
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        {favorite === true ? (
          <Button variant='outline' className={styles.selected}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
        ) : (
          <Button variant='outline' className={styles.state}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
        )}
        {compare === true ? (
          <Button variant='outline' className={styles.selected}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        ) : (
          <Button variant='outline' className={styles.state}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        )}
      </div>
      <div className={styles.price}>
        <Button className={styles.priceBtn} noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
    <div className={styles.price_old}>
      Old price:<span> $ 60</span>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  customStars: PropTypes.number,
  image: PropTypes.node,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default ProductBox;
