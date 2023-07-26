import axios from "axios";

export const getAddressService = async (encodedToken) =>
  await axios.get("/api/user/addresses", {
    headers: { authorization: encodedToken },
  });

export const addNewAddressService = async (address, encodedToken) =>
  await axios.post(
    "/api/user/address",
    { address: address },
    { headers: { authorization: encodedToken } }
  );

export const editAddressService = async (address, addressId, encodedToken) =>
  await axios.post(
    `api/user/address/${addressId}`,
    { address: address },
    { headers: { authorization: encodedToken } }
  );

export const deleteAddressService = async (addressId, encodedToken) =>
  await axios.delete(`api/user/address/${addressId}`, {
    headers: { authorization: encodedToken },
  });
