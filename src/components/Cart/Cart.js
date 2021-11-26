import React from "react";
import "./Cart.css";
import Item from "./Item";
import Tabs from "./Tabs";

function Cart() {
  return (
    <div className="cart">
      <Tabs />

      <Item />
    </div>
  );
}

export default Cart;
