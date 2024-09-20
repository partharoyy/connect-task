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
import Support from "./components/support.tsx";

const App = () => {
  return (
    <div className='flex flex-col md:flex-row bg-white text-black rounded-xl mt-4'>
      <LeftNavigation />
      <div className='flex flex-col flex-grow'>
        <TopNavigation />
        <main className='flex-grow bg-[#E6E6FA] p-4 md:p-10'>
          <div className='container mx-auto flex flex-col md:flex-row flex-wrap gap-6 mt-6'>
            <Filters />
            <div className='flex flex-col md:flex-row flex-grow gap-6'>
              <div className='flex-grow min-w-[300px] md:min-w-[700px]'>
                <CardContainer />
                <LineChart data={chartData} />
                <Segmentation />
                <TopServiceProviders data={topServiceProvidersData} />
                <ServiceOfferings />
                <PerformanceMatrix />
              </div>
              <div className='p-4  bg-white rounded-xl h-[2366px]'>
                <Support />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
