import React from "react";
import Filters from "../Filters/Filters";

const ProductLayout = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 my-20 ">
        <div className="col-span-12 lg:col-span-3 px-5 lg:px-0">
          <div className="bg-[#f1f1f1] p-6">
            <Filters></Filters>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9 px-5 lg:px-0">
          <div className="flex justify-between">
            <p>29 products</p>
            <select className="select select-bordered w-full max-w-56">
              <option selected>Price ascending</option>
              <option>Title descending</option>
              <option>Created ascending</option>
              <option>Manual </option>
              <option>Best selling </option>
              <option>Title ascending</option>
              <option>Price descending </option>
              <option>Created descending </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
