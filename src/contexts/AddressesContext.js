import { createContext, useContext, useEffect, useState } from "react";
import {
  addNewAddressService,
  deleteAddressService,
  getAddressService,
} from "../services/AddressesService";
import { useAuth } from "./AuthContext";

export const AddressesContext = createContext();

export const AddressesContextProvider = ({ children }) => {
  const { token } = useAuth();
  const [addresses, setAddresses] = useState([]);

  const getAddresses = async () => {
    try {
      const response = await getAddressService(token);
      const {
        status,
        data: { address },
      } = response;
      if (status === 200) {
        setAddresses(address);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addAddress = async (newAddress) => {
    try {
      const response = await addNewAddressService(newAddress, token);
      const {
        status,
        data: { address },
      } = response;
      if (status === 201) {
        setAddresses(address);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAddress = async (addressId) => {
    try {
      const response = await deleteAddressService(addressId, token);
      const {
        status,
        data: { address },
      } = response;
      if (status === 200) {
        setAddresses(address);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <AddressesContext.Provider value={{ addresses, addAddress, deleteAddress }}>
      {children}
    </AddressesContext.Provider>
  );
};

export const useAddresses = () => useContext(AddressesContext);
