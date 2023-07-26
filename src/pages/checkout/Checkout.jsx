import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAddresses } from "../../contexts/AddressesContext";
import { v4 as uuid } from "uuid";
import "./Checkout.css";
import { useCart } from "../../contexts/CartContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  const { addresses, addAddress } = useAddresses();
  const {
    totalItems,
    totalPrice,
    totalPriceOfCartItems,
    deliveryCharge,
    clearCart,
  } = useCart();

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressDetails, setAddressDetails] = useState({
    _id: uuid(),
    name: "",
    street: "",
    area: "",
    city: "",
    state: "",
    zipcode: "",
    phoneNo: "",
  });

  const addressFormChangeHandler = (event) => {
    const { name, value } = event.target;
    setAddressDetails((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const addressFormSubmitHandler = (e) => {
    e.preventDefault();
    addAddress(addressDetails);
    setAddressDetails({
      _id: uuid(),
      name: "",
      street: "",
      area: "",
      city: "",
      state: "",
      zipcode: 0,
      phoneNo: 0,
    });
    setShowAddressForm(false);
  };

  return (
    <div>
      <div
        className="previous-page-link-icon-section"
        onClick={() => navigate("/products")}
      >
        <AiOutlineArrowLeft className="previous-page-link-icon" />
      </div>
      <div>
        <h1>Order Summary</h1>
      </div>
      <div className="check-out-details">
        <div className="address-section">
          <div>
            {addresses.map((address) => (
              <div key={address._id} className="address-input">
                <input
                  type="radio"
                  name="address"
                  onChange={() => setSelectedAddress(address)}
                />
                <label>
                  <div>{address.name}</div>
                  <div>
                    <span>{address.street}</span>
                    <span>{address.area}</span>
                  </div>
                  <div>{address.city}</div>
                  <div>
                    {address.state}-{address.zipcode}
                  </div>
                  <div>{address.country}</div>
                  <div>Phone No{address.phoneNo}</div>
                </label>
              </div>
            ))}
          </div>
          <button
            className="primary-btn"
            onClick={() => setShowAddressForm(true)}
          >
            + Add new Address
          </button>
        </div>

        {showAddressForm && (
          <form onSubmit={addressFormSubmitHandler} className="form">
            <div className="form-content">
              <span className="close" onClick={() => setShowAddressForm(false)}>
                &times;
              </span>
              <h1>Add New Address</h1>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={addressDetails.name}
                  onChange={addressFormChangeHandler}
                  required
                />
              </div>
              <div>
                <label>Street</label>
                <input
                  type="text"
                  placeholder="Street"
                  name="street"
                  value={addressDetails.street}
                  onChange={addressFormChangeHandler}
                  required
                />
              </div>
              <div>
                <label>Area</label>
                <input
                  type="text"
                  placeholder="Area"
                  name="area"
                  value={addressDetails.area}
                  onChange={addressFormChangeHandler}
                  required
                />
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={addressDetails.city}
                  onChange={addressFormChangeHandler}
                  required
                />
              </div>
              <div>
                <label>State</label>
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  value={addressDetails.state}
                  onChange={addressFormChangeHandler}
                  required
                />
              </div>
              <div>
                <label>Zipcode</label>
                <input
                  type="number"
                  placeholder="Zipcode"
                  name="zipcode"
                  pattern="[0-9]{6}"
                  value={addressDetails.zipcode}
                  onChange={addressFormChangeHandler}
                  required
                />
              </div>
              <div>
                <label>Phone no</label>
                <input
                  type="number"
                  placeholder="Phone no"
                  name="phoneNo"
                  pattern="[0-9]{10}"
                  value={addressDetails.phoneNo}
                  onChange={addressFormChangeHandler}
                  required
                />
              </div>
              <div>
                <button
                  className="primary-btn"
                  onClick={() => setShowAddressForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="primary-btn">
                  Save
                </button>
              </div>
            </div>
          </form>
        )}
        <div className="cart-summary-section">
          <h1 className="order-summary-heading">Order Summary</h1>

          <div className="cart-price">
            <p>Price ({totalItems} items)</p>
            <div>{totalPriceOfCartItems}</div>
          </div>
          <div className="cart-delivery-price">
            <p>Delivery Charge</p>
            <div>{deliveryCharge}</div>
          </div>
          <hr />
          <div className="cart-total-price">
            <h1>Total</h1>
            <div>{totalPrice}</div>
          </div>
          {selectedAddress && (
            <div>
              Deliver Address
              <div>
                <div>{selectedAddress?.name}</div>
                <div>
                  <span>{selectedAddress?.street}</span>
                  <span>{selectedAddress?.area}</span>
                </div>
                <div>{selectedAddress?.city}</div>
                <div>
                  {selectedAddress?.state}-{selectedAddress?.zipcode}
                </div>
                <div>{selectedAddress?.country}</div>
                <div>Phone No{selectedAddress?.phoneNo}</div>
              </div>
            </div>
          )}
          <button
            className="checkout-btn"
            onClick={() => {
              if (selectedAddress === null) {
                toast("Select Address for delivery");
              } else {
                toast.success("Order placed");
                navigate("/");
                clearCart();
              }
            }}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};
