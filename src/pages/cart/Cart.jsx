import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useCart } from "../../contexts/CartContext";
import { CartCard } from "../../components/cartcard/CartCard";
import "./Cart.css";

export const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    totalItems,
    totalPrice,
    totalPriceOfCartItems,
    deliveryCharge,
  } = useCart();

  return (
    <div>
      <div
        className="previous-page-link-icon-section"
        onClick={() => navigate("/products")}
      >
        <AiOutlineArrowLeft className="previous-page-link-icon" />
      </div>
      {cartItems.length > 0 ? (
        <div className="cart-items-details-section">
          <div className="cart-items">
            {cartItems?.map((book) => {
              return <CartCard key={book._id} book={book} />;
            })}
          </div>
          <div className="cart-summary-section">
            <h1>Cart Summary</h1>

            <div className="cart-price">
              <p>Price ({totalItems} items)</p>
              <div>{totalPriceOfCartItems}</div>
            </div>
            <div className="cart-delivery-price">
              <p>Delivery Charge</p>
              <div>{deliveryCharge}</div>
            </div>
            <hr />
            <div className="cart-total-price">
              <h1>Total</h1>
              <div>{totalPrice}</div>
            </div>
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="add-to-cart-link-section">
          <h1>Add Items to Cart</h1>
          <button
            className="browse-books-btn"
            onClick={() => {
              navigate("/products");
            }}
          >
            Browse Books
          </button>
        </div>
      )}
    </div>
  );
};
