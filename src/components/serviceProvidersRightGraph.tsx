import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const ServiceProvidersRightGraph: React.FC = () => {
  // Service Providers Report Data
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
        display: false, // This will hide the legends
      },
    },
    cutout: "50%",
  };

  const horizontalBarData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Progress",
        data: [600, 300, 650, 500, 400, 600, 300], // Actual progress data
        backgroundColor: ["#FF847C", "#165DC9", "#CD7ED9", "#43E7C9", "#F3A712", "#722391", "#FF847C"],
        borderRadius: 10, // Rounded edges for bars
        barThickness: 6, // Slimmer bars
      },
      {
        label: "Track",
        data: [700, 700, 700, 700, 700, 700, 700], // Max values for the track
        backgroundColor: "#CEE0EC", // Bar track color (background for unfilled portions)
        barThickness: 5, // Same thickness as progress bars
        borderRadius: 6, // Rounded edges for track bars
      },
    ],
  };

  const horizontalBarOptions = {
    indexAxis: "y" as const, // Horizontal bar chart
    scales: {
      x: {
        beginAtZero: true,
        min: 0, // Start from 0
        max: 700, // Set max value for x-axis
        ticks: {
          stepSize: 100, // Show 0 through 1000
          callback: function (value: number | string) {
            return value; // Display 0, 100, ..., 1000
          },
        },
        grid: {
          display: false, // Remove grid lines for x-axis
        },
        offset: true,
        border: {
          display: false, // Remove the main x-axis line
        },
      },
      y: {
        type: "category", // Ensure y-axis is treated as a category
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // Set labels for y-axis
        grid: {
          display: false, // Remove grid lines for y-axis
        },
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        stacked: true, // Stack the bars to create the bar tracks
        offset: true,
        border: {
          display: false, // Remove the main x-axis line
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend for the horizontal bar chart
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
    maintainAspectRatio: false, // Adjust the size automatically
    elements: {
      bar: {
        borderSkipped: false, // Make sure the bars are fully rounded
      },
    },
  };

  return (
    <div className='bg-white p-6 rounded-xl flex-1'>
      <h2 className='text-xl font-semibold mb-4'>Service Providers Report</h2>
      <p className='text-[16px] font-medium text-[#808080]'>Leads per stage</p>
      <div className='flex w-full justify-between mt-8'>
        <div className=' pr-6'>
          {/* Donut Chart */}
          <Doughnut data={serviceData} options={options} />
        </div>
        <div className=''>
          {/* Legends */}
          <div className='flex flex-wrap gap-4 mt-4'>
            {serviceData.labels.map((label, index) => (
              <div key={index} className='flex items-center space-x-2 w-full sm:w-auto'>
                {/* Circle with corresponding background color */}
                <div
                  className='w-3 h-3 rounded-full'
                  style={{ backgroundColor: serviceData.datasets[0].backgroundColor[index] }}
                />
                {/* Label */}
                <span className='text-[14px] font-medium text-[#808080]'>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-8'>
        {/* Horizontal Bar Chart */}
        <Bar data={horizontalBarData} options={horizontalBarOptions} />
      </div>
    </div>
  );
};

export default ServiceProvidersRightGraph;

// export default ServiceProvidersRightGraph;
