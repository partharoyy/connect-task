import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartOptions,
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

interface LegendItem {
  label: string;
  color: string;
}

const donutData = {
  labels: ["Number of active services", "New services added", "Services removed"],
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: ["#3FE900", "#FFE603", "#FF0000"],
      hoverOffset: 4,
    },
  ],
};

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Service Trend 1",
      data: [10, 22, 30, 40, 20, 50, 30, 20, 40, 70, 60, 80],
      borderColor: "#FFE603",
      fill: false,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: "Service Trend 2",
      data: [20, 40, 50, 60, 30, 20, 30, 40, 50, 70, 60, 100],
      borderColor: "#3FE900",
      fill: false,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

// Legend Data
const legends: LegendItem[] = [
  { label: "Number of active services", color: "#3FE900" },
  { label: "New services added", color: "#FFE603" },
  { label: "Services removed", color: "#FF0000" },
];

const lineOptions: ChartOptions<"line"> = {
  scales: {
    x: {
      type: "category",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: false,
        //@ts-expect-error: task project
        beginAtZero: false,
      },
      offset: true,
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback: function (value: number | string, index: number) {
          return index % 1 === 0 ? value : "";
        },
        //@ts-expect-error: task project
        beginAtZero: false,
      },
      offset: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function ServiceOfferings() {
  return (
    <div className='p-6 mt-4 rounded-xl bg-white '>
      <p className='text-[#0D0D0D] text-[20px] font-bold mb-4'>Service offerings</p>
      <div className='flex flex-wrap md:flex-nowrap justify-between items-start h-[400px]'>
        <div className='w-full md:w-[30%] p-4'>
          <Doughnut data={donutData} options={{ plugins: { legend: { display: false } } }} />
        </div>

        <div className='w-full p-2 h-[400px]'>
          {" "}
          <div className='w-full h-full'>
            {" "}
            <Line data={lineData} options={lineOptions} />
          </div>
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
}
