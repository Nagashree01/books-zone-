import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Wishlist.css";
import { useWishlist } from "../../contexts/WishlistContext";
import { WishlistCard } from "../../components/wishlistcard/WishlistCard";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlistState } = useWishlist();

  return (
    <div>
      <div
        className="previous-page-link-icon-section"
        onClick={() => navigate("/products")}
      >
        <AiOutlineArrowLeft className="previous-page-link-icon" />
      </div>
      {wishlistState.wishlist.length > 0 ? (
        <div className="wishlist-items">
          {wishlistState.wishlist?.map((book) => {
            return <WishlistCard key={book._id} book={book} />;
          })}
        </div>
      ) : (
        <div className="add-to-cart-link-section">
          <h1>Add Items to Wishlist</h1>
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
