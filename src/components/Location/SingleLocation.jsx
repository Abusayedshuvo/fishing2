import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router";

const SingleLocation = ({ location }) => {
  return (
    <>
      <Link>
        <img src={location?.img} alt="" className="img-fluid" />
        <div className="bg-white p-5">
          <div className="text-2xl md:text-3xl font-bold">
            {location?.title}
          </div>
          <div className="font-bold text-orange-500 md:pb-3">
            {location?.text}
          </div>
        </div>
      </Link>
    </>
  );
};

SingleLocation.propTypes = {
  location: PropTypes.object.isRequired,
};

export default SingleLocation;
