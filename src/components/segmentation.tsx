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
        backgroundColor: [
          "#FF6384", // Healthcare
          "#36A2EB", // Construction
          "#4BC0C0", // Home Services
          "#FF9F40", // Petcare
          "#9966FF", // Entertainment
          "#FFCD56", // Event
        ],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#4BC0C0", "#FF9F40", "#9966FF", "#FFCD56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          color: "#000",
          usePointStyle: true,
          padding: 20,
        },
      },
    },
  };

  return (
    <div className='container mx-auto p-4 mt-4 rounded-xl bg-white'>
      <h1 className='text-center text-2xl font-bold mb-4'>Service Provider Segmentation & Demographics</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-lg mb-2'>Service Provider across different Segments</h2>
          <div className='w-full max-w-sm'>
            <Pie data={data} options={options} />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-lg mb-2'>Attributes as per location, years of experience, specialization</h2>
          <IndiaMap />
        </div>
      </div>
    </div>
  );
};

export default Segmentation;
