import IconWithBackground from "./components/ui/iconWithBackground";
import { RiMessage2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { Input } from "./components/ui/input";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { IoBagRemoveOutline } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import profileImage from "./assets/profile.png";

type ActiveComponent = "home" | "bag" | "chat" | "help" | "setting";

const App = () => {
  const [active, setActive] = useState<ActiveComponent | "home">("home");

  const getActiveClass = (componentName: ActiveComponent) => {
    return active === componentName
      ? "bg-gray-200 border-l-[6px] border-black"
      : "hover:bg-gray-100 border-l-[6px] border-transparent";
  };

  return (
    <div className='flex h-screen bg-white text-black'>
      {/* Left Navigation Bar */}
      <nav className='w-20 bg-white flex flex-col items-center py-10'>
        <div className='mb-8'>
          <RxHamburgerMenu size={26} />
        </div>

        <div className='flex flex-col items-center mt-20 w-full'>
          <div
            className={`flex justify-center items-center text-black cursor-pointer p-7 ${getActiveClass(
              "home"
            )} w-full`}
            onClick={() => setActive("home")}
          >
            <GoHome size={22} className='shrink-0' />
          </div>
          <div
            className={`flex justify-center items-center text-black cursor-pointer p-7 ${getActiveClass("bag")} w-full`}
            onClick={() => setActive("bag")}
          >
            <IoBagRemoveOutline size={22} className='shrink-0' />
          </div>
          <div
            className={`flex justify-center items-center text-black cursor-pointer p-7 ${getActiveClass(
              "chat"
            )} w-full`}
            onClick={() => setActive("chat")}
          >
            <BsChatLeftText size={22} className='shrink-0' />
          </div>
        </div>

        <div className='flex flex-col items-center mt-28 w-full'>
          <div
            className={`flex justify-center items-center text-black cursor-pointer p-7 ${getActiveClass(
              "help"
            )} w-full`}
            onClick={() => setActive("help")}
          >
            <BsQuestionCircle size={22} className='shrink-0' />
          </div>
          <div
            className={`flex justify-center items-center text-black cursor-pointer p-7 ${getActiveClass(
              "setting"
            )} w-full`}
            onClick={() => setActive("setting")}
          >
            <GoGear size={22} className='shrink-0' />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className='flex flex-col flex-grow'>
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

        {/* Main Content Section (Placeholder) */}
        <main className='flex-grow bg-[#E6E6FA] p-6'></main>
      </div>
    </div>
  );
};

export default App;
