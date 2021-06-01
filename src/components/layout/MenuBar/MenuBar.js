import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center justify-content-md-center'>
        <div className={'col-9 col-md-auto ' + styles.searchContainer}>
          <ProductSearch />
        </div>
        <div className={'col-3 col-md-auto ' + styles.menu}>
          <nav className='navbar navbar-expand-md'>
            <button className='navbar-toggler' type='button' data-toggle='collapse'>
              <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </button>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <Link to={`/`}>
                  <li className={'nav-item' + styles.active}>Home</li>
                </Link>
                <Link to={`/shop/chair`}>
                  <li className='nav-item'>Chair</li>
                </Link>
                <Link to={`/shop/table`}>
                  <li className='nav-item'>Table</li>
                </Link>
                <Link to={`/shop/sofa`}>
                  <li className='nav-item'>Sofa</li>
                </Link>
                <Link to={`/shop/dining`}>
                  <li className='nav-item'>Dining</li>
                </Link>
                <Link to={`/blog`}>
                  <li className='nav-item'>Blog</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
