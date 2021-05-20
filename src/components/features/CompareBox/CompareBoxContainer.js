import { connect } from 'react-redux';

import { getCompared, removeItem } from '../../../redux/productsRedux';
import CompareBox from './CompareBox.js';

const mapStateToProps = state => ({
  getCompared: getCompared(state),
});

const mapDispatcherToProps = dispatcher => ({
  removeItem: payload => dispatcher(removeItem(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(CompareBox);
