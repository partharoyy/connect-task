import IconWithBackground from "../components/iconWithBackground";
import { RiMessage2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { Input } from "../components/ui/input";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import profileImage from "../assets/profile.png";

const TopNavigation = () => {
  return (
    <header className='bg-white shadow flex items-center justify-between px-8 py-[1.3rem]'>
      <div className='relative w-[19%]'>
        <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black z-10' size={20} />
        <Input
          type='text'
          placeholder='Search anything...'
          className='pl-11 pr-3 py-2 h-12 text-md w-full border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6E23DD] focus:border-transparent placeholder-[#B3B3B3] placeholder:font-light placeholder:text-md'
          value=''
        />
      </div>

      {/* Right Side Icons */}
      <div className='flex items-center space-x-9'>
        <IconWithBackground Icon={FaRegBell} bgColor='#E6E6FA' iconColor='#000435' notificationCount={21} />

        <IconWithBackground Icon={RiMessage2Line} bgColor='#E6E6FA' iconColor='#000435' notificationCount={53} />

        <IconWithBackground Icon={FiSettings} bgColor='#FFE7E1' iconColor='#FF5B5B' notificationCount={19} />

        {/* Grey Separator */}
        <div className='h-20 bg-gray-200 w-px'></div>

        {/* User Profile */}
        <div className='flex items-center space-x-3 cursor-pointer justify-center'>
          <img src={profileImage} alt='profile image' className='h-10 w-10 rounded-full object-cover' />

          <p className='text-gray-800 font-medium text-xl'>Hi, Saikumar</p>
          <IoIosArrowDown size={20} className='text-black' strokeWidth={20} />
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
