import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import toast from "react-hot-toast";
import "./BookDetail.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useAuth } from "../../contexts/AuthContext";

export const BookDetail = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { bookId } = useParams();
  const { productsState } = useProducts();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const bookDetail = productsState.products.find((book) => {
    return book._id === bookId;
  });

  const { title, author, price, categoryName, format, description, bookImg } =
    bookDetail;
  return (
    <div>
      <div className="book-details-card-container">
        <div className="book-details-card">
          <div className="book-img-container">
            <img src={bookImg} alt={title} className="book-img" />
          </div>
          <div className="book-details">
            <h3 className="book-title">{title}</h3>
            <p className="book-author">By {author}</p>
            <p className="book-category">{categoryName}</p>
            <p className="book-description">{description}</p>
            <p className="book-type">Book Format: {format}</p>
            <p>Price: Rs.{price}</p>
            <div className="book-details-btns">
              <button
                className="add-to-wishlist-btn"
                onClick={() => {
                  if (token) {
                    addToWishlist(bookDetail);
                    toast.success(`${title} added to wishlist`);
                  } else {
                    toast("Login to continue");
                    navigate("/login");
                  }
                }}
              >
                Add to wishlist
              </button>
              <button
                className="add-to-cart-btn"
                onClick={() => {
                  if (token) {
                    addToCart(bookDetail);
                    toast.success(`${title} added to cart`);
                  } else {
                    toast("Login to continue");
                  }
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <AiOutlineArrowLeft
        className="link"
        onClick={() => {
          navigate("/products");
        }}
      />
    </div>
  );
};
