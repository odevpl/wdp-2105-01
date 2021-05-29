import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner.js';
import ProductBox from '../../common/ProductBox/ProductBox';
import { Link } from 'react-router-dom';


const ProductList = ({ categories, match, products }) => {

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.root}
    >
      <div className='container'>
        <Banner />
        <div className='row'>

          <div className={'col-12'}>
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
                          onClick={toggleClass}
                        >
                          <FontAwesomeIcon className={styles.icon} icon={faThLarge} />
                          <FontAwesomeIcon className={styles.icon} icon={faThList} />
                        </Link>

                      </div>
                    </div>
                  </div>
                  <div className={isActive ? 'list' : null}>
                    <div className={styles.products}>
                      <div className='row'>
                        {products.map(item => (
                          <div key={item.id} className='col-12 col-md-6 col-lg-4'>
                            <ProductBox {...item} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              ) : (
                <div className={styles.notFound}></div>
              )
            )}
          </div>
        </div>
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