import { connect } from 'react-redux';
import Brands from './Brands';
import { getAllBrands } from '../../../redux/brandsRedux';

const mapStateToProps = state => ({
  brands: getAllBrands(state),
});

export default connect(mapStateToProps)(Brands);
