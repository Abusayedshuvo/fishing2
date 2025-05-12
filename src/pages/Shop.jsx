import React from "react";
import Breadcrumb from "../components/Destinations/Breadcrumb/Breadcrumb";
import Description from "../components/Destinations/Description/Description";
import ProductLayout from "../components/Shop/ProductLayout/ProductLayout";
import CTA from "../components/CTA/CTA";

const Shop = () => {
  return (
    <>
      <Breadcrumb></Breadcrumb>
      <Description></Description>
      <ProductLayout></ProductLayout>
      <CTA></CTA>
    </>
  );
};

export default Shop;
