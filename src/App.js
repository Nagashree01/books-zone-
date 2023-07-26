import { Routes, Route } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Home } from "./pages/homepage/Home";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";
import { Products } from "./pages/productspage/Products";
import { BookDetail } from "./pages/bookdetails/BookDetail";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Header } from "./components/header/Header";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { Profile } from "./pages/profile/Profile";
import { Cart } from "./pages/cart/Cart";
import { Toaster } from "react-hot-toast";
import { RequireAuth } from "./components/requireauth/RequireAuth";
import { Checkout } from "./pages/checkout/Checkout";

document.title = "Books Zone";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />

        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
