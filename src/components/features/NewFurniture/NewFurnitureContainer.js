import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import {
  getNew,
  addToFavorites,
  removeFromFavorites,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatcherToProps = dispatcher => ({
  addToFavorites: payload => dispatcher(addToFavorites(payload)),
  removeFromFavorites: payload => dispatcher(removeFromFavorites(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(NewFurniture);
