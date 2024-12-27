import React, { useEffect, useState } from "react";
import { useContext } from "react";
import TaskInformation from "../utils/TaskContext";

const PredefindTag = ({ title }) => {
  const { setTag, tagName, color, setColor } = useContext(TaskInformation);
  const [bgColor, setBgColor] = useState(0);
  const handleTag = () => {
    if (!tagName.includes(title)) {
      setTag([...tagName, title]);
      setBgColor(1);
      setColor(1);
    }
  };
  useEffect(() => {
    if (color === 0) {
      setBgColor(0);
    }
  }, [color]);
  return (
    <div
      onClick={handleTag}
      className={`${
        bgColor === 1 ? "bg-red-900" : ""
      } cursor-pointer px-2 border-2 font-semibold text-center`}
    >
      {title}
    </div>
  );
};

export default PredefindTag;
