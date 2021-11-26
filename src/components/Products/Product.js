import React, { useState, useEffect } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Search from "../Home/Search";
import { RatingView } from "react-simple-star-rating";

function Product() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProductData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Search />
      <div className="product">
        <h1>{!loading ? "Product Listing" : "Please Wait..."}</h1>
        <div className="product_items">
          {productData.map((items) => {
            return (
              <div className="product_items_listing">
                <div class="product_cart">
                  <Link to={`/prod/${items.id}`}>
                    <img src={items.image} alt="" />
                    <button>Add to Cart</button>
                  </Link>
                </div>
                <div className="product_details">
                  <h2>{items.title.substring(0, 20)}</h2>
                  <p>
                    <RatingView ratingValue={items.rating.rate} />
                  </p>
                  <p>${items.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
