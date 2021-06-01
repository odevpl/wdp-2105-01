/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getProduct = ({ products }, id) => products.find(p => p.id === id);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompared = ({ products }) =>
  products.filter(product => product.compare === true);

export const getOnSale = ({ products }) =>
  products.filter(product => product.promo === 'sale');

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');
const SET_CUSTOM_STARS = createActionName('SET_CUSTOM_STARS');
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROM_COMPARE');
const REMOVE_ITEM = createActionName('REMOVE_ITEM');

/* action creators */
export const addToFavorites = payload => ({ payload, type: ADD_TO_FAVORITES });
export const removeFromFavorites = payload => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});

export const setCustomStars = payload => ({ payload, type: SET_CUSTOM_STARS });
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });
export const removeFromCompare = payload => ({ payload, type: REMOVE_FROM_COMPARE });
export const removeItem = payload => ({ payload, type: REMOVE_ITEM });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_CUSTOM_STARS: {
      return statePart.map(e =>
        e.id !== action.payload.id ? e : { ...e, customStars: action.payload.starNb }
      );
    }
    case ADD_TO_FAVORITES: {
      return statePart.map(e =>
        e.id !== action.payload ? e : { ...e, favorite: true }
      );
    }
    case REMOVE_FROM_FAVORITES: {
      return statePart.map(e =>
        e.id !== action.payload ? e : { ...e, favorite: false }
      );
    }
    case ADD_TO_COMPARE: {
      let compareCount = 0;
      for (let product of statePart) {
        if (product.compare === true) {
          compareCount++;
        }
      }

      return statePart.map(product => {
        if (product.id === action.payload && compareCount <= 3) {
          product.compare = true;
        }
        return product;
      });
    }
    case REMOVE_FROM_COMPARE: {
      return statePart.map(product =>
        product.id !== action.payload ? product : { ...product, compare: false }
      );
    }
    case REMOVE_ITEM: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          product.compare = false;
        }
        return product;
      });
    }
    default:
      return statePart;
  }
}
