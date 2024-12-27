import React from "react";
import AddTaskBar from "./AddTaskBar";
import ThreeSections from "./ThreeSections";

const MainContainer = () => {
  return (
    <div className="bg-blue-950 promax:bg-blue min-w-[480px] promax:w-full min-h-[1040px]  bg-opacity-80 promax:p-8 p-2  promax:h-fit ">
      <AddTaskBar />
      <ThreeSections />
    </div>
  );
};

export default MainContainer;
