import { connect } from 'react-redux';
import Promotions from './Promotions';
import { getAllPromotions } from '../../../redux/promotionsRedux';

const mapStateToProps = state => ({
  promotion: getAllPromotions(state),
});

export default connect(mapStateToProps)(Promotions);
