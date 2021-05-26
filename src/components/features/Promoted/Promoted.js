import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Promoted = ({ promoted, products }) => {
  const itemsPerPage = 1;
  const items = [0, 1, 2];
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let resetTimeout;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='d-none d-md-block col-12 col-lg-4'>
            <div className={styles.leftContainer}>
              <div className={styles.top}>
                <h5>HOT DEALS</h5>
              </div>
              <div className={`left_promoted`}>
                <Carousel
                  transitionMs={3000}
                  ref={carouselRef}
                  enableAutoPlay
                  easing='cubic-bezier(.17,.67,1,.68)'
                  onNextEnd={({ index }) => {
                    clearTimeout(resetTimeout);
                    if (index + 1 === totalPages) {
                      resetTimeout = setTimeout(() => {
                        carouselRef.current.goTo(0);
                      }, 3000);
                    }
                  }}
                  itemsToShow={itemsPerPage}
                  // onChange={(currentItem, pageIndex) =>
                  //   alert(JSON.stringify({ currentItem, pageIndex }))
                  // }
                >
                  {products.map(product => (
                    <ProductBox
                      key={product.id}
                      className={styles.product}
                      {...product}
                    />
                  ))}
                </Carousel>
              </div>

              <div className={styles.cart}>
                <Button variant='small' className={styles.promotedBtn}>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div>
              <div className={styles.photo}>
                <div className={styles.timeLeft}>
                  <div className={styles.timeCircle}>
                    <h2>25</h2>
                    <h3>DAYS</h3>
                  </div>
                  <div className={styles.timeCircle}>
                    <h2>10</h2>``
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
          </div>
          <div className='col-12 col-lg-8'>
            <div className={styles.rightContainer}>
              <div className='right_promoted'>
                <Carousel>
                  {promoted.map((promote, i) => (
                    <div key={i} className={styles.banner}>
                      <img src={promote.img} alt='' />
                      <div className={styles.headerBox}>
                        <h1>{promote.h1}</h1>
                        <h2>{promote.h2}</h2>
                        <Button className={styles.buttonShop}> SHOP NOW </Button>
                      </div>
                    </div>
                  ))}
                </Carousel>
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
};

export default Promoted;
