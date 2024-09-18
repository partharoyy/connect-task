interface TopServiceProvidersProps {
  posterImage: HTMLImageElement;
  label: string;
  userList: userList[];
  percentageIncrease: number;
}

interface userList {
  image: HTMLImageElement;
  name: string;
  id: number;
}

const TopServiceProviders: React.FC<TopServiceProvidersProps> = ({
  posterImage,
  label,
  userList,
  percentageIncrease,
}) => {
  return (
    <div>
      <img src={} alt='poster image' />
      <p>{label}</p>
      <div className='flex items-center justify-between'>
        <div>
          {userList
            .filter((_, index) => index === 0 && index === 1 && index === 2)
            .map((user) => (
              <img key={user.id} src={user.image} />
            ))}
          <span className='text-[8px] font-semibold text-black'>+{userList.length}</span>
        </div>
        <p className='bg-[#E6F8EF] rounded-sm text-[#18CE98] font-medium text-[12px]p-1'>+{percentageIncrease}</p>
      </div>
    </div>
  );
};

export default TopServiceProviders;
