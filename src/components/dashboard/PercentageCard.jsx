import React from "react";
import CountUp from "react-countup";

const PercentageCard = ({ value, color }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`flex justify-center items-center w-9 h-5 border-[1px] border-${color} rounded-md bg-${color} bg-opacity-20`}
      >
        <p className={`text-${color}`}>
          <CountUp start={0} end={value} duration={0.8} />
          <span className={`text-${color}`}>%</span>
        </p>
      </div>
    </div>
  );
};

export default PercentageCard;
