import React from "react";

import "./Home.css";
import { Footer } from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import { CategoryCard } from "../../components/categorycard/CategoryCard";

export const Home = () => {
  const navigate = useNavigate();
  const { productsState } = useProducts();

  return (
    <div>
      {/* <Header /> */}
      <div>
        <div className="homepage-image-quote">
          <div className="quote-section">
            <h1>A book can change your life.</h1>
            <button
              className="primary-btn"
              onClick={() => {
                navigate("/products");
              }}
            >
              Buy Books
            </button>
          </div>
          <div className="home-img-section">
            <img
              src="../assets/bookshelf.svg"
              alt="books"
              className="home-img"
            />
          </div>
        </div>
        <div className="book-categories-section">
          <h4 className="book-categories-heading">Book Categories</h4>
          <div className="categories-section">
            {productsState.allcategories.map((category) => {
              return <CategoryCard category={category} key={category._id} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
