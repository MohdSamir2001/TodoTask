import React from "react";
import AddTaskBar from "./AddTaskBar";
import ThreeSections from "./ThreeSections";

const MainContainer = () => {
  return (
    <div className="bg-blue-950  bg-opacity-80 p-8  h-fit ">
      <AddTaskBar />
      <ThreeSections />
    </div>
  );
};

export default MainContainer;
