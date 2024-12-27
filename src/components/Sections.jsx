import React from "react";
import TaskColumn from "./TaskColumn";

const Sections = ({ title, tasks }) => {
  return (
    <div className="w-full flex flex-col">
      <div className=" p-2 bg-gradient-to-t from-yellow-800 font-semibold text-center border-b-2">
        {title}
      </div>
      <TaskColumn tasks={tasks} title={title} />
    </div>
  );
};

export default Sections;
