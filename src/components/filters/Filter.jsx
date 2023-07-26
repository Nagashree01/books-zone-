import React from "react";
import { useProducts } from "../../contexts/ProductsContext";
import "./Filters.css";

export const Filter = () => {
  const { productsState, productsDispatch } = useProducts();
  const productCategories = productsState.products.reduce(
    (acc, { categoryName }) =>
      acc.includes(categoryName) ? acc : [...acc, categoryName],
    []
  );
  return (
    <div className="filter-section">
      <div className="filter-head">
        <h5>Filters</h5>
        <button
          className="clear-btn"
          onClick={() =>
            productsDispatch({
              type: "CLEAR_FILTERS",
              payload: {
                products: productsState.products,
                categories: productsState.allcategories,
              },
            })
          }
        >
          {" "}
          clear{" "}
        </button>
      </div>
      <fieldset>
        <legend>Price Range</legend>
        <div className="filter-range-price-values">
          <span>200</span>

          <span>800</span>
        </div>
        <input
          type="range"
          value={productsState.rangePrice}
          min="200"
          max="800"
          step="200"
          onChange={(e) =>
            productsDispatch({
              type: "PRICE_RANGE",
              payload: e.target.value,
            })
          }
        />
      </fieldset>
      <fieldset>
        <legend>Category</legend>
        <div>
          {productCategories.map((categoryName) => (
            <div>
              <input
                className="category-input"
                checked={productsState.categoryInput.includes(categoryName)}
                type="checkbox"
                value={categoryName}
                onClick={(e) =>
                  productsDispatch({
                    type: "CATEGORY",
                    payload: e.target.value,
                  })
                }
              />
              <label className="category-label">{categoryName}</label>
            </div>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Rating</legend>
        <div>
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="5"
            checked={productsState.ratingInput === 5}
            onChange={(e) =>
              productsDispatch({
                type: "RATING",
                payload: e.target.value,
              })
            }
          />
          <label className="rating-label">⭐⭐⭐⭐⭐</label>
        </div>
        <div>
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="4"
            checked={productsState.ratingInput === 4}
            onChange={(e) =>
              productsDispatch({
                type: "RATING",
                payload: e.target.value,
              })
            }
          />
          <label className="rating-label">⭐⭐⭐⭐</label>
        </div>
        <div>
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="3"
            checked={productsState.ratingInput === 3}
            onChange={(e) =>
              productsDispatch({
                type: "RATING",
                payload: e.target.value,
              })
            }
          />
          <label className="rating-label">⭐⭐⭐</label>
        </div>
        <div>
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="2"
            checked={productsState.ratingInput === 2}
            onChange={(e) =>
              productsDispatch({
                type: "RATING",
                payload: e.target.value,
              })
            }
          />
          <label className="rating-label">⭐⭐</label>
        </div>
        <div>
          <input
            className="rating-input"
            type="radio"
            name="rating"
            value="1"
            checked={productsState.ratingInput === 1}
            onChange={(e) =>
              productsDispatch({
                type: "RATING",
                payload: e.target.value,
              })
            }
          />
          <label className="rating-label">⭐</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Sort by Price</legend>
        <div>
          {" "}
          <label>
            <input
              type="radio"
              name="price"
              value="highToLow"
              checked={productsState.sortPrice === "highToLow"}
              onChange={(e) =>
                productsDispatch({
                  type: "PRICE_SORT",
                  payload: e.target.value,
                })
              }
            />
            High to Low
          </label>
        </div>
        <div>
          <label>
            <input
              checked={productsState.sortPrice === "lowToHigh"}
              type="radio"
              name="price"
              value="lowToHigh"
              onChange={(e) =>
                productsDispatch({
                  type: "PRICE_SORT",
                  payload: e.target.value,
                })
              }
            />
            Low to High
          </label>
        </div>
      </fieldset>
    </div>
  );
};
