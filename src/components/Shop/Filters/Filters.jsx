import React from "react";
import { FaCaretDown } from "react-icons/fa6";

const Filters = () => {
  return (
    <div>
      <div className="flex items-center gap-1">
        <FaCaretDown /> <p className="text-sm font-bold uppercase">Price</p>
      </div>
    </div>
  );
};

export default Filters;
