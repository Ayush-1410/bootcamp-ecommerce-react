import React, { useState, useEffect } from "react";
import "./Shipping.css";
import Tabs from "./Tabs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Shipping() {
  const state = useSelector((state) => state.shop);

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let price = 0;

    state.cart.forEach((item) => {
      price += item.qty * item.price;
    });
    setSubtotal(price);
  }, [state.cart, subtotal, setSubtotal]);

  return (
    <>
      <Tabs />
      <div className="shipping_form">
        <form>
          <h2>Shipping Details</h2>
          <hr />
          <div className="form_name">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form_address">
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Address 2" />
          </div>
          <div className="form_country">
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="City" />
          </div>
          <div className="form_number">
            <input type="number" placeholder="Zip/Postal Code" />
            <input type="number" placeholder="  Phone Number" />
          </div>
          <hr />
          <div className="form_btn">
            <div className="shipping_free">
              <input type="radio" name="radio-btn" />
              <label>Free Shipping</label>
            </div>
            <div className="shipping_delivery">
              <input type="radio" name="radio-btn" />
              <label>Next Day Delivery - $20 </label>
            </div>
          </div>
          <div className="shipping_button">
            <Link to="/payment">
              <button>Next</button>
            </Link>
            <button>Cancel</button>
          </div>
        </form>

        <div className="shipping_summary">
          <h2>Summary</h2>
          <hr />

          {state.cart.map((item) => {
            return (
              <div className="shipping_detail">
                <img src={item.image} alt="" />
                <div className="shipping_title">
                  <h5>{item.title.substring(0, 15)}</h5>
                  <p>${item.price}</p>
                </div>
              </div>
            );
          })}

          <hr />
          <div className="shipping_price">
            <div className="shipping_price_left">
              <p>SUBTOTAL</p>
              <p>SHIPPING</p>
              <p>TAXES</p>
            </div>
            <div className="shipping_price_right">
              <p>${subtotal.toFixed(2)}</p>
              <p>FREE</p>
              <p>$13</p>
            </div>
          </div>
          <hr />
          <div className="shipping_total">
            <p>TOTAL</p>
            <p>${(subtotal + 13).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipping;
