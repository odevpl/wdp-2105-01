import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import CompareBox from '../CompareBox/CompareBoxContainer.js';
import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    activePageStyle: styles.fadeIn,
  };

  handlePageChange(newPage) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activePage: newPage, activePageStyle: styles.fadeIn });
    }, 1000);
  }

  handleCategoryChange(newCategory) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory, activePageStyle: styles.fadeIn });
    }, 1000);
  }

  handleFavoriteClick = (id, favorite) => {
    const { addToFavorites, removeFromFavorites } = this.props;
    if (!favorite) {
      addToFavorites(id);
    } else {
      removeFromFavorites(id);
    }
  };

  handleCompareClick = (id, compare) => {
    const { addToCompare, removeFromCompare } = this.props;
    if (!compare) {
      addToCompare(id);
    } else {
      removeFromCompare(id);
    }
  };

  render() {
    const { categories, products, productsOnPage, handleCompareClick, getCompared } = this.props;
    const { activeCategory, activePage, activePageStyle } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const rightAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage + 1;
      if (newPage < pagesCount) {
        this.setState({ activePage: newPage });
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/#'
            onClick={() => {
              this.handlePageChange(i);
            }}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable leftAction={leftAction} rightAction={rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-12 col-md-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col-auto col-md ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          href='/#'
                          className={
                            item.id === activeCategory ? styles.active : undefined
                          }
                          onClick={() => {
                            this.handleCategoryChange(item.id);
                          }}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={'row ' + activePageStyle}>
              {categoryProducts
                .slice(activePage * productsOnPage, (activePage + 1) * productsOnPage)
                .map(item => (
                  <div key={item.id} className='col-6 col-md-4 col-lg-3'>
                    <ProductBox
                      {...item}
                      handleFavoriteClick={this.handleFavoriteClick}
                      handleCompareClick={this.handleCompareClick}
                      getCompared={this.getCompared}
                    />
                  </div>
                ))}
            </div>
            <div className={styles.compareBox}>
              <CompareBox
                handleCompareClick={handleCompareClick}
                getCompared={getCompared}
              />
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favorite: PropTypes.bool,
      compare: PropTypes.bool,
    })
  ),
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  productsOnPage: PropTypes.number,
  addToCompare: PropTypes.func,
  removeFromCompare: PropTypes.func,
  handleCompareClick: PropTypes.func,
  getCompared: PropTypes.array
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  productsOnPage: 8,
};

export default NewFurniture;
