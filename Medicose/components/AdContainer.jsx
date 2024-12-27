import React, { useState } from "react";
import AdCard from "./AdCard";
import { imageArray } from "../utils/images";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const AdContainer = () => {
  const [imageItem, setImageItem] = useState(0);
  const handleRightButton = () => {
    if (imageItem < 2) {
      setImageItem((prev) => prev + 1);
    }
  };
  const handleLeftButton = () => {
    if (imageItem > 0) {
      setImageItem((prev) => prev - 1);
    }
  };
  return (
    <div className="w-full transition-all py-4 flex">
      <button onClick={handleLeftButton} className=" px-4">
        <HiChevronLeft className="scale-[300%]" />
      </button>
      <AdCard image={imageArray[imageItem]} />
      <button onClick={handleRightButton} className=" px-4">
        <HiChevronRight className="scale-[300%]" />
      </button>
    </div>
  );
};

export default AdContainer;
