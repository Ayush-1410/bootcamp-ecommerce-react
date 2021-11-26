import * as actionTypes from "./shop-types";

const INITIAL_STATE = {
  cart: [],
  currentItem: 0,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const product = action.payload;

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const quantity = {
        ...product,
        qty: 1,
      };
      return {
        ...state,
        cart: [...state.cart, quantity],
        currentItem: state.currentItem + 1,
      };    
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, qty: product.qty } : item
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
