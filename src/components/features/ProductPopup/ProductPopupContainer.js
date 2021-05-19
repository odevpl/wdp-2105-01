import { connect } from 'react-redux';
import ProductPopup from './ProductPopup';
import { getProdPopup } from '../../../redux/prodPopupRedux';
import { getProduct } from '../../../redux/productsRedux';

const mapStateToProps = state => {
  const popup = getProdPopup(state);
  return {
    product: getProduct(state, popup.productId),
  };
};

export default connect(mapStateToProps)(ProductPopup);
