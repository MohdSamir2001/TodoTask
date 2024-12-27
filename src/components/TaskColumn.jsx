import React, { useContext, useState } from "react";
import PredefindTag from "./PredefindTag";
import deletIcon from "../assets/delete_icons.jpg";
import TaskInformation from "../utils/TaskContext";

const TaskColumn = ({ tasks, title }) => {
  const { setTodoTasks, setDoingTasks, setDoneTasks } =
    useContext(TaskInformation);

  const [fadeIndex, setFadeIndex] = useState(null); // State to track the task being deleted

  const handleDelete = (newIndex) => {
    setFadeIndex(newIndex); // Set the index of the task to fade-out
    setTimeout(() => {
      // Remove the task from the list after transition
      const remainingTasks = tasks.filter((_, index) => index !== newIndex);
      if (title === "Today") {
        setTodoTasks(remainingTasks);
      } else if (title === "InWeek") {
        setDoingTasks(remainingTasks);
      } else if (title === "InMonth") {
        setDoneTasks(remainingTasks);
      }
      setFadeIndex(null); // Reset the fade index after deletion
    }, 300); // Timeout matches the transition duration
  };

  return tasks.length === 0 ? (
    " "
  ) : (
    <div className="w-full  mt-2 rounded-md">
      {tasks.map((task, index) => (
        <div
          key={index}
          style={{
            opacity: fadeIndex === index ? 0 : 1, // Fade-out effect
            transition: "opacity 0.3s ease-in-out", // Simple fade transition
          }}
          className="mt-2 p-2 bg-gradient-to-t from-gray-700 rounded-md bg-black bg-opacity-90"
        >
          <h1 className="font-semibold  overflow-x-hidden text-2xl promax:text-base">
            {task.task}
          </h1>
          <div className="flex justify-between flex-wrap  mt-2 items-center">
            <div className="flex  gap-2">
              {task.tagName.map((task, tagIndex) => (
                <PredefindTag key={tagIndex} title={task} />
              ))}
            </div>
            <div onClick={() => handleDelete(index)} className="cursor-pointer">
              <img
                className="promax:w-8 w-12 rounded-md"
                src={deletIcon}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskColumn;
