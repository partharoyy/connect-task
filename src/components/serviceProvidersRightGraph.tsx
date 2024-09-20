import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const ServiceProvidersRightGraph: React.FC = () => {
  const serviceData = {
    labels: [
      "Petcare Sector",
      "Entertainment Sector",
      "Event Sector",
      "Healthcare Sector",
      "Construction Sector",
      "Home Services Sector",
    ],
    datasets: [
      {
        label: "Leads per stage",
        data: [30, 15, 20, 5, 15, 20],
        backgroundColor: ["#f48fb1", "#9575cd", "#ffb74d", "#ff5252", "#81d4fa", "#a5d6a7"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "50%",
  };

  const horizontalBarData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Progress",
        data: [600, 300, 650, 500, 400, 600, 300],
        backgroundColor: ["#FF847C", "#165DC9", "#CD7ED9", "#43E7C9", "#F3A712", "#722391", "#FF847C"],
        borderRadius: 10,
        barThickness: 6,
      },
      {
        label: "Track",
        data: [700, 700, 700, 700, 700, 700, 700],
        backgroundColor: "#CEE0EC",
        barThickness: 5,
        borderRadius: 6,
      },
    ],
  };

  const horizontalBarOptions = {
    indexAxis: "y" as const,
    scales: {
      x: {
        beginAtZero: true,
        min: 0,
        max: 700,
        ticks: {
          stepSize: 100,
          callback: function (value: number | string) {
            return value;
          },
        },
        grid: {
          display: false,
        },
        offset: true,
        border: {
          display: false,
        },
      },
      y: {
        type: "category",
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        grid: {
          display: false,
        },
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        stacked: true,
        offset: true,
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: { dataset: { label: string }; raw: number }) {
            return context.dataset.label + ": " + context.raw;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderSkipped: false,
      },
    },
  };

  return (
    <div className='bg-white p-6 rounded-xl flex-1'>
      <h2 className='text-xl font-semibold mb-4'>Service Providers Report</h2>
      <p className='text-[16px] font-medium text-[#808080]'>Leads per stage</p>
      <div className='flex w-full justify-between mt-8'>
        <div className=' pr-6'>
          <Doughnut data={serviceData} options={options} />
        </div>
        <div className=''>
          <div className='flex flex-wrap gap-4 mt-4'>
            {serviceData.labels.map((label, index) => (
              <div key={index} className='flex items-center space-x-2 w-full sm:w-auto'>
                <div
                  className='w-3 h-3 rounded-full'
                  style={{ backgroundColor: serviceData.datasets[0].backgroundColor[index] }}
                />
                <span className='text-[14px] font-medium text-[#808080]'>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-8'>
        {/* @ts-expect-error: task project */}
        <Bar data={horizontalBarData} options={horizontalBarOptions} />
      </div>
    </div>
  );
};

export default ServiceProvidersRightGraph;

// export default ServiceProvidersRightGraph;
