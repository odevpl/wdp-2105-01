import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductList.module.scss';
import Brands from '../../features/Brands/BrandsContainer';
import Banner from '../../features/Banner/Banner.js';
import ProductBox from '../../common/ProductBox/ProductBox';
import { Link } from 'react-router-dom';
import ProductGridList from '../../views/ProductGridList/ProductGridList';
import SizeFilter from '../../features/SizeFilter/SizeFilter';
import ColorFilter from '../../features/ColorFilter/ColorFilter';
import CategoryFilter from '../../features/CategoryFilter/CategoryFilter';
import PriceFilter from '../../features/PriceFilter/PriceFilter';

const ProductList = ({ categories, match, products }) => {
  const [showGrid, setShowGrid] = useState(true);
  const [showList, setShowList] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <Banner />
        <div className='row'>
          <div className={'col-9'}>
            {categories.map(category =>
              category.id === match.params.categoryId ? (
                <div key={category.id}>
                  <div className={styles.header}>
                    <div className={styles.title}>
                      <h4>{category.name}</h4>
                    </div>

                    <div className={styles.displayOptions}>

                      <div className={styles.displayType}>

                        <Link
                          to='#'
                          onClick={() => { setShowGrid(true); setShowList(false); }
                          }
                        >
                          <FontAwesomeIcon className={styles.icon} icon={faThLarge} />
                        </Link>
                        <Link to="#" onClick={() => {
                          setShowList(true);
                          setShowGrid(false);
                        }
                        }> <FontAwesomeIcon className={styles.icon} icon={faThList} /></Link>

                      </div>
                    </div>
                  </div>
                  {showGrid && (
                    <div>
                      <div className={styles.products}>
                        <div className='row grid'>
                          {products.map(item => (
                            <div key={item.id} className='col-12 col-md-6 col-lg-4 red'>
                              <ProductBox {...item} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {showList && (
                    <div className={`${styles.box} `}>
                      {products.map(item => (
                        <div key={item.id} className={`${styles.productBox} `}>
                          <div className={`${styles.boxdescription_left} `}>
                            <ProductGridList {...item} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              ) : (
                <div className={styles.notFound}></div>
              )
            )}
          </div>
          <div className={'col-3'}>
            <SizeFilter />
            <ColorFilter />
            <CategoryFilter />
            <PriceFilter />
          </div>
        </div>
        <div className='col-12'>BRANDS</div>
      </div>
      <div className='row'>
        <div className='col-9'>PRODUCT LIST</div>
        <div className='col-3'>FILTERS</div>
      </div>
      <div className='col-12'>
        <Brands />
      </div>
    </div>
  );
};

ProductList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  products: PropTypes.arrayOf(PropTypes.object),
  productsFilteredByPrice: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string,
    }),
  }),
};

export default ProductList;
