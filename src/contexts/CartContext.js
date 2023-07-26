import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import {
  addToCartService,
  deleteFromCartService,
  getCartService,
  incrementOrDecrementItemInCartService,
} from "../services/CartService";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { token } = useAuth();

  const [cartItems, setCartItems] = useState([]);

  const deliveryCharge = 50;

  const totalItems = cartItems.reduce((acc, cur) => acc + cur.qty, 0);

  const totalPriceOfCartItems = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.qty,
    0
  );

  const totalPrice = totalPriceOfCartItems + deliveryCharge;
  const checkIsPresentInCart = (book) =>
    cartItems.some((cartBook) => cartBook._id === book._id);

  const getCart = async () => {
    try {
      const response = await getCartService(token);
      const {
        status,
        data: { cart },
      } = response;
      if (status === 200) {
        setCartItems(cart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await addToCartService(product, token);
      const {
        status,
        data: { cart },
      } = response;
      if (status === 201) {
        setCartItems(cart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      const response = await deleteFromCartService(productId, token);
      const {
        status,
        data: { cart },
      } = response;
      if (status === 200) {
        setCartItems(cart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const increaseOrDecrementQtyOfItemInCart = async (productId, type) => {
    try {
      const response = await incrementOrDecrementItemInCartService(
        productId,
        type,
        token
      );
      const {
        status,
        data: { cart },
      } = response;
      if (status === 200) {
        setCartItems(cart);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const clearCart = () => {
    cartItems.forEach((book) => {
      deleteFromCart(book._id);
    });
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromCart,
        increaseOrDecrementQtyOfItemInCart,
        totalItems,
        totalPrice,
        totalPriceOfCartItems,
        deliveryCharge,
        clearCart,
        checkIsPresentInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
