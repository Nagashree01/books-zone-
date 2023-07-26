import React from "react";
import "./WishlistCard.css";
import { useWishlist } from "../../contexts/WishlistContext";
import { useCart } from "../../contexts/CartContext";
import toast from "react-hot-toast";

export const WishlistCard = ({ book }) => {
  const { title, author, price, categoryName, bookImg } = book;
  const { deleteFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="wishlist-card">
      <div className="wishlist-card-img-container">
        <img
          src={bookImg}
          alt={title}
          className="wishlist-card-img"
          height="200"
        />
      </div>
      <div className="wishlist-card-book-details">
        <h6 className="book-title">{title}</h6>
        <p className="book-author">By {author}</p>
        <p className="book-category">{categoryName}</p>
        <p className="book-price">Rs {price}</p>
        <div className="wishlist-card-btns">
          <button
            onClick={() => {
              addToCart(book);
              deleteFromWishlist(book);
              toast.success(`${title} moved to cart`);
            }}
          >
            Move to Cart
          </button>
          <button
            onClick={() => {
              deleteFromWishlist(book);
              toast.success(`${title} deleted from wishlist`);
            }}
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
