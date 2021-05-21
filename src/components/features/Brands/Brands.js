import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Carousel from 'react-elastic-carousel';

const Brands = ({ brands }) => {
  return (
    <div className={styles.root}>
      <div className='container pb-3'>
        <div className='row '>
          <div className={'col-12 justify-content-between ' + styles.image}>
            <Carousel itemsToShow={4} enableAutoPlay={true}>
              {brands.map(brand => (
                <div key={brand.id}>
                  <img src={brand.logo} alt='' />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.object,
  logo: PropTypes.string,
};

export default Brands;
