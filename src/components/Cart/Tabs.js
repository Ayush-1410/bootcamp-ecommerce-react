import React from "react";
import { Link } from "react-router-dom";

function Tabs() {
  return (
    <div className="tabs">
      <nav>
        <Link className="link_styling" to="/cart">
          1. Shopping Cart
        </Link>
        <Link className="link_styling" to="/shipping">
          2. Shipping Details
        </Link>
        <Link className="link_styling" to="/payment">
          3. Payment Options
        </Link>
      </nav>
    </div>
  );
}

export default Tabs;
