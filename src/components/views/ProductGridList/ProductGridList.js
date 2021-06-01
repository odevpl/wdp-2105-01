import React from 'react';
import styles from './ProductGridList.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import Stars from '../../features/Stars/StarsContainer';
import { Link } from 'react-router-dom';

const ProductPage = ({
  name,
  price,
  id,
  stars,
  customStars,
  description,
  image,
  favorite,
  handleFavoriteClick,
}) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <img
              className={styles.image}
              src={image}
              alt={name}
            />
          </div>
          <div className='col-8 '>
            <div className={styles.title}>
              <h5>{name}</h5>
            </div>
            <Stars id={id} customStars={customStars} stars={stars} />
            <div className={styles.rewievs}>
              <p>(0 rewievs)</p>
              <Link to='/#' className={styles.addRewiev}>
                Add your rewiev
              </Link>
            </div>
            <div className={styles.price}>
              <p className={styles.oldPrice}>$350.00</p>
              <p className={styles.promoPrice}>${price}</p>
            </div>
            <div className={styles.buttons}>
              <div>
                <Button variant='small' className={styles.selected}>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
                <Button
                  className={favorite ? styles.selected : styles.state}
                  onClick={() => handleFavoriteClick(id, favorite)}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                </Button>

                <Button variant='outline' className={styles.state}>
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>
                <Button variant='outline' className={styles.state}>
                  <FontAwesomeIcon icon={faEnvelope}>Email</FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.descripion}>
              <h4>Product description</h4>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  customStars: PropTypes.number,
  image: PropTypes.node,
  description: PropTypes.string,
  id: PropTypes.string,
  handleFavoriteClick: PropTypes.func,
  favorite: PropTypes.bool,
};

export default ProductPage;
