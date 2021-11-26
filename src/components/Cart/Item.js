import React, { useState, useEffect } from "react";
import "./Item.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { adjustItemQty } from "../../redux/shop/shop-actions";
import { Link } from "react-router-dom";

function Item() {
  const state = useSelector((state) => state.shop);

  const [totalPrice, setTotalPrice] = useState(0);
  console.log(totalPrice);

  useEffect(() => {
    let price = 0;
    console.log(state);

    state.cart.forEach((item) => {
      price += item.qty * item.price;
    });
    setTotalPrice(price);
  }, [state.cart, totalPrice, setTotalPrice]);

  const dispatch = useDispatch();

  const adjustItemQtyHandler = (e, item) => {
    dispatch(adjustItemQty(item.id, e.target.value));
  };

  return (
    <div className="item">
      <div className="item_left">
        <p>Shopping item</p>
        <hr />
        {state.cart.map((items) => {
          return (
            <div className="item_details">
              <div className="item_details_left">
                <img src={items.image} alt="" />
                <div className="item_title">
                  <h5>{items.title.substring(0, 20)}</h5>
                  <span>{items.description.substring(0, 50)}</span>
                  <p>${items.price}</p>
                </div>
              </div>
              <div className="item_details_right">
                <label>Qty:</label>
                <input
                  min="1"
                  type="number"
                  value={items.qty}
                  onChange={(e) => adjustItemQtyHandler(e, items)}
                />
              </div>
            </div>
          );
        })}
        <hr />
        <div className="item_button">
          <Link to="/shipping">
            <button>Next</button>
          </Link>
          <button>Cancel</button>
        </div>
      </div>

      <div className="item_right">
        <p>Summary</p>
        <hr />
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "1px",
            fontWeight: "bold",
          }}
        >
          ENTER COUPON CODE
        </p>
        <hr />
        <div className="item_price">
          <div className="item_price_left">
            <p>SUBTOTAL</p>
            <p>SHIPPING</p>
            <p>TAXES</p>
          </div>
          <div className="item_price_right">
            <p>${totalPrice.toFixed(2)}</p>
            <p>FREE</p>
            <p>$13</p>
          </div>
        </div>
        <hr />
        <div className="item_total">
          <p>TOTAL</p>
          <p>${(totalPrice + 13).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
