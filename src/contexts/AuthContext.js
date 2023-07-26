import { createContext, useContext, useState } from "react";
import { loginService, signupService } from "../services/AuthService";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user || "");

  const signupHandler = async ({ firstName, lastName, email, password }) => {
    try {
      const response = await signupService(
        firstName,
        lastName,
        email,
        password
      );
      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setCurrentUser(createdUser);
        setToken(encodedToken);
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async ({ email, password }) => {
    try {
      const response = await loginService(email, password);
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;
      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrentUser(foundUser);
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    setCurrentUser(null);
    setToken(null);
    toast.success("You have successfully logged out");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ loginHandler, token, currentUser, signupHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
