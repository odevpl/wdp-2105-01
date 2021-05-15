/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getFavorites = ({ cart }) => cart.favorites;
export const getCompare = ({ cart }) => cart.compare;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROM_COMPARE');

/* action creators */
export const addToFavorites = payload => ({ payload, type: ADD_TO_FAVORITES });
export const removeFromFavorites = payload => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });
export const removeFromCompare = payload => ({ payload, type: REMOVE_FROM_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
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
      return statePart.map(e =>
        e.id !== action.payload ? e : { ...e, compare: true }
      );
    }
    case REMOVE_FROM_COMPARE: {
      return statePart.map(e =>
        e.id !== action.payload ? e : { ...e, compare: false }
      );
    }
    default:
      return statePart;
  }
}
