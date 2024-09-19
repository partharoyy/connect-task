import CardContainer from "./components/cardContainer";
import Filters from "./components/filters";
import LeftNavigation from "./components/leftNavigation";
import LineChart from "./components/lineChart";
import Segmentation from "./components/segmentation";
import TopNavigation from "./components/topNavigation";
import TopServiceProviders from "./components/topServiceProviders";
import { topServiceProvidersData } from "../public/data/topServiceData.ts";
import { chartData } from "../public/data/topServiceData.ts";
import PerformanceMatrix from "./components/performanceMatrix.tsx";
import ServiceOfferings from "./components/serviceOfferings.tsx";

const App = () => {
  return (
    <div className='flex bg-white text-black rounded-xl mt-4'>
      <LeftNavigation />
      <div className='flex flex-col flex-grow'>
        <TopNavigation />
        <main className='flex-grow bg-[#E6E6FA] p-10'>
          <div className='container mx-auto  flex flex-wrap gap-6 mt-6'>
            <Filters />
            <div className='child w-[870px] min-w-[870px]'>
              <CardContainer />
              <LineChart data={chartData} />
              <Segmentation />
              <TopServiceProviders data={topServiceProvidersData} />
              <ServiceOfferings />
              <PerformanceMatrix />
            </div>
            <div className='child p-4 w-[390px] min-w-[390px] bg-white rounded-xl'></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
