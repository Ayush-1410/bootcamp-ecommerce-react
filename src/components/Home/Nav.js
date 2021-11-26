import React, { useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const state = useSelector((state) => state.shop);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="nav">
      <Link className="heading_link" to="/">
        <h1>AVATAR</h1>
      </Link>
      <div className="nav_links">
        <ul>
          <Link className="cart_styling1" to="/">
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Shop</li>
          <li>Help</li>
          <Link className="cart_styling" to="/cart">
            <li>
              <i className="fas fa-shopping-basket">{state.currentItem}</i>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
