import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
//import initialState from '../../../redux/initialState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';

const Gallery = ({ gallery, getActiveBestseller }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={'col-6'}>
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
              {getActiveBestseller.map(item => (
                <div key={item.id} className={styles.image}>
                  <img alt={'topseller'} src={item.image}></img>
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
                  <FontAwesomeIcon icon={faExchangeAlt}>Add To Compare</FontAwesomeIcon>
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
                  <FontAwesomeIcon icon={faShoppingBasket}>Add To Cart</FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.slider}>
              <button type='button' className='btn btn-dark rounded-0'>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
                </a>
              </button>
              {gallery.map(item => (
                <div key={item.id}>
                  <img
                    src={item.image}
                    className={item.active ? styles.active : styles.img}
                    alt=''
                  />
                </div>
              ))}
              <button type='button' className='btn btn-dark rounded-0'>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Gallery.propTypes = {
  gallery: PropTypes.array,
  image: PropTypes.string,
  getActiveBestseller: PropTypes.array,
};

export default Gallery;
