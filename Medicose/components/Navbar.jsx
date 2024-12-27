import React from "react";
import Logo from "./Logo";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="flex    justify-between items-center p-4 w-full">
      <div className="flex gap-1  items-center">
        <Logo />
        <h1 className="py-2  font-semibold">MEDICOSE</h1>
      </div>
      <div className="w-4/12 flex gap-1">
        <input
          placeholder="Search medicine by name , salt and usage"
          className="p-2 outline-none rounded-md w-full bg-gray-200 font-semibold  "
          type="text"
        />
        <NavButton name={"Search"} />
      </div>
      <div className="flex gap-2">
        <NavButton name={"Book Appointment"} />
        <NavButton name={"Upload Prescription"} />
        <NavButton name={"Medbox"} />
      </div>
    </div>
  );
};

export default Navbar;
