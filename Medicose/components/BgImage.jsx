import React from "react";
import { BGIMG_URL } from "../utils/constant";

const BgImage = () => {
  return (
    <div>
      <img
        className="w-screen -z-50 h-screen fixed"
        src={BGIMG_URL}
        alt="bg-image"
      />
    </div>
  );
};

export default BgImage;
