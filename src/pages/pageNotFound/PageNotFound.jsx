import React from "react";
import "./PageNotFound.css";
import { NavLink } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="not-found">
      <div>
        <img
          src="../assets/notfound.svg"
          alt="page-not-found"
          className="not-found-image"
        />
      </div>
      <h1>Aww snap something went wrong </h1>
      <NavLink to="/">Go to Home Page</NavLink>
    </div>
  );
};
