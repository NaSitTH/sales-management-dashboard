import React from "react";
import { ProgressBar, PercentageCard } from "../dashboard";
import { appColor, topProductData } from "../../data/dummy";

const TopProduct = () => {
  return (
    <div className="col-span-2 py-4 rounded-lg bg-app-d800">
      <h2 className="px-4 text-base text-white">Top Products</h2>
      <table className="min-w-full text-center">
        <thead className="px-4 border-b-[0.5px] border-app-d700 text-sm text-app-d500">
          <tr className="grid grid-cols-8 my-3">
            <th className="col-span-1">#</th>
            <th className="col-span-3 text-left">Name</th>
            <th className="col-span-3 text-left">Popularity</th>
            <th className="col-span-1">Sold</th>
          </tr>
        </thead>
        <tbody className="text-xs text-white">
          {topProductData.map((data, index) => {
            return (
              <tr
                key={data.id}
                className="grid grid-cols-8 my-3 pb-2 border-b-[0.5px] border-app-d700"
              >
                <td className="col-span-1">{data.id}</td>
                <td className="col-span-3 text-left">{data.name}</td>
                <td className="col-span-3 text-left">
                  <ProgressBar
                    value={data.value}
                    color={appColor[index]}
                    size={200}
                  />
                </td>
                <td className="col-span-1">
                  <PercentageCard value={data.value} color={appColor[index]} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopProduct;
