import React from "react";
import PropTypes from "prop-types";

const Team = ({ team }) => {
  return (
    <>
      <a href="#">
        <img
          src={team?.img}
          alt={team?.name}
          className="img-fluid w-28 rounded-full border-orange-500 border-4 mx-auto"
        />
        <div className="pt-2 ps-2">
          <p className="font-bold text-xl"> {team?.name} </p>
          <p className="font-medium text-xs"> {team?.title} </p>
        </div>
      </a>
    </>
  );
};

Team.propTypes = {
  team: PropTypes.object.isRequired,
};

export default Team;
