import React from "react";
import "./PlaceOrder.css";
import { Link } from "react-router-dom";

function PlaceOrder() {
  return (
    <div className="place_order">
      <div className="place_order_content">
        <h1>Your Order has been placed</h1>
        <Link className="place_link" to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default PlaceOrder;
