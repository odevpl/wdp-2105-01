import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Carousel from 'react-elastic-carousel';
import BrandItem from '../../common/BrandItem/BrandItem';

class Brands extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1, pagination: false },
      { width: 350, itemsToShow: 2, pagination: false },
      { width: 550, itemsToShow: 4, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 6, itemsToScroll: 2, pagination: false },
    ];
  }

  render() {
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        <div className='container pb-3'>
          <div className='row '>
            <div className='col-12 justify-content-between'>
              <div className={styles.brands}>
                <Carousel
                  breakPoints={this.breakPoints}
                  itemPadding={[30, 50]}
                  enableAutoPlay={true}
                >
                  {brands.map(brand => (
                    <BrandItem key={brand.id}>
                      <img src={brand.logo} alt='' />
                    </BrandItem>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
  logo: PropTypes.string,
};

export default Brands;
