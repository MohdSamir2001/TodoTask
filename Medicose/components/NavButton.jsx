import React from "react";

const NavButton = ({ name }) => {
  return (
    <div>
      <button className="p-2 rounded-md bg-gray-500 font-semibold bg-opacity-40 ">
        {name}
      </button>
    </div>
  );
};

export default NavButton;
