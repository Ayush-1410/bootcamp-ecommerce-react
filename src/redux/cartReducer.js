import { combineReducers } from "redux";

import shopReducer from "./shop/shop-reducer";

const cartReducer = combineReducers({
  shop: shopReducer,
});

export default cartReducer;
