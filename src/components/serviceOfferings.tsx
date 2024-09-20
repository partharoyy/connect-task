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

// Line Graph Data with two smooth lines, now with point markers
const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Month labels
  datasets: [
    {
      label: "Service Trend 1",
      data: [10, 22, 30, 40, 20, 50, 30, 20, 40, 70, 60, 80], // Example values for 12 months
      borderColor: "#FFE603",
      fill: false,
      tension: 0.4, // Smooth lines
      pointRadius: 0, // Set data point markers
    },
    {
      label: "Service Trend 2",
      data: [20, 40, 50, 60, 30, 20, 30, 40, 50, 70, 60, 100], // Example values for 12 months
      borderColor: "#3FE900",
      fill: false,
      tension: 0.4, // Smooth lines
      pointRadius: 0, // Set data point markers
    },
  ],
};

// Legend Data
const legends: LegendItem[] = [
  { label: "Number of active services", color: "#3FE900" },
  { label: "New services added", color: "#FFE603" },
  { label: "Services removed", color: "#FF0000" },
];

const lineOptions = {
  scales: {
    x: {
      type: "category", // Ensure x-axis type is category
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Ensure labels are set
      grid: {
        display: false, // No grid lines on x-axis
      },
      ticks: {
        autoSkip: false, // Prevent auto-skipping of ticks
        beginAtZero: false,
      },
      offset: true,
    },
    y: {
      grid: {
        display: false, // No grid lines on y-axis
      },
      ticks: {
        callback: function (value: any, index: any, values: any) {
          return index % 1 === 0 ? value : ""; // Show markers for every axis point
        },
        beginAtZero: false,
      },
      offset: true,
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
    <div className='p-6 mt-4 rounded-xl bg-white '>
      <p className='text-[#0D0D0D] text-[20px] font-bold mb-4'>Service offerings</p>
      <div className='flex flex-wrap md:flex-nowrap justify-between items-start h-[400px]'>
        {/* Donut Chart - 30% width */}
        <div className='w-full md:w-[30%] p-4'>
          <Doughnut data={donutData} options={{ plugins: { legend: { display: false } } }} />
        </div>

        {/* Line Graph - 70% width */}
        <div className='w-full p-2 h-[400px]'>
          {" "}
          {/* Set a fixed height for the parent */}
          <div className='w-full h-full'>
            {" "}
            {/* Ensure the child takes full width and height */}
            <Line data={lineData} options={lineOptions} />
          </div>
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
