import Product from "../Products/Product";
import Filters from "./Filters";
import React, { useEffect, useState } from "react";

const ProductLayout = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
          <div className="grid grid-cols-3 gap-5">
            {products.map((product) => (
              <Product
                className="pb-10"
                key={product.id}
                product={product}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
