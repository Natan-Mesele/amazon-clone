import React from "react";
import "./Checkout.css";
import Subtotal from '../components/Subtotal'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Pay_Balance/apay_page_mobile_new_logo.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
