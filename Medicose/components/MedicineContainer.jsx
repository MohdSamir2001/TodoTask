import React from "react";
import MedicineCard from "./MedicineCard";
import { medList } from "../utils/medList";
const MedicineContainer = () => {
  return (
    <div className="px-4 ml-16 mb-4 flex flex-wrap gap-4">
      {medList.map((medicine) => {
        return <MedicineCard medicine={medicine} />;
      })}
    </div>
  );
};

export default MedicineContainer;
