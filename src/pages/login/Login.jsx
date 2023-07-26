import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../contexts/AuthContext";

export const Login = () => {
  const { loginHandler } = useAuth();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const loginFormChangeHandler = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
  };

  return (
    <div className="login">
      <form className="login-form-container" onSubmit={loginFormSubmitHandler}>
        <h1 className="login-form-heading">Login</h1>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={loginDetails.email}
            onChange={(e) => loginFormChangeHandler(e)}
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={loginFormChangeHandler}
            value={loginDetails.password}
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        <Link to="/signup" className="link-login">
          Don't have an account?Sign up
        </Link>
      </form>
    </div>
  );
};
