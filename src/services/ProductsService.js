import axios from "axios";

export const getProductsService = async () => await axios.get("api/products");

export const getProductsByIdService = async (productId) =>
  await axios.get(`api/products/${productId}`);
