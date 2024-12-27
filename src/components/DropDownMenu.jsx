import React from "react";

const DropDownMenu = ({ statusRef }) => {
  return (
    <div>
      <select
        ref={statusRef}
        className="cursor-pointer ml-2 bg-transparent bg-opacity-50 text-white border-b-2  px-1 outline-none  py-2 font-semibold"
      >
        <option
          className="bg-blue-950 font-semibold bg-opacity-85"
          value="status"
          key="1"
        >
          Status
        </option>
        <option
          className="bg-blue-950 font-semibold bg-opacity-85"
          value="Today"
          key="2"
        >
          Today
        </option>
        <option
          className="bg-blue-950 font-semibold bg-opacity-85"
          value="InWeek"
          key="3"
        >
          InWeek
        </option>
        <option
          className="bg-blue-950 font-semibold bg-opacity-85"
          value="InMonth"
          key="4"
        >
          InMonth
        </option>
      </select>
    </div>
  );
};

export default DropDownMenu;
