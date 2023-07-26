import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { NavLink, useLocation } from "react-router-dom";
import "./RequireAuth.css";

export const RequireAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? (
    children
  ) : (
    <div className="login-to-continue-link-container">
      <NavLink
        to="/login"
        className="login-to-continue-link"
        state={{ from: location }}
      >
        Login to continue
      </NavLink>
    </div>
  );
};
