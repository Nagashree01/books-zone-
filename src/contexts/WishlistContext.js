import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./AuthContext";
import {
  addToWishlistService,
  deleteFromWishlistService,
  getWishlistService,
} from "../services/WishlistService";

export const WishlistContext = createContext();

const initialWishlistState = { wishlist: [] };

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "WISHLIST":
      return { ...state, wishlist: action.payload };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: action.payload };
    case "DELETE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };
    default:
      break;
  }
};

export const WishlistContextProvider = ({ children }) => {
  const { token } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const totalItemsInWishlist = wishlistState.wishlist.length;

  const checkIsPresentInWishlist = (book) =>
    wishlistState.wishlist.some(
      (wishlistBook) => wishlistBook._id === book._id
    );

  const getWishlist = async () => {
    try {
      const response = await getWishlistService(token);
      const {
        status,
        data: { wishlist },
      } = response;
      if (status === 200) {
        wishlistDispatch({ type: "WISHLIST", payload: wishlist });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addToWishlist = async (product) => {
    try {
      const response = await addToWishlistService(product, token);
      const {
        status,
        data: { wishlist },
      } = response;
      if (status === 201) {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: wishlist });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromWishlist = async ({ _id: productId }) => {
    try {
      const response = await deleteFromWishlistService(productId, token);
      const {
        status,
        data: { wishlist },
      } = response;
      if (status === 200) {
        wishlistDispatch({ type: "DELETE_FROM_WISHLIST", payload: wishlist });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        addToWishlist,
        deleteFromWishlist,
        totalItemsInWishlist,
        checkIsPresentInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
