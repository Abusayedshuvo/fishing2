import React from "react";
import Breadcrumb from "../components/Destinations/Breadcrumb/Breadcrumb";
import Description from "../components/Destinations/Description/Description";
import Guide from "../components/Destinations/Guide/Guide";
import ToggleCategories from "../components/Destinations/ToggleCategories/ToggleCategories";
import CTA from "../components/CTA/CTA";
import CTA2 from "../components/Destinations/CTA2/CTA2";
import NewsUpdates from "../components/Destinations/NewsUpdates/NewsUpdates";

const Destinations = () => {
  return (
    <>
      <Breadcrumb></Breadcrumb>
      <Description></Description>
      <Guide></Guide>
      <ToggleCategories></ToggleCategories>
      <CTA2></CTA2>
      <NewsUpdates></NewsUpdates>
      <CTA></CTA>
    </>
  );
};

export default Destinations;
