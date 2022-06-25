import React from "react";
import { LineChart } from "../dashboard";

import {
  LineChartDataX,
  LineChartDataY,
  LineChartDataLabels,
} from "../../data/dummy";

const chartOptions = {
  responsive: true,
  elements: {
    line: { borderWidth: 2, fill: true },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 20,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

const MonthToDate = () => {
  return (
    <div className="px-4 py-4 rounded-lg bg-app-d800">
      <h2 className="text-base text-white">Month to Date</h2>
      <LineChart
        dataX={LineChartDataX}
        dataY={LineChartDataY}
        dataLabel={LineChartDataLabels}
        chartOptions={chartOptions}
      />
    </div>
  );
};

export default MonthToDate;
