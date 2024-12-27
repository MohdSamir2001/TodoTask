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
      <div className="flex flex-wrap promax:flex-nowrap items-center">
        <input
          ref={inputRef}
          className="promax:p-[0.627%] w-[470px] p-3 text-2xl promax:rounded-none rounded-md  bg-slate-50 outline-none text-black promax:w-4/12 font-semibold "
          type="text"
          placeholder="Add Task In Todo List"
        />
        <DropDownMenu statusRef={statusRef} />
        <button
          type="submit"
          className="cursor-pointer rounded-md promax:rounded-none  text-2xl bg-gray-900 ml-2 mt-2 promax:mt-0   promax:bg-blue promax:ml-4 promax:bg-opacity-50 text-white promax:border-b-2  px-2 outline-none  py-2 font-semibold"
        >
          + Add Task
        </button>
      </div>
      <div className="promax:w-8/12  w-[465px] flex-wrap mt-2 flex gap-2">
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
