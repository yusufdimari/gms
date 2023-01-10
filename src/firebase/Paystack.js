import React from "react";
import { usePaystackPayment } from "react-paystack";

const config = {
  reference: Math.random() * 1000,
  email: "ysf.dimari.yd@gamil.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_test_06174b7adfd2e36c321ed903db156f9edee8f827",
};

// you can call this function anything

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const Paystack = ({ onSuccess }) => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        type="submit"
        class=" form-control btn-primary add-btn  align cancel"
        onClick={(e) => {
          e.preventDefault();
          initializePayment(onSuccess, onClose);
        }}
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: "green",
          color: "white",
          fontWeight: "bold",
          width: "20%",
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Paystack;
