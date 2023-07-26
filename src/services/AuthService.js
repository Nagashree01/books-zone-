import axios from "axios";

export const loginService = async (email, password) =>
  await axios.post("/api/auth/login", { email: email, password: password });

export const signupService = async (firstName, lastName, email, password) =>
  await axios.post("api/auth/signup", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
