import { createContext } from "react";

const TaskInformation = createContext({
  todoTasks: [],
  doingTasks: [],
  doneTasks: [],
  tagName: [],
  color: 1,
  setTodoTasks: () => {},
  setDoingTasks: () => {},
  setDoneTasks: () => {},
  setTag: () => {},
  setColor: () => {},
  resetTags: () => {},
});

export default TaskInformation;
