import React from "react";
import { categoryItems } from "../utils/constant";
const CategoryBar = () => {
  return (
    <div className="">
      <div className="flex  justify-center gap-10">
        {categoryItems.map((item) => {
          return (
            <div>
              <div className="item py-2 font-semibold cursor-pointer">
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;
