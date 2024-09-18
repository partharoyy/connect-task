import CardContainer from "./components/cardContainer";
import Filters from "./components/filters";
import LeftNavigation from "./components/leftNavigation";
import LineChart from "./components/lineChart";
import Segmentation from "./components/segmentation";
import TopNavigation from "./components/topNavigation";

const chartData = {
  activeServiceProvider: [3200, 3000, 2500, 3600, 2800, 4200, 4500],
  serviceProviderRetentionRate: [3100, 4300, 3200, 4100, 1700, 4000, 3100],
  newServiceProvider: [1000, 1300, 4050, 1550, 2050, 3600, 3550],
  serviceCompletionRate: [3500, 2300, 3700, 4300, 3400, 3900, 2900],
  totalServiceProvider: [2000, 3300, 2800, 3200, 2200, 3300, 4400],
  averageRating: [2500, 2100, 2650, 2200, 3300, 2400, 3450],
};

const App = () => {
  return (
    <div className='flex h-screen bg-white text-black'>
      <LeftNavigation />
      <div className='flex flex-col flex-grow'>
        <TopNavigation />
        <main className='flex-grow bg-[#E6E6FA] p-10'>
          <Filters />
          <div className='container mx-auto  flex flex-wrap gap-6 mt-6'>
            <div className='child w-[870px] min-w-[870px]'>
              <CardContainer />
              <LineChart data={chartData} />
              <Segmentation />
            </div>
            <div className='child bg-green-100 p-4 rounded-lg w-[390px] min-w-[390px]'>Child 2 (390px)</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
