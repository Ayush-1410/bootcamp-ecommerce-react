import React from "react";
import "./App.css";
import Nav from "./components/Home/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Home/Footer";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import ProductDesc from "./components/Products/ProductDesc";
import Shipping from "./components/Cart/Shipping";
import Payment from "./components/Cart/Payment";
import PlaceOrder from "./components/Cart/PlaceOrder";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/prod/:id" element={<ProductDesc />} />
          <Route exact path="/shipping" element={<Shipping />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/placeorder" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
