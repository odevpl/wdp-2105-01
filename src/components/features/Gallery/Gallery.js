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
  state = {
    activeTab: 'topSeller',
    tabSwitchingStyle: 'fadeIn',
    productSwitchingStyle: 'fadeIn',
  };
  handleTabChange(newTab) {
    this.setState({ tabSwitchingStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeTab: newTab, tabSwitchingStyle: styles.fadeIn });
    }, 1000);
  }
  handlePickProduct(id, tab) {
    this.setState({ productSwitchingStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ productSwitchingStyle: styles.fadeIn });
      this.props.setActive({ id, tab });
    }, 1000);
  }
  render() {
    const { gallery, actives } = this.props;
    const { activeTab, tabSwitchingStyle, productSwitchingStyle } = this.state;
    const activeProduct = actives[activeTab];
    const breakPoints = [
      { width: 1, itemsToShow: 1, itemsToScroll: 1 },
      { width: 100, itemsToShow: 2, itemsToScroll: 2 },
      { width: 200, itemsToShow: 3, itemsToScroll: 3 },
      { width: 270, itemsToShow: 4, itemsToScroll: 4 },
      { width: 400, itemsToShow: 6, itemsToScroll: 6 },
    ];
    const tabs = [
      { id: 'featured', name: 'FEATURED' },
      { id: 'topSeller', name: 'TOP SELLER' },
      { id: 'saleOff', name: 'SALE OFF' },
      { id: 'topRated', name: 'TOP RATED' },
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
                    {tabs.map(tab => (
                      <li
                        key={tab.id}
                        className={tab.id === activeTab ? styles.active : ''}
                      >
                        <Button noJump onClick={() => this.handleTabChange(tab.id)}>
                          {tab.name}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={tabSwitchingStyle}>
                  <div className={styles.tabContent + ' ' + productSwitchingStyle}>
                    <div key={activeProduct.image} className={styles.image}>
                      <img alt={activeProduct.name} src={activeProduct.image}></img>
                    </div>
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
                    <div key={activeProduct.id}>
                      <div key={activeProduct.price} className={styles.price}>
                        <div key={activeProduct.newPrice} className={styles.newPrice}>
                          $ {activeProduct.price}
                        </div>
                        <div key={activeProduct.oldPrice} className={styles.oldPrice}>
                          $ {activeProduct.oldPrice}
                        </div>
                      </div>
                      <div key={activeProduct.details} className={styles.details}>
                        <h5 key={activeProduct.name}>{activeProduct.name}</h5>
                        <Stars
                          id={activeProduct.id}
                          customStars={activeProduct.customStars}
                          stars={activeProduct.stars}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider}>
                    <Carousel breakPoints={breakPoints}>
                      {gallery[activeTab].map(product => (
                        <div
                          onClick={() => this.handlePickProduct(product.id, activeTab)}
                          key={product.id}
                        >
                          <img
                            src={product.image}
                            className={
                              product.id === activeProduct.id
                                ? styles.active
                                : styles.img
                            }
                            alt=''
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
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
  gallery: PropTypes.object,
  actives: PropTypes.object,
  stars: PropTypes.number,
  customStars: PropTypes.number,
  setActive: PropTypes.func,
};

export default Gallery;
