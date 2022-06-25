import React from "react";

const ProgressBar = ({ value, color, size }) => {
  return (
    <div
      style={{ width: `${size}px` }}
      className="relative top-2 h-1 animate-progress"
    >
      <span className="absolute w-full h-1 rounded-md bg-app-d700"></span>
      <span
        style={{ width: `${value}%` }}
        className={` absolute h-1 rounded-md bg-${color}`}
      ></span>
    </div>
  );
};

export default ProgressBar;
