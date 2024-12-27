import React from "react";
import logoImg from "../assets/OIP-removebg-preview.png";
const Logo = () => {
  return (
    <div className="w-fit overflow-hidden">
      <img className="bg-transparent w-8" src={logoImg} alt="" />
    </div>
  );
};

export default Logo;
