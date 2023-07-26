import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getCategoriesService } from "../services/CategoriesService";
import {
  getProductsByIdService,
  getProductsService,
} from "../services/ProductsService";

export const ProductsContext = createContext();

const productsInitialState = {
  allProducts: [],
  products: [],
  searchInput: "",
  categoryInput: [],
  allcategories: [],
  ratingInput: null,
  sortPrice: null,
  rangePrice: 0,
};
const productsReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return { ...state, allProducts: action.payload };
    case "PRODUCTS_DATA":
      return { ...state, products: action.payload };
    case "CATEGORIES_DATA":
      return { ...state, allcategories: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...productsInitialState,
        products: action.payload.products,
        allcategories: action.payload.categories,
      };
    case "SEARCH":
      return { ...state, searchInput: action.payload };
    case "CATEGORY":
      return {
        ...state,
        categoryInput: state.categoryInput.includes(action.payload)
          ? state.categoryInput.filter(
              (category) => category !== action.payload
            )
          : [...state.categoryInput, action.payload],
      };
    case "RATING":
      return { ...state, ratingInput: Number(action.payload) };
    case "PRICE_SORT":
      return { ...state, sortPrice: action.payload };
    case "PRICE_RANGE":
      return { ...state, rangePrice: action.payload };
    default:
      return state;
  }
};

export const ProductsContextProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productsInitialState
  );
  const [bookDetail, setBookDetail] = useState();

  const getCategories = async () => {
    try {
      const response = await getCategoriesService();

      const {
        status,
        data: { categories },
      } = response;
      if (status === 200) {
        productsDispatch({ type: "CATEGORIES_DATA", payload: categories });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await getProductsService();
      const {
        status,
        data: { products },
      } = response;
      if (status === 200) {
        productsDispatch({ type: "PRODUCTS_DATA", payload: products });
        productsDispatch({ type: "ALL_PRODUCTS", payload: products });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productId) => {
    try {
      const response = await getProductsByIdService(productId);
      const {
        status,
        data: { product },
      } = response;
      if (status === 200) {
        setBookDetail(product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const filterBySearch = productsState.searchInput
    ? productsState.products.filter((product) =>
        product.title
          .toLowerCase()
          .includes(productsState.searchInput.toLowerCase())
      )
    : productsState.products;

  const filterByCategories =
    productsState.categoryInput.length > 0
      ? filterBySearch.filter((product) =>
          productsState.categoryInput.some(
            (categoryType) => categoryType === product.categoryName
          )
        )
      : filterBySearch;

  const filterByRatings =
    productsState.ratingInput === null
      ? filterByCategories
      : filterByCategories.filter(
          (product) => product.ratings === productsState.ratingInput
        );

  const filterByPrice =
    productsState.sortPrice !== null
      ? productsState.sortPrice === "highToLow"
        ? filterByRatings.sort((a, b) => b.price - a.price)
        : filterByRatings.sort((a, b) => a.price - b.price)
      : filterByRatings;

  const filterByPriceRange =
    productsState.rangePrice > 0
      ? filterByPrice.filter(
          (product) =>
            product.price <= Number(productsState.rangePrice) + 200 &&
            product.price >= Number(productsState.rangePrice) - 200
        )
      : filterByPrice;

  return (
    <ProductsContext.Provider
      value={{
        productsState,
        productsDispatch,
        filterByPriceRange,
        getProductById,
        bookDetail,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
