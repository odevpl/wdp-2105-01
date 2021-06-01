import { connect } from 'react-redux';

import Promoted from './Promoted';
import { getOnSale } from '../../../redux/productsRedux.js';
import { getAllPromoted } from '../../../redux/promotedRedux.js';

const mapStateToProps = state => ({
  products: getOnSale(state).slice(0, 3),
  promoted: getAllPromoted(state),
});

export default connect(mapStateToProps)(Promoted);
