import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import initialState from '../../../redux/initialState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = ({ gallery }) => (
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
              <div className={styles.image}>
                <img src={initialState.gallery.image1} alt='top seller' />
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
                  <img src={item.image} alt='' />
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
  gallery: PropTypes.object,
  image: PropTypes.string,
};

export default Gallery;
