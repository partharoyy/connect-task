import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import IndiaMap from "./indiaMap";

const Segmentation: React.FC = () => {
  const data = {
    labels: [
      "Healthcare Sector",
      "Construction Sector",
      "Home Services Sector",
      "Petcare Sector",
      "Entertainment Sector",
      "Event Sector",
    ],
    datasets: [
      {
        data: [30, 20, 15, 10, 15, 10],
        backgroundColor: ["#FF847C", "#165DC9", "#CD7ED9", "#43E7C9", "#F3A712", "#722391"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#4BC0C0", "#FF9F40", "#9966FF", "#FFCD56"],
      },
    ],
  };

  const legends = [
    {
      label: "Healthcare Sector",
      color: "#FF847C",
    },
    {
      label: "Construction Sector",
      color: "#165DC9",
    },
    {
      label: "Home Services Sector",
      color: "#CD7ED9",
    },
    {
      label: "Petcare Sector",
      color: "#43E7C9",
    },
    {
      label: "Entertainment Sector",
      color: "#F3A712",
    },
    {
      label: "Event Sector",
      color: "#722391",
    },
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom" as const,
        labels: {
          color: "#000",
          usePointStyle: true,
          padding: 40,
        },
      },
    },
  };

  return (
    <div className='container mx-auto p-6 mt-4 rounded-xl bg-white'>
      <h1 className=' text-2xl font-bold mb-4 text-left'>Service Provider Segmentation & Demographics</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col items-center justify-between border border-[#CCCCCC] rounded-xl'>
          <h2 className='text-lg mb-2 text-[#808080] text-[16px] font-medium m-4'>
            Service Provider across different Segments
          </h2>
          <div className='w-full max-w-sm p-20 mb-24'>
            <Pie data={data} options={options} />
          </div>
        </div>
        <div className='flex flex-col items-center justify-between border border-[#CCCCCC] rounded-xl'>
          <h2 className='text-lg mb-2 text-[#808080] text-[16px] font-medium m-4'>
            Attributes as per location, years of experience, specialization
          </h2>
          <IndiaMap />
        </div>
      </div>
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
};

export default Segmentation;
