import React from "react";
import BgImage from "./BgImage";
import Navbar from "./Navbar";
import CategoryBar from "./CategoryBar";
import AdContainer from "./AdContainer";
import MedicineContainer from "./MedicineContainer";
const Medicose = () => {
  return (
    <div className="relative  z-10 w-full text-black">
      <div className="w-full">
        <Navbar />
        <CategoryBar />
        <AdContainer />
        <MedicineContainer />
      </div>
    </div>
  );
};

export default Medicose;
