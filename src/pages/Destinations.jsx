import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Description from "../components/Description/Description";
import Guide from "../components/Destinations/Guide/Guide";
import ToggleCategories from "../components/Destinations/ToggleCategories/ToggleCategories";
import CTA from "../components/CTA/CTA";
import CTA2 from "../components/Destinations/CTA2/CTA2";
import NewsUpdates from "../components/Destinations/NewsUpdates/NewsUpdates";

const Destinations = () => {
  return (
    <>
      <div className="relative">
        <Breadcrumb></Breadcrumb>
        <div className="bottom-0 absolute text-white bg-black py-10 w-full block xl:flex border-b-8 border-orange-500">
          <p className="w-full xl:w-2/3 ps-5 lg:ps-48 uppercase text-lg lg:text-3xl font-bold">
            Our Premium Fishing Gear Collection
          </p>
          <div className="ps-5 lg:ps-32 me-2 lg:me-0 mt-6 lg:mt-0">
            <button className="border-white border-2 py-2 px-10 text-base font-semibold hover:bg-white hover:text-black hover:transition-all hover:duration-300 transition-all duration-300">
              SHOP FISHING GEAR
            </button>
          </div>
        </div>
      </div>

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
