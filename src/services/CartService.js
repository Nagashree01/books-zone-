import axios from "axios";

export const getCartService = async (encodedToken) =>
  await axios.get("/api/user/cart", {
    headers: { authorization: encodedToken },
  });

export const addToCartService = async (product, encodedToken) =>
  await axios.post(
    "api/user/cart",
    { product },
    { headers: { authorization: encodedToken } }
  );

export const deleteFromCartService = async (productId, encodedToken) =>
  await axios.delete(`/api/user/cart/${productId}`, {
    headers: { authorization: encodedToken },
  });

export const incrementOrDecrementItemInCartService = async (
  productId,
  type,
  encodedToken
) =>
  await axios.post(
    `/api/user/cart/${productId}`,
    { action: { type } },
    {
      headers: { authorization: encodedToken },
    }
  );
