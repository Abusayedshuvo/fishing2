import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Adventure = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("/adventure.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <div className=" py-0 lg:pb-10 pt-20">
        <p className="text-3xl lg:text-[53px] font-bold text-center veneer pb-4">
          EQUIP YOUR SELF FOR YOUR NEXT JOURNEY
        </p>
        <hr className="w-20 mx-auto border-orange-500 border-t-4" />
        <div className="bg-[url('../src/assets/bg-02312.png')] xl:h-[1000px] 2xl:h-[1150px] bg-no-repeat bg-cover mx-auto pt-10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10  gap-8">
              {products.map((product) => (
                <SingleCard key={product.id} product={product}></SingleCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adventure;
