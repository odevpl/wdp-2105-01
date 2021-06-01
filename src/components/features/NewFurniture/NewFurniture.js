import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { SIZE_TYPES } from '../../../settings';
import CompareBox from '../CompareBox/CompareBoxContainer.js';
import Swipeable from '../../common/Swipeable/Swipeable';
import { Link } from 'react-router-dom';
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
  handlePopupClick = id => {
    const { openProductPopup } = this.props;
    openProductPopup(id);
  };
  handleAddClick = id => {
    const { addToCart } = this.props;
    addToCart(id);
  };
  selectActualScreenType = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return SIZE_TYPES.MOBILE;
    } else if (width < 992) {
      return SIZE_TYPES.TABLET;
    } else {
      return SIZE_TYPES.DESKTOP;
    }
  };
  handleSizeChange = storedType => {
    const actualType = this.selectActualScreenType();
    if (actualType !== storedType) {
      this.props.setScreenType(actualType);
    }
  };
  componentDidMount() {
    this.handleSizeChange(this.props.screenType);
    window.addEventListener('resize', () =>
      this.handleSizeChange(this.props.screenType)
    );
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () =>
      this.handleSizeChange(this.props.screenType)
    );
  }

  handleCompareClick = (id, compare) => {
    const { addToCompare, removeFromCompare } = this.props;
    if (!compare) {
      addToCompare(id);
    } else {
      removeFromCompare(id);
    }
  };

  render() {
    const {
      categories,
      products,
      maxProductsOnPage,
      screenType,
      handleCompareClick,
      getCompared,
    } = this.props;
    const { activeCategory, activePage, activePageStyle } = this.state;
    const productsPerPage = {
      [SIZE_TYPES.MOBILE]: 2,
      [SIZE_TYPES.TABLET]: 3,
      [SIZE_TYPES.DESKTOP]: 8,
    };
    const actualProductsOnPage = Math.min(
      productsPerPage[screenType],
      maxProductsOnPage
    );
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / actualProductsOnPage);

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
          <Link
            to='/#'
            onClick={() => {
              this.handlePageChange(i);
            }}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </Link>
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
                        <Link
                          to='/#'
                          className={
                            item.id === activeCategory ? styles.active : undefined
                          }
                          onClick={() => {
                            this.handleCategoryChange(item.id);
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-12 col-sm-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={'row ' + activePageStyle}>
              {categoryProducts
                .slice(
                  activePage * actualProductsOnPage,
                  (activePage + 1) * actualProductsOnPage
                )
                .map(item => (
                  <div key={item.id} className='col-6 col-md-4 col-lg-3'>
                    <ProductBox
                      {...item}
                      handleFavoriteClick={this.handleFavoriteClick}
                      handleCompareClick={this.handleCompareClick}
                      handlePopupClick={this.handlePopupClick}
                      handleAddClick={this.handleAddClick}
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
  screenType: PropTypes.string,
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
  openProductPopup: PropTypes.func,
  setScreenType: PropTypes.func,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  maxProductsOnPage: PropTypes.number,
  addToCompare: PropTypes.func,
  removeFromCompare: PropTypes.func,
  handleCompareClick: PropTypes.func,
  getCompared: PropTypes.array,
  addToCart: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  maxProductsOnPage: 8,
};

export default NewFurniture;
