import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router";

const SingleCard = ({ product }) => {
  return (
    <>
      <div className="pt-3">
        <Link to="#">
          <img src={product.img} alt="" className="img-fluid" />
          <div className="bg-gray-50 mb-5 px-5 py-3">
            <p className="font-bold text-xl">{product.title}</p>
            <div className="font-bold text-orange-500 text-sm pt-2">
              Shop Now
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
SingleCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default SingleCard;
