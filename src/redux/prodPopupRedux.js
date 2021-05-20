export const getProdPopup = ({ prodPopup }) => prodPopup;

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const OPEN_PRODUCT_POPUP = createActionName('OPEN_PRODUCT_POPUP');
const CLOSE_PRODUCT_POPUP = createActionName('CLOSE_PRODUCT_POPUP');

/* action creators */
export const openProductPopup = payload => ({ payload, type: OPEN_PRODUCT_POPUP });
export const closeProductPopup = payload => ({ payload, type: CLOSE_PRODUCT_POPUP });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case OPEN_PRODUCT_POPUP: {
      return { ...statePart, isShown: true, productId: action.payload };
    }
    case CLOSE_PRODUCT_POPUP: {
      return { ...statePart, isShown: false };
    }
    default:
      return statePart;
  }
}
