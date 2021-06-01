import { connect } from 'react-redux';
import { getCount } from '../../../redux/cartRedux';
import CompanyClaim from './CompanyClaim';

const matchStateToProps = state => ({
  productsInCart: getCount(state),
});

export default connect(matchStateToProps)(CompanyClaim);
