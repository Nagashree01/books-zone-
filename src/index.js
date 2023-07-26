import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { WishlistContextProvider } from "./contexts/WishlistContext";
import { CartContextProvider } from "./contexts/CartContext";
import { AddressesContextProvider } from "./contexts/AddressesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductsContextProvider>
          <WishlistContextProvider>
            <CartContextProvider>
              <AddressesContextProvider>
                <App />
              </AddressesContextProvider>
            </CartContextProvider>
          </WishlistContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
