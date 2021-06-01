import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import brandsReducer from './brandsRedux';
import promotionsReducer from './promotionsRedux';
import screenTypeReducer from './screenTypeRedux';
import feedbacksReducer from './feedbacksRedux';
import prodPopupReducer from './prodPopupRedux';
import promotedReducer from './promotedRedux';
import galleryReducer from './galleryRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  brands: brandsReducer,
  promotion: promotionsReducer,
  screenType: screenTypeReducer,
  feedbacks: feedbacksReducer,
  prodPopup: prodPopupReducer,
  promoted: promotedReducer,
  gallery: galleryReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
