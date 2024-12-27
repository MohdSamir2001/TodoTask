import React from "react";
import { medList } from "../utils/medList";
const MedicineCard = ({ medicine }) => {
  const { Product_Name, MRP, img, Packi } = medicine;
  // PCode Packi MRP img Product_Name
  return (
    <div className="w-64 rounded-md overflow-hidden border-2  bg-gray-300">
      <img className="w-full object-center h-32" src={img} alt="" />
      <div className="relative gap-2">
        <div className="px-2 border-t-2 border-gray-700">
          <h1 className="font-semibold">{Product_Name}</h1>
          <h1 className="font-semibold text-sm">{Packi}</h1>
          <h1 className="font-semibold text-sm">{"Rs " + MRP}</h1>
        </div>
        <div>
          <button className="px-4 font-semibold absolute top-5 right-1 py-2 bg-black text-white bg-opacity-60 rounded-lg">
            Add To Box
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
