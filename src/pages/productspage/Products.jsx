import React from "react";
import { Filter } from "../../components/filters/Filter";
import { useProducts } from "../../contexts/ProductsContext";
import "./Products.css";
import { ProductCard } from "../../components/productcard/ProductCard";

export const Products = () => {
  const { filterByPriceRange } = useProducts();
  return (
    <div className="products-page-layout">
      <main className="products-page-main-section">
        <Filter />
        <section className="products-section">
          <h2>Showing {filterByPriceRange.length} Products</h2>
          <div className="products">
            {" "}
            {filterByPriceRange.map((book) => {
              return <ProductCard book={book} key={book.id} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
