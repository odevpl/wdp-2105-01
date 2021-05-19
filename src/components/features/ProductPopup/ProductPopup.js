import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPopup.module.scss';

const ProductPopup = ({ product }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <p>Hi, it&apos;s me - a popup.</p>
        <p>And the name of the product is: {product.name}</p>
      </div>
    </div>
  );
};

ProductPopup.propTypes = {
  product: PropTypes.object,
  //hideProdPopup: PropTypes.func,

  //to razem z funkcją openProdPopup idzie do ProductBox
  //popupShown: PropTypes.bool,
  //showProdPopup: PropTypes.func,
};

export default ProductPopup;
