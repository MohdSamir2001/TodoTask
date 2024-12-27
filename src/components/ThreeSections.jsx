import React, { useContext } from "react";
import Sections from "./Sections";
import TaskInformation from "../utils/TaskContext";

const ThreeSections = () => {
  const { todoTasks, doingTasks, doneTasks } = useContext(TaskInformation);
  return (
    <div className="mt-2 w-full">
      <div className="flex gap-2">
        <Sections title={"Today"} tasks={todoTasks} />
        <Sections title={"InWeek"} tasks={doingTasks} />
        <Sections title={"InMonth"} tasks={doneTasks} />
      </div>
    </div>
  );
};

export default ThreeSections;
