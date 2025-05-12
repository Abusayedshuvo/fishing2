import React, { useEffect, useState } from "react";
import SingleLocation from "./SingleLocation";

const Location = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("/location.json")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);
  console.log(locations);
  return (
    <>
      <div className="bg-[#f1f1f1] py-14">
        <div className="container py-10 mx-auto px-5 xl:px-0">
          <p className="text-3xl xl:text-[53px] font-bold text-center pb-4 veneer">
            OUR LOCATION
          </p>
          <hr className="w-20 border-orange-500 border-t-4 mx-auto" />
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2   gap-5 pt-10">
            {locations.map((location) => (
              <SingleLocation
                key={location.id}
                location={location}
              ></SingleLocation>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
