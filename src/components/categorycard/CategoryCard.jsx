import React from "react";
import "./CategoryCard.css";
import { useProducts } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ category }) => {
  const { categoryName, description } = category;
  const { productsDispatch } = useProducts();
  const navigate = useNavigate();

  return (
    <div
      className="category-card"
      onClick={() => {
        productsDispatch({ type: "CATEGORY", payload: categoryName });
        navigate("/products");
      }}
    >
      <h5 className="category-name">{categoryName}</h5>
      <p className="category-description">{description}</p>
    </div>
  );
};
