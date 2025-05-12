import React from "react";
import CartDetails from "../components/Cart/CartDetails";
import CTA from "../components/CTA/CTA";
import Products from "../components/Cart/Products";

const Cart = () => {
  return (
    <>
      <CartDetails></CartDetails>
      <Products></Products>
      <CTA></CTA>
    </>
  );
};

export default Cart;
