import React from "react";
import { numberFormatter } from "../../helper/numberFormatter";
import CountUp from "react-countup";

const SalesCard = ({ cardData, icon, cardTitle, color }) => {
  return (
    <div className="w-36 h-36 p-3 rounded-lg bg-app-d900">
      <span className={`text-[35px] text-${color}`}>{icon}</span>
      <p className="py-2 font-semibold text-lg">
        <span>{cardData.prefix}</span>
        {numberFormatter(cardData.value, 1)}
      </p>
      <p className="">{cardTitle}</p>
      <p className={`mt-[2px] text-[10px] text-${color}`}>
        <span>{cardData.summary > 0 ? "+" : ""}</span>
        <CountUp start={0} end={cardData.summary} duration={0.5} />{" "}
        <span className="ml-[-2.5px]">% from yesterday</span>
      </p>
    </div>
  );
};

export default SalesCard;
