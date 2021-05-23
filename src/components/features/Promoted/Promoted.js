import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import initialState from '../../../redux/initialState';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';

const Promoted = stars => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.leftContainer}>
              <div className={styles.top}>
                <div className='col-9'>
                  <h5>HOT DEALS</h5>
                </div>
                <div className={`col-3 ${styles.dots}`}>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className={styles.photo}>
                <div className={styles.image}>
                  <img src={initialState.promoted.image} alt='pic' />
                  <div className={styles.cart}>
                    <Button variant='small' className={styles.promotedBtn}>
                      <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                      CART
                    </Button>
                  </div>
                  <div className={styles.timeLeft}>
                    <div className={styles.timeCircle}>
                      <h2>25</h2>
                      <h3>DAYS</h3>
                    </div>
                    <div className={styles.timeCircle}>
                      <h2>10</h2>
                      <h3>HRS</h3>
                    </div>
                    <div className={styles.timeCircle}>
                      <h2>45</h2>
                      <h3>MINS</h3>
                    </div>
                    <div className={styles.timeCircle}>
                      <h2>30</h2>
                      <h3>SECS</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <h5>{initialState.promoted.name}</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='/#'>
                      {i <= stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.bottom}>
                <div className={styles.actions}>
                  <Button variant='outline' className={styles.selected}>
                    <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline' className={styles.selected}>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline' className={styles.selected}>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.prices}>
                  <div className={styles.price_old}>
                    ${initialState.promoted.oldPrice}.00
                  </div>
                  <div className={styles.price}>
                    <Button className={styles.priceBtn} noHover variant='small'>
                      ${initialState.promoted.price}.00
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-12 col-md-8 ${styles.rightContainer}`}>
            <div className={styles.image}>
              <img src={initialState.promoted.image} alt='pic' />
              <div className={styles.overlay}></div>
              <div className={styles.title}>
                <h1>
                  INDOOR <span>FURNITURE</span>
                </h1>
                <h5>SAVE UP 50% OF ALL FURNITURE</h5>
              </div>
              <div className={styles.shopBtn}>
                <Button>SHOP NOW</Button>
              </div>
            </div>
            <div className={styles.navBtns}>
              <Button className={styles.navBtn}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
              </Button>
              <Button className={styles.navBtn}>
                <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promoted.propTypes = {
  stars: PropTypes.number,
};

export default Promoted;
