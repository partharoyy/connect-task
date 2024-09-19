import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

// TypeScript type for legend items
interface LegendItem {
  label: string;
  color: string;
}

// Donut Chart Data
const donutData = {
  labels: ["Number of active services", "New services added", "Services removed"],
  datasets: [
    {
      data: [60, 30, 10], // Example values
      backgroundColor: ["#3FE900", "#FFE603", "#FF0000"],
      hoverOffset: 4,
    },
  ],
};

// Line Graph Data with two smooth lines, no points shown
const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Service Trend 1",
      data: [200, 220, 210, 230, 240, 235, 245],
      borderColor: "#4bc0c0",
      fill: false,
      tension: 0.4, // Smooth lines
      pointRadius: 0, // Hides data points
    },
    {
      label: "Service Trend 2",
      data: [150, 170, 180, 200, 190, 210, 220],
      borderColor: "#FF6384",
      fill: false,
      tension: 0.4, // Smooth lines
      pointRadius: 0, // Hides data points
    },
  ],
};

// Legend Data
const legends: LegendItem[] = [
  { label: "Number of active services", color: "#3FE900" },
  { label: "New services added", color: "#FFE603" },
  { label: "Services removed", color: "#FF0000" },
];

// Line Chart Options
const lineOptions = {
  scales: {
    x: {
      grid: {
        display: false, // No grid lines on x-axis
      },
      ticks: {
        // Markers for each x-axis point
        callback: function (value: any, index: any, values: any) {
          return index % 1 === 0 ? value : ""; // Show markers for every axis point
        },
      },
    },
    y: {
      grid: {
        display: false, // No grid lines on y-axis
      },
      ticks: {
        // Markers for each y-axis point
        callback: function (value: any, index: any, values: any) {
          return index % 1 === 0 ? value : ""; // Show markers for every axis point
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Hide the legend for the line chart
    },
  },
};

export default function ServiceOfferings() {
  return (
    <div className='p-6 mt-4 rounded-xl bg-white'>
      <div className='flex flex-wrap md:flex-nowrap justify-between items-start'>
        {/* Donut Chart - 30% width */}
        <div className='w-full md:w-1/3 p-4'>
          <Doughnut data={donutData} options={{ plugins: { legend: { display: false } } }} />
        </div>

        {/* Line Graph - 70% width */}
        <div className='w-full md:w-2/3 p-4'>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>

      {/* Common Legend Below Both Charts */}
      <div className='flex flex-wrap gap-4 mt-4'>
        {legends.map((legend, index) => (
          <div key={index} className='flex items-center space-x-2 w-full sm:w-auto'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: legend.color }} />
            <span className='text-[14px] font-medium text-[#808080]'>{legend.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
