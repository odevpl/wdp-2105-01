import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Search.module.scss';
import NewFurniture from '../../../components/features/NewFurniture/NewFurnitureContainer';

const Search = () => (
  <div className={styles.root}>
    <NewFurniture />
  </div>
);

// Search.propTypes = {};

export default Search;
