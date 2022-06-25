import React from "react";
import StackedBarChart from "../dashboard/StackedBarChart";

import {
  BarChartDataX,
  BarChartDataY,
  BarChartDataLabels,
} from "../../data/dummy";

// chart config options
const chartOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  layout: {
    padding: {
      top: 20,
    },
  },
  elements: {
    bar: {},
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

const Volume = () => {
  return (
    <div className="px-4 py-4 rounded-lg bg-app-d800">
      <h2 className="text-base text-white">Level</h2>
      <StackedBarChart
        dataX={BarChartDataX}
        dataY={BarChartDataY}
        dataLabel={BarChartDataLabels}
        chartOptions={chartOptions}
      />
    </div>
  );
};

export default Volume;
