import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductCard.css";
import { AiOutlineStar } from "react-icons/ai";
import { useProducts } from "../../contexts/ProductsContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useCart } from "../../contexts/CartContext";
import { toast } from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";

export const ProductCard = ({ book }) => {
  const { token } = useAuth();
  const { getProductById } = useProducts();
  const { addToWishlist, checkIsPresentInWishlist } = useWishlist();
  const { addToCart, checkIsPresentInCart } = useCart();
  const { _id, title, price, bookImg, ratings } = book;

  const isPresentInWishlist = checkIsPresentInWishlist(book);
  const isPresentInCart = checkIsPresentInCart(book);

  return (
    <div className="book-card">
      <div className="bookImg-container">
        <img src={bookImg} className="bookImg" alt={title} />
        <div className="book-rating">
          {ratings}
          <AiOutlineStar className="star-icon" />
        </div>
      </div>
      <h4 className="book-title">{title}</h4>

      <p className="book-price">Price:{price}</p>
      <NavLink
        className="book-detail-link"
        to={`/book/${_id}`}
        onClick={() => {
          getProductById(_id);
        }}
      >
        View details
      </NavLink>
      <div className="book-btns">
        <button
          className="add-to-wishlist-btn"
          onClick={() => {
            if (token) {
              if (isPresentInWishlist) {
                toast(`${title} is already present in wishlist`, {
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              } else {
                addToWishlist(book);
                toast.success(`${title} added to wishlist`);
              }
            } else {
              toast("Login to continue", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }
          }}
        >
          Add to Wishlist
        </button>
        <button
          onClick={() => {
            if (token) {
              if (isPresentInCart) {
                toast(`${title} is already present in cart`, {
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              } else {
                addToCart(book);
                toast.success(`${title} added to cart`);
              }
            } else {
              toast("Login to continue", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }
          }}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
