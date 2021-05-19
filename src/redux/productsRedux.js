/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getProduct = ({ products }, id) => products.find(p => p.id === id);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');

/* action creators */
export const addToFavorites = payload => ({ payload, type: ADD_TO_FAVORITES });
export const removeFromFavorites = payload => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});

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
    default:
      return statePart;
  }
}
