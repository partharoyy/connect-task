import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { ApexOptions } from "apexcharts";
import ServiceProvidersRightGraph from "./serviceProvidersRightGraph";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

const PerformanceMatrix: React.FC = () => {
  // Radial Bar Chart for Performance Metrics using ApexCharts
  const radialBarData = {
    series: [70, 88, 59], // These represent the percentage values for each metric
    options: {
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          size: 200,
          track: {
            background: "transparent", // Removes unfilled color part
          },
          dataLabels: {
            name: {
              fontSize: "16px",
              offsetY: -25,
              show: true, // Aligns the text labels near the origin
              color: "#000",
            },
            value: {
              fontSize: "18px",
              formatter: function (val: number) {
                return `${val}%`;
              },
              offsetY: 10, // Adjust position if needed
              show: true,
              color: "#000",
            },
            total: {
              show: false, // Hide the total percentage in the center
            },
          },
          hollow: {
            background: "transparent", // Removes unfilled area
          },
          rounded: true, // Makes the bars rounded at the ends
        },
      },
      labels: ["Performance Metrics", "Feedback Summary", "Rating Trends"],
      colors: ["#039F00", "#EB8C00", "#ADD633"], // Colors for each metric
    } as ApexOptions, // Explicitly cast the object to ApexOptions type
  };

  return (
    <div className='mt-4 grid grid-cols-1 lg:grid-cols-[363px_1fr] gap-4 container'>
      {/* Radial Bar Chart for Performance Metrics */}
      <div className='bg-white p-6 rounded-xl flex-none relative'>
        <h2 className='text-xl font-semibold mb-4'>Performance Metrics & Feedback</h2>
        <div className='absolute w-full text-right top-20 right-[11.5rem]'>
          <ul>
            {radialBarData.options.labels.map((label, index) => (
              <li key={index} className='text-[#737373] font-medium text-[12px]'>
                {label} <span className='text-black'>{radialBarData.series[index]}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center justify-center'>
          <ReactApexChart options={radialBarData.options} series={radialBarData.series} type='radialBar' height={350} />
        </div>

        <div className='mt-10'>
          <ul className='space-y-6'>
            <li className="flex justify-between items-center before:content-[''] before:inline-block before:mr-2 before:h-3 before:w-3 before:rounded-full before:bg-[#039F00]">
              <span className='text-[#737373] text-[14px] font-medium'>Performance Metrics</span>
              <span className='mx-2 grow border-b border-dashed border-gray-300'></span>
              <span className='text-[#0A0A0A] font-bold text-[16px]'>6,38,465.14</span>
            </li>
            <li className="flex justify-between items-center before:content-[''] before:inline-block before:mr-2 before:h-3 before:w-3 before:rounded-full before:bg-[#EB8C00]">
              <span className='text-[#737373] text-[14px] font-medium'>Feedback Summary</span>
              <span className='mx-2 grow border-b border-dashed border-gray-300'></span>
              <span className='text-[#0A0A0A] font-bold text-[16px]'>41,881.2</span>
            </li>
            <li className="flex justify-between items-center before:content-[''] before:inline-block before:mr-2 before:h-3 before:w-3 before:rounded-full before:bg-[#ADD633]">
              <span className='text-[#737373] text-[14px] font-medium'>Rating Trends</span>
              <span className='mx-2 grow border-b border-dashed border-gray-300'></span>
              <span className='text-[#0A0A0A] font-bold text-[16px]'>4,070,940.6</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Elliptical Donut Chart for Service Providers */}
      <ServiceProvidersRightGraph />
    </div>
  );
};

export default PerformanceMatrix;
