import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center justify-content-md-center'>
        <div className={'col-auto ' + styles.searchContainer}>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <nav className='navbar navbar-expand-md'>
            <button className='navbar-toggler' type='button' data-toggle='collapse'>
              <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </button>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a href='#' className={styles.active}>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Furniture</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Chair</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Table</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Sofa</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Bedroom</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Blog</a>
                </li>
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
