import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  data: {
    activeServiceProvider: number[];
    serviceProviderRetentionRate: number[];
    newServiceProvider: number[];
    serviceCompletionRate: number[];
    totalServiceProvider: number[];
    averageRating: number[];
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartData = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    datasets: [
      {
        label: "Active Service Provider",
        data: data.activeServiceProvider,
        borderColor: "#FF5D8D",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
      {
        label: "Service Provider Retention Rate",
        data: data.serviceProviderRetentionRate,
        borderColor: "#72BBFF",
        backgroundColor: "rgba(135, 206, 250, 0.3)",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
      {
        label: "New Service Provider",
        data: data.newServiceProvider,
        borderColor: "#11BEA9",
        backgroundColor: "rgba(0, 255, 0, 0.3)",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
      {
        label: "Service Completion Rate",
        data: data.serviceCompletionRate,
        borderColor: "#FF834D",
        backgroundColor: "rgba(255, 165, 0, 0.3)",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
      {
        label: "Total Service Provider",
        data: data.totalServiceProvider,
        borderColor: "#FA18FF",
        backgroundColor: "rgba(255, 192, 203, 0.3)",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
      {
        label: "Average Rating",
        data: data.averageRating,
        borderColor: "#FBBC05",
        backgroundColor: "rgba(255, 215, 0, 0.3)",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          color: "#0D0D0D",
          //@ts-expect-error: TypeScript does not recognize the generateLabels method on the legend plugin
          generateLabels: (chart: ChartJS) => {
            return chart.data.datasets.map((dataset, index) => ({
              text: dataset.label,
              fillStyle: dataset.borderColor,
              strokeStyle: dataset.borderColor,
              lineWidth: 1,
              hidden: dataset.hidden,
              addColorStop: false,
              index,
            }));
          },
        },
      },
      tooltip: {
        callbacks: {
          //@ts-expect-error: task project
          label: (context: { dataset: { label: string }; raw: number }) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    //@ts-expect-error: task project
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "#0D0D0D",
          callback: function (value: number) {
            return value.toString();
          },
          stepSize: 1000,
          font: {
            family: "Arial",
            size: 11,
            weight: "500",
          },
        },
        min: 1000,
        max: 5000,
        grid: {
          display: false,
        },
        offset: true,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#0D0D0D",
          font: {
            family: "Arial",
            size: 11,
            weight: "500",
          },
        },
        offset: true,
      },
    } as ChartOptions<"line">,
  };

  return (
    <div className='p-7 bg-white shadow-lg rounded-xl mt-4'>
      <div className='relative'>
        <Line data={chartData} options={options} />
        <div className='mt-10'>
          <div className='flex flex-wrap gap-4'>
            {chartData.datasets.map((dataset, index) => (
              <div key={index} className='flex items-center space-x-2 w-full sm:w-auto'>
                <div className='w-3 h-3 rounded-full' style={{ backgroundColor: dataset.borderColor }} />
                <span className='text-[14px] font-medium text-[#808080]'>{dataset.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
