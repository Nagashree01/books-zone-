import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useAuth } from "../../contexts/AuthContext";

export const Signup = () => {
  const { signupHandler } = useAuth();

  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const signupFormChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignupDetails({ ...signupDetails, [name]: value });
  };

  const signupFormSubmitHandler = (e) => {
    e.preventDefault();
    signupHandler(signupDetails);
  };

  return (
    <div className="signup">
      <form
        className="signup-form-container"
        onSubmit={signupFormSubmitHandler}
      >
        <h1 className="signup-form-heading">Sign Up</h1>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={signupDetails.firstName}
            required
            onChange={signupFormChangeHandler}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={signupDetails.lastName}
            placeholder="Last Name"
            onChange={signupFormChangeHandler}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={signupDetails.email}
            placeholder="email"
            onChange={signupFormChangeHandler}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            value={signupDetails.password}
            type="password"
            name="password"
            placeholder="password"
            onChange={signupFormChangeHandler}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create New Account
        </button>
        <Link to="/login" className="link-login">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};
