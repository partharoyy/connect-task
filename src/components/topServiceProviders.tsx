import TopServiceProvidersCard from "./topServiceProvidersCard";
interface User {
  id: number;
  image: string;
  name: string;
}

interface Data {
  posterImage: string;
  label: string;
  userList: User[];
  percentageIncrease: number;
}

interface TopServiceProvidersProps {
  data: Data[];
}

const TopServiceProviders: React.FC<TopServiceProvidersProps> = ({ data }) => {
  return (
    <div className='flex flex-col space-y-4  bg-white rounded-xl  p-8 mt-3 mx-auto'>
      <p className='text-[28px] font-bold text-[#0D0D0D] '>Top Service Providers</p>
      <div className='flex justify-center items-center gap-4'>
        {data.map((data, index) => (
          <TopServiceProvidersCard
            key={index}
            posterImage={data.posterImage}
            label={data.label}
            userList={data.userList}
            percentageIncrease={data.percentageIncrease}
          />
        ))}
      </div>
    </div>
  );
};

export default TopServiceProviders;
