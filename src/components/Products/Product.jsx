import React from "react";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <>
      <div className="shadow-xl 2xl:min-h-[500px]">
        <a className="" href="#">
          <img src={product.img} alt="" className="img-fluid" />
        </a>
        <div className="bg-orange-500 text-center py-2">
          <button className="text-white">ADD TO CART</button>
        </div>
        <div className="py-5 px-7">
          <p className="text-xs font-bold text-orange-500">
            {product?.category}
          </p>
          <div className="text-end mt-[-18px]">
            <button>
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
          <a className="text-xl font-bold" href="#">
            {product?.title}
          </a>
          <p className="text-end pt-3"> {product?.price}</p>
        </div>
      </div>
    </>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
