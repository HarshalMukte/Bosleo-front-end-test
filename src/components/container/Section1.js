import React from "react";
import { chartData, chartOptions } from "./data";
//for chart
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
  Tooltip
);

const Section1 = () => {
  return (
    <div className="section1">
      <div className="movieImage">
        <img src="./images/movieImage.png" alt="movieImage" />
      </div>
      <div className="lineGraph">
        <div className="tableTitle">
          <div className="title">
            <h3>Average watch time</h3>
            <p>This tracks the average watch by users every month</p>
          </div>
            <div className="graphMenuIcon">
              <svg
                width="4"
                height="17"
                viewBox="0 0 4 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.96875 8.5C3.96875 8.88938 3.85328 9.27002 3.63695 9.59378C3.42062 9.91754 3.11315 10.1699 2.75341 10.3189C2.39366 10.4679 1.99782 10.5069 1.61592 10.4309C1.23402 10.355 0.883219 10.1675 0.607884 9.89212C0.33255 9.61679 0.145044 9.26599 0.0690798 8.88409C-0.00688475 8.50219 0.032103 8.10634 0.181113 7.74659C0.330123 7.38685 0.582462 7.07938 0.906221 6.86305C1.22998 6.64672 1.61062 6.53125 2 6.53125C2.52157 6.5331 3.02126 6.74112 3.39007 7.10993C3.75888 7.47874 3.96689 7.97843 3.96875 8.5ZM2 4.84375C2.38938 4.84375 2.77002 4.72829 3.09378 4.51196C3.41754 4.29563 3.66988 3.98815 3.81888 3.62841C3.96789 3.26867 4.00688 2.87282 3.93092 2.49092C3.85495 2.10902 3.66745 1.75822 3.39211 1.48288C3.11678 1.20755 2.76598 1.02004 2.38408 0.94408C2.00218 0.868115 1.60633 0.907103 1.24659 1.05611C0.88685 1.20512 0.579374 1.45746 0.363045 1.78122C0.146716 2.10498 0.0312511 2.48562 0.0312511 2.875C0.0331039 3.39658 0.24112 3.89626 0.609931 4.26507C0.978742 4.63388 1.47843 4.8419 2 4.84375ZM2 12.1563C1.61062 12.1563 1.22998 12.2717 0.906221 12.488C0.582462 12.7044 0.330123 13.0119 0.181113 13.3716C0.032103 13.7313 -0.00688475 14.1272 0.0690798 14.5091C0.145044 14.891 0.33255 15.2418 0.607884 15.5171C0.883219 15.7925 1.23402 15.98 1.61592 16.0559C1.99782 16.1319 2.39366 16.0929 2.75341 15.9439C3.11315 15.7949 3.42062 15.5425 3.63695 15.2188C3.85328 14.895 3.96875 14.5144 3.96875 14.125C3.96689 13.6034 3.75888 13.1037 3.39007 12.7349C3.02126 12.3661 2.52157 12.1581 2 12.1563Z"
                  fill="black"
                />
              </svg>
            </div>
        </div>
        <div className="chartContainer">
        <Line className="graph" data={chartData} options={chartOptions}></Line>
        </div>
      </div>
    </div>
  );
};

export default Section1;
