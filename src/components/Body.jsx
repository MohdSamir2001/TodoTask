import React, { useState, useEffect } from "react";
import MainContainer from "./MainContainer";
import TaskInformation from "../utils/TaskContext";

const Body = () => {
  // Initialize states with default empty arrays or values from localStorage
  const [tagName, setTag] = useState([]);
  const [color, setColor] = useState(1);
  const [todoTasks, setTodoTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("todoTasks")) || [];
  });
  const [doingTasks, setDoingTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("doingTasks")) || [];
  });

  const [doneTasks, setDoneTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("doneTasks")) || [];
  });

  // Effect to save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(todoTasks));
    localStorage.setItem("doingTasks", JSON.stringify(doingTasks));
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [todoTasks, doingTasks, doneTasks]); // Depend on the task arrays

  // Reset tags function
  const resetTags = () => {
    setTag([]);
    setColor(0);
  };

  return (
    <TaskInformation.Provider
      value={{
        tagName,
        resetTags,
        todoTasks,
        setTodoTasks,
        doingTasks,
        setDoingTasks,
        doneTasks,
        setDoneTasks,
        color,
        setColor,
        setTag,
      }}
    >
      <div className="relative promax:bg-transparent text-white min-h-screen">
        <MainContainer />
      </div>
    </TaskInformation.Provider>
  );
};

export default Body;
