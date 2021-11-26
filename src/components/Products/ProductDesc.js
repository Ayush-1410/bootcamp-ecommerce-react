import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./ProductDesc.css";
import { RatingView } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/shop/shop-actions";

function ProductDesc() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const btnRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(product);
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));

    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
  };

  return (
    <div className="product_desc">
      <div className="product_desc_top">
        <img src={product.image} alt="" />
        <form className="product_desc_right">
          <div className="product_desc_title">
            <h2>{product.title ? product.title.substring(0, 20) : ""}</h2>
            <p>
              <RatingView ratingValue={product.rating && product.rating.rate} />
            </p>
            <hr />
          </div>
          <div className="product_desc_price">
            <h3>${product.price}</h3>
            <select>
              <option>Select Model</option>
              <option>Size</option>
              <option>Colour</option>
            </select>
          </div>
          <hr />
          <div className="product_desc_description">
            {product.description ? product.description.substring(0, 300) : ""}
          </div>
          <hr />
          <div className="product_desc_button">
            <button ref={btnRef} onClick={addToCartHandler}>
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductDesc;
