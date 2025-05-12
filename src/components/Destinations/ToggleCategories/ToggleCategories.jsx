import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cards from "./Cards";
import addImg from "../../../assets/Egdorfs_Extra7.jpg";
import { Link } from "react-router";

const ToggleCategories = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/toggleCategories.json")
      .then((res) => res.json())
      .then((data) => setCards(data.data));
  }, []);

  return (
    <>
      <Tabs>
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 ">
          <div className="col-span-12 lg:col-span-3 px-5 lg:px-0">
            <div className="bg-[#f1f1f1] p-6">
              <p className="text-2xl font-bold uppercase mb-8">
                Toggle Between Categories:
              </p>
              <TabList className="flex flex-col gap-5">
                <Tab className="btn-one  uppercase"> Lodges</Tab>
                <Tab className="btn-one  uppercase">Trip</Tab>
              </TabList>
              <div className="shadow-lg mt-5 bg-white">
                <img src={addImg} alt="" />
                <div className="p-4">
                  <p className="text-xl font-bold mb-3">
                    A popular species for beach and estuary fishing.
                  </p>
                  <p>
                    {`  Australia boasts an incredible diversity of marine life,
                    with more than 4,000 species inhabiting its waters. Among
                    these are numerous large, powerful, and thrilling fish that
                    provide an exhilarating challenge for fly rod enthusiasts. `}
                  </p>
                  <div className="mt-4">
                    <Link className="text-orange-500 text-lg font-bold hover:underline">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 px-5 lg:px-0">
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cards.map((card, index) => (
                  <Cards key={index} card={card}></Cards>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cards.slice(2, 8).map((card, index) => (
                  <Cards key={index} card={card}></Cards>
                ))}
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default ToggleCategories;
