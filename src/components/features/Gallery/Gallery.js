import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Stars from '../../features/Stars/StarsContainer';
import Carousel from 'react-elastic-carousel';

class Gallery extends React.Component {
  render() {
    const { gallery, getActiveBestseller, customStars } = this.props;

    const breakPoints = [
      { width: 1, itemsToShow: 1, itemsToScroll: 1 },
      { width: 100, itemsToShow: 2, itemsToScroll: 2 },
      { width: 200, itemsToShow: 3, itemsToScroll: 3 },
      { width: 270, itemsToShow: 4, itemsToScroll: 4 },
      { width: 400, itemsToShow: 6, itemsToScroll: 6 },
    ];

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-12 col-lg-6'}>
              <div className='row no-gutters align-items-end line'>
                <div className={'col-12 col-md-auto ' + styles.heading}>
                  <h3>Furniture gallery</h3>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.tabs}>
                  <ul>
                    <li>
                      <Button>FEATURED</Button>
                    </li>
                    <li className={styles.active}>
                      <Button>TOP SELLER</Button>
                    </li>
                    <li>
                      <Button>SALE OFF</Button>
                    </li>
                    <li>
                      <Button>TOP RATED</Button>
                    </li>
                  </ul>
                </div>
                <div className={styles.tabContent}>
                  {getActiveBestseller.map(product => (
                    <div key={product.image} className={styles.image}>
                      <img alt={'topseller'} src={product.image}></img>
                    </div>
                  ))}
                  <div className={styles.actions}>
                    <Button
                      className={styles.selected}
                      variant='outline'
                      tooltip='Favourite'
                    >
                      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    </Button>
                    <Button
                      className={styles.selected}
                      variant='outline'
                      tooltip='Add To Compare'
                    >
                      <FontAwesomeIcon icon={faExchangeAlt}>
                        Add To Compare
                      </FontAwesomeIcon>
                    </Button>
                    <Button
                      className={styles.selected}
                      variant='outline'
                      tooltip='See Details'
                    >
                      <FontAwesomeIcon icon={faEye}>See Details</FontAwesomeIcon>
                    </Button>
                    <Button
                      className={styles.selected}
                      variant='outline'
                      tooltip='Add To Cart'
                    >
                      <FontAwesomeIcon icon={faShoppingBasket}>
                        Add To Cart
                      </FontAwesomeIcon>
                    </Button>
                  </div>
                  {getActiveBestseller.map(item => (
                    <div key={item.id}>
                      <div key={item.price} className={styles.price}>
                        <div key={item.newPrice} className={styles.newPrice}>
                          $ {item.price}
                        </div>
                        <div key={item.oldPrice} className={styles.oldPrice}>
                          $ {item.oldPrice}
                        </div>
                      </div>
                      <div key={item.details} className={styles.details}>
                        <h5 key={item.name}>{item.name}</h5>
                        <Stars customStars={customStars} stars={item.stars} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.slider}>
                  <Carousel breakPoints={breakPoints}>
                    {gallery.map(active => (
                      <div key={active.id}>
                        <img
                          src={active.image}
                          className={active.active ? styles.active : styles.img}
                          alt=''
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className={'col-lg-6'}>
              <div className={styles.rightSide}>
                <img
                  src='https://media.istockphoto.com/photos/ethnic-bedroom-interior-picture-id1008574412?k=6&m=1008574412&s=612x612&w=0&h=q9Vyy0VHBxRhKWOSIf-yUrAlOg06ZOtIzn6t2Vvhv1U='
                  alt='bed'
                ></img>
                <div className={styles.text}>
                  <h3>
                    from <span>$50.80</span>
                  </h3>
                  <h2>Bedroom Bed</h2>
                  <Button className={styles.button} variant='main'>
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  gallery: PropTypes.array,
  getActiveBestseller: PropTypes.array,
  stars: PropTypes.number,
  customStars: PropTypes.number,
};

export default Gallery;
