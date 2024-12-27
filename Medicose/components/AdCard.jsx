import React from "react";
const AdCard = ({ image }) => {
  return (
    <div className="flex w-full">
      <img className="h-72 w-full" src={image} alt="" />
    </div>
  );
};

export default AdCard;
