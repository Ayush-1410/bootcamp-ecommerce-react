import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import "./Payment.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Payment() {
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
      <div className="payment">
        <div className="payment_left">
          <h2>Payment Method</h2>
          <hr />

          <div className="payment_credit">
            <label>
              <input type="radio" name="money" checked />
              Credit Card
            </label>

            <div className="payment_credit_input">
              <input type="number" placeholder="0000 0000 0000 0000" />
              <input type="number" placeholder="MM/YY" />
              <input type="number" placeholder="CVV" />
            </div>
            <div className="payment_credit_name">
              <input type="text" placeholder="Card Holder Name" />
            </div>
          </div>
          <hr />

          <label>
            <div className="payment_paypal">
              <div>
                <input type="radio" name="money" />
                Paypal
              </div>
              <i class="fab fa-paypal"></i>
            </div>
          </label>
          <hr />

          <div className="payment_button">
            <Link to="/placeorder">
              <button>Pay Now</button>
            </Link>
            <button>Cancel</button>
          </div>
        </div>

        <div className="payment_summary">
          <h2>Summary</h2>
          <hr />

          {state.cart.map((item) => {
            return (
              <div className="payment_detail">
                <img src={item.image} alt="" />
                <div className="payment_title">
                  <h5>{item.title.substring(0, 15)}</h5>
                  <p>${item.price}</p>
                </div>
              </div>
            );
          })}
          <hr />

          <div className="payment_price">
            <div className="payment_price_left">
              <p>SUBTOTAL</p>
              <p>SHIPPING</p>
              <p>TAXES</p>
            </div>
            <div className="payment_price_right">
              <p>${subtotal}</p>
              <p>FREE</p>
              <p>$13</p>
            </div>
          </div>
          <hr />
          <div className="payment_total">
            <p>TOTAL</p>
            <p>${(subtotal + 13).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
