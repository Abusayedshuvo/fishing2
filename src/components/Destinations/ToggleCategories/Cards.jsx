import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";

const Cards = ({ card }) => {
  const { img, country, title, services } = card;
  return (
    <>
      <div className="shadow-xl hover:-translate-y-2 hover:transition-all hover:duration-300 transition-all duration-300">
        <Link className="" href="#">
          <img src={img} alt="" className="img-fluid" />
        </Link>

        <div className="py-5 px-7">
          <p className="text-xs font-bold text-orange-500 uppercase">
            {country}
          </p>
          <div className="text-end mt-[-18px]">
            <button>
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
          <Link className=" font-bold hover:text-orange-500 hover:transition-all hover:duration-300 transition-all duration-300">
            {title}
          </Link>
          <div className="flex pt-3" href="#">
            {services?.map((item, index) => (
              <div key={index} className="pe-3">
                <img src={item.image} alt="" className="img-fluid w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
  card: PropTypes.object,
};
export default Cards;
