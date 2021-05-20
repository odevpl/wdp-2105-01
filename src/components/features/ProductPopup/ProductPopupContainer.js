import { connect } from 'react-redux';
import ProductPopup from './ProductPopup';
import { getProdPopup, closeProductPopup } from '../../../redux/prodPopupRedux';
import { getProduct } from '../../../redux/productsRedux';

const mapStateToProps = state => {
  const popup = getProdPopup(state);
  return {
    product: getProduct(state, popup.productId),
  };
};

const mapDispatcherToProps = dispatcher => {
  return {
    closeProductPopup: payload => dispatcher(closeProductPopup(payload)),
  };
};

export default connect(mapStateToProps, mapDispatcherToProps)(ProductPopup);
