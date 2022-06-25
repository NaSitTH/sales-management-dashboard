import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { numberFormatter } from "../../helper/numberFormatter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = ({ dataX, dataY, dataLabel, chartOptions }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    setData({
      labels: dataLabel,
      datasets: [
        {
          data: dataX,
          pointBackgroundColor: "rgba(169, 223, 216, .8)",
          borderColor: "rgba(169, 223, 216, .8)",
          backgroundColor: "rgba(169, 223, 216, .2)",
        },
        {
          data: dataY,
          pointBackgroundColor: "rgba(242, 200, 237, .8)",
          borderColor: "rgba(242, 200, 237, .8)",
          backgroundColor: "rgba(242, 200, 237, .2)",
        },
      ],
    });
  }, [dataX, dataY, dataLabel]);

  return (
    <>
      <Line options={chartOptions} data={data} />
      <div className="flex justify-around mt-3 pt-3 border-t-[1px] border-app-d600 text-app-d400 text-xs">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center space-x-3">
            <span className="w-[10px] h-[10px] rounded-full bg-app-green"></span>
            <p>Last Month</p>
          </div>
          <p className="mt-2 text-sm text-white">
            ${numberFormatter(sum(dataX), 2)}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-3">
            <span className="w-[10px] h-[10px] rounded-full bg-app-pink"></span>
            <p>This Month</p>
          </div>
          <p className="mt-2 text-sm text-white">
            ${numberFormatter(sum(dataY), 2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default LineChart;

const sum = (arr) => {
  return arr.reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
};
