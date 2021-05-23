import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { openProductPopup } from '../../../redux/prodPopupRedux';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
import {
  getNew,
  addToFavorites,
  removeFromFavorites,
  addToCompare,
  removeFromCompare,
  getCompared,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  screenType: getScreenType(state),
  getCompared: getCompared(state),
});

const mapDispatcherToProps = dispatcher => ({
  openProductPopup: payload => dispatcher(openProductPopup(payload)),
  addToFavorites: payload => dispatcher(addToFavorites(payload)),
  removeFromFavorites: payload => dispatcher(removeFromFavorites(payload)),
  setScreenType: payload => dispatcher(setScreenType(payload)),
  addToCompare: payload => dispatcher(addToCompare(payload)),
  removeFromCompare: payload => dispatcher(removeFromCompare(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(NewFurniture);
