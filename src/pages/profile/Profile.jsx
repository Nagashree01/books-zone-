import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useAddresses } from "../../contexts/AddressesContext";

export const Profile = () => {
  const {
    currentUser: { firstName, lastName, email },
  } = useAuth();

  const { addresses, deleteAddress } = useAddresses();

  return (
    <div>
      <div>
        <p>
          Name:{firstName} {lastName}
        </p>
        <p>Email: {email}</p>
      </div>
      <div>
        {addresses.map((address) => {
          const {
            _id,
            name,
            street,
            area,
            city,
            country,
            state,
            zipcode,
            phoneNo,
          } = address;

          return (
            <div>
              <div>{name}</div>
              <div>
                <span>{street}</span>
                <span>{area}</span>
              </div>
              <div>{city}</div>
              <div>
                {state}-{zipcode}
              </div>
              <div>{country}</div>
              <div>Phone No : {phoneNo}</div>
              <button
                className="primary-btn"
                onClick={() => deleteAddress(_id)}
              >
                Delete Address
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
