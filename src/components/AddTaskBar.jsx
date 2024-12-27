import React, { useContext, useRef } from "react";
import DropDownMenu from "./DropDownMenu";
import PredefindTag from "./PredefindTag";
import TaskInformation from "../utils/TaskContext";

const AddTaskBar = () => {
  const {
    tagName,
    setTodoTasks,
    todoTasks,
    doingTasks,
    doneTasks,
    setDoingTasks,
    setDoneTasks,
    resetTags,
  } = useContext(TaskInformation);
  const inputRef = useRef(null);
  const statusRef = useRef(null);
  const handleSubmit = (data) => {
    data.preventDefault();
    if (inputRef.current.value.trim()) {
      if (statusRef.current.value === "Today") {
        setTodoTasks([
          ...todoTasks,
          {
            task: inputRef.current.value,
            status: statusRef.current.value,
            tagName: tagName,
          },
        ]);
      } else if (statusRef.current.value === "InWeek") {
        setDoingTasks([
          ...doingTasks,
          {
            task: inputRef.current.value,
            status: statusRef.current.value,
            tagName: tagName,
          },
        ]);
      } else if (statusRef.current.value === "InMonth") {
        setDoneTasks([
          ...doneTasks,
          {
            task: inputRef.current.value,
            status: statusRef.current.value,
            tagName: tagName,
          },
        ]);
      }
    }
    inputRef.current.value = "";
    resetTags();
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex items-center">
        <input
          ref={inputRef}
          className="p-[0.627%]  bg-slate-50 outline-none text-black w-4/12 font-semibold "
          type="text"
          placeholder="Add Task In Todo List"
        />
        <DropDownMenu statusRef={statusRef} />
        <button
          type="submit"
          className="p-2 ml-8 bg-neutral-700 font-semibold rounded-md"
        >
          + Add Task
        </button>
      </div>
      <div className="w-8/12 mt-2 flex gap-2">
        <PredefindTag title={"Apptitude"} />
        <PredefindTag title={"React"} />
        <PredefindTag title={"DSA"} />
        <PredefindTag title={"English"} />
        <PredefindTag title={"Interview"} />
        <PredefindTag title={"Java"} />
      </div>
    </form>
  );
};

export default AddTaskBar;
