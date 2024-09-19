interface User {
  id: number;
  image: string;
  name: string;
}

interface TopServiceProvidersCardProps {
  posterImage: string;
  label: string;
  userList: User[];
  percentageIncrease: number;
}

const TopServiceProvidersCard: React.FC<TopServiceProvidersCardProps> = ({
  posterImage,
  label,
  userList,
  percentageIncrease,
}) => {
  return (
    <div className='flex flex-col items-center border border-[#CCCCCC] rounded-lg p-3 space-y-3'>
      <img src={posterImage} alt='Poster image' className='rounded-t-[8px] rounded-b-none w-[170.5px] h-[206px]' />
      <p className='text-left w-full'>{label}</p> {/* Make label take full width */}
      <div className='flex justify-between w-full items-center mt-2'>
        <div className='flex items-center'>
          {userList.slice(0, 3).map((user, index) => {
            const borderColors = ["#FF847C", "#CD7ED9", "#43E7C9"]; // The border colors
            return (
              <img
                key={user.id}
                src={user.image}
                alt={user.name}
                className='w-[26px] h-[26px] rounded-full border-2 object-cover'
                style={{
                  borderColor: borderColors[index], // Apply border colors in normal order
                  marginLeft: index === 0 ? "0" : "-13px", // Ensure all images overlap
                  zIndex: 0 + index, // Ensure correct stacking order
                }}
              />
            );
          })}

          {userList.length > 3 && <span className='text-[8px] font-semibold text-black'>+{userList.length - 3}</span>}
        </div>

        <p className='bg-[#E6F8EF] rounded-lg text-[#18CE98] font-medium text-[12px] py-1 px-2'>
          +{percentageIncrease}%
        </p>
      </div>
    </div>
  );
};

export default TopServiceProvidersCard;
