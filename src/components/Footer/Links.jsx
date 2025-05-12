import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router";

const Links = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div className="pb-1" key={item?.id}>
          <Link className="text-white text-sm font-medium">{item?.link}</Link>
        </div>
      ))}
    </>
  );
};

Links.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Links;
