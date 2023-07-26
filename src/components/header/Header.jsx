import React from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./Header.css";
import { useProducts } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

export const Header = () => {
  const { productsDispatch } = useProducts();
  const navigate = useNavigate();
  const { token, logoutHandler } = useAuth();
  const { totalItems } = useCart();
  const { totalItemsInWishlist } = useWishlist();

  return (
    <header className="header">
      <div>
        <h1 className="heading" onClick={() => navigate("/")}>
          Books Zone
        </h1>
      </div>
      <div>
        <input
          className="search-input"
          placeholder="search books..."
          type="text"
          onChange={(e) => {
            navigate("/products");
            productsDispatch({ type: "SEARCH", payload: e.target.value });
          }}
        />
      </div>
      <div className="header-navigation-icons">
        <div className="wishlist-icon">
          <AiFillHeart onClick={() => navigate("/wishlist")} />
          {token && totalItemsInWishlist > 0 && (
            <span className="wishlist-books-count">{totalItemsInWishlist}</span>
          )}
        </div>
        <div className="cart-icon">
          <AiOutlineShoppingCart onClick={() => navigate("/cart")} />
          {token && totalItems > 0 && (
            <span className="cart-books-count">{totalItems}</span>
          )}
        </div>
        {token && (
          <div>
            <CgProfile onClick={() => navigate("/profile")} />
          </div>
        )}
        <div>
          {token ? (
            <button onClick={logoutHandler} className="primary-btn">
              Logout
            </button>
          ) : (
            <button onClick={() => navigate("/login")} className="primary-btn">
              login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
