import React from "react";
import { SalesCard } from "../dashboard";
import {
  BiBarChartSquare,
  BiUserPlus,
  BiShoppingBag,
  BiClipboard,
} from "react-icons/bi";

import { appColor, cardTitle, cardData } from "../../data/dummy";

let icons = [
  <BiBarChartSquare />,
  <BiClipboard />,
  <BiShoppingBag />,
  <BiUserPlus />,
];

const SaleSummary = () => {
  return (
    <div className="col-span-2 px-4 py-4 rounded-lg bg-app-d800">
      <h2 className="text-base text-white">Today's Sales</h2>
      <p className="text-[10px] text-app-d400">Sales Summary</p>
      <div className="flex justify-between items-center pt-4">
        {cardData.map((data, index) => {
          return (
            <SalesCard
              key={data.id}
              cardData={data}
              cardTitle={cardTitle[index]}
              icon={icons[index]}
              color={appColor[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SaleSummary;
