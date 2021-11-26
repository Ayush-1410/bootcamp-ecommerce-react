import * as actionTypes from "./shop-types";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

export const adjustItemQty = (product, value) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: product,
      qty: value,
    },
  };
};
