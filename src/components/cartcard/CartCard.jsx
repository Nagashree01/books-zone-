import React from "react";
import "./CartCard.css";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import toast from "react-hot-toast";

export const CartCard = ({ book }) => {
  const { _id, title, author, price, categoryName, bookImg, qty } = book;
  const { deleteFromCart, increaseOrDecrementQtyOfItemInCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="cart-card">
      <div className="cart-card-img-container">
        <img src={bookImg} alt={title} className="cart-card-img" height="200" />
      </div>
      <div className="cart-card-book-details">
        <h6 className="book-title">{title}</h6>
        <p className="book-author">By {author}</p>
        <p className="book-category">{categoryName}</p>
        <p className="book-qty">
          {" "}
          <button
            className="qty-decrease"
            onClick={() => {
              increaseOrDecrementQtyOfItemInCart(_id, "decrement");
            }}
            disabled={qty <= 1 ? true : false}
          >
            -
          </button>
          {qty}
          <button
            className="qty-increase"
            onClick={() => {
              increaseOrDecrementQtyOfItemInCart(_id, "increment");
            }}
          >
            +
          </button>
        </p>
        <p className="book-price">Rs {price}</p>
        <div className="cart-card-btns">
          <button
            onClick={() => {
              addToWishlist(book);
              deleteFromCart(_id);
              toast.success(`${title} moved to wishlist`);
            }}
          >
            Move to Wishlist
          </button>
          <button
            onClick={() => {
              deleteFromCart(_id);
              toast.success(`${title} deleted from cart`);
            }}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};
