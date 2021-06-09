import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import initialState from '../../../redux/initialState';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Promoted = ({ promoted, products, stars }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-4 p-1'>
            <div className={styles.leftContainer}>
              <div className={`col-sm-12 btn ${styles.top}`}>
                <h5>HOT DEALS</h5>
              </div>
              <div className={`left_promoted`}>
                <div className={styles.photo}>
                  <div className={styles.image}>
                    <OwlCarousel items={1}
                      className="owl-theme"
                      loop
                      autoplay
                      autoplayTimeout={3000}
                      autoplayHoverPause={true}
                      animateOut='fadeOut'
                      // dotsData={true}
                    >
                      {products.map(product => (
                        <img src={product.image} alt='pic' key={product.id}
                          className={styles.product} />
                      ))}
                    </OwlCarousel>
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
                      <Link key={i} to='/#'>
                        {i <= stars ? (
                          <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                        )}
                      </Link>
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
                      $50.00
                    </div>
                    <div className={styles.price}>
                      <Button className={styles.priceBtn} noHover variant='small'>
                        $30.00
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className='col-12 col-lg-8 p-1'>
            <div className={styles.rightContainer}>
              <div className='right_promoted'>
                <OwlCarousel items={1}
                  className="owl-theme"
                  autoplayHoverPause={true}
                  animateOut='fadeOut'
                  // dotsData={true}
                  dots={false}
                  nav
                  loop
                  navElement={'owl-theme'}

                >
                  {promoted.map((promote, i) => (
                    <div key={i} className={styles.banner}>
                      <img src={promote.img} alt='' />
                      <div className={styles.headerBox}>
                        <h1>{promote.h1}x</h1>
                        <h2>{promote.h2}y</h2>
                        <Button className={styles.buttonShop}> SHOP NOW </Button>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promoted.propTypes = {
  promoted: PropTypes.array,
  products: PropTypes.array,
  stars: PropTypes.number,

};

export default Promoted;
