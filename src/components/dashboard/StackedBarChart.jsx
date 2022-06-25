import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = ({ dataX, dataY, dataLabel, chartOptions }) => {
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
          backgroundColor: "#A9DFD8",
        },
        {
          data: dataY,
          backgroundColor: "#2B2B36",
        },
      ],
    });
  }, [dataX, dataY, dataLabel]);

  return (
    <>
      <Bar options={chartOptions} data={data} />
      <div className="flex justify-around mt-3 text-app-d400 text-xs">
        <div className="flex items-center space-x-3">
          <span className="w-[10px] h-[10px] rounded-full bg-app-green"></span>
          <p>Volume</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="w-[10px] h-[10px] rounded-full bg-app-d700"></span>
          <p>Service</p>
        </div>
      </div>
    </>
  );
};

export default StackedBarChart;
