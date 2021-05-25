import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPopup.module.scss';
import Stars from '../Stars/StarsContainer';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const ProductPopup = ({ product, closeProductPopup }) => {
  const { id, customStars, stars, image, name, price } = product;
  return (
    <div className={styles.root}>
      <div className='row no-gutters'>
        <div className='col-6'>
          <div className={styles.photo}>
            <img className={styles.image} src={image} alt={name} />
          </div>
        </div>
        <div className='col-6'>
          <div className={styles.content}>
            <div className={styles.content_upper}>
              <Button noJump onClick={() => closeProductPopup()}>
                <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.content_bottom}>
              <div className={styles.header}>
                <h5>{product.name}</h5>
                <Stars id={id} customStars={customStars} stars={stars} />
              </div>
              <div className={styles.line}></div>

              <div className={styles.price}>
                <div className={styles.price_old}>
                  Old price:<span> $ 60</span>
                </div>
                <Button className={styles.priceBtn} noHover variant='small'>
                  $ {price}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPopup.propTypes = {
  product: PropTypes.object,
  closeProductPopup: PropTypes.func,
};

export default ProductPopup;
