import { HiMenu } from "react-icons/hi";
import { FaHome, FaBitbucket, FaEnvelope, FaCog, FaQuestionCircle } from "react-icons/fa";
import { MdArrowDropDown, MdSearch } from "react-icons/md";
import IconWithBackground from "./components/ui/iconWithBackground";
import { RiMessage2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

const App = () => {
  return (
    <div className='flex h-screen bg-white text-black'>
      {/* Left Navigation Bar */}
      <nav className='w-16 bg-white flex flex-col items-center py-4 border-r border-gray-200'>
        <div className='mb-8'>
          <HiMenu size={24} className='text-black/50' />
        </div>

        <div className='space-y-6 flex-grow'>
          <FaHome size={24} className='text-black/50 cursor-pointer' />
          <FaBitbucket size={24} className='text-black/50 cursor-pointer' />
          <FaEnvelope size={24} className='text-black/50 cursor-pointer' />
        </div>

        <div className='space-y-6 mb-4'>
          <FaQuestionCircle size={24} className='text-black/50 cursor-pointer' />
          <FaCog size={24} className='text-black/50 cursor-pointer' />
        </div>
      </nav>

      {/* Main Content Area */}
      <div className='flex flex-col flex-grow'>
        <header className='bg-white shadow flex items-center justify-between px-4 py-3'>
          <div className='flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md w-full max-w-md'>
            <MdSearch size={24} className='text-black/50' />
            <input
              type='text'
              placeholder='Search anything...'
              className='bg-transparent focus:outline-none w-full text-gray-700'
            />
          </div>

          {/* Right Side Icons */}
          <div className='flex items-center space-x-6'>
            <IconWithBackground Icon={FaRegBell} bgColor='#E6E6FA' iconColor='#000435' notificationCount={21} />

            <IconWithBackground Icon={RiMessage2Line} bgColor='#E6E6FA' iconColor='#000435' notificationCount={53} />

            <IconWithBackground Icon={FiSettings} bgColor='#FFE7E1' iconColor='#FF5B5B' notificationCount={19} />

            {/* Grey Separator */}
            <div className='h-6 bg-gray-300 w-px'></div>

            {/* User Profile */}
            <div className='flex items-center space-x-2 cursor-pointer'>
              <FaEnvelope size={32} className='text-black/50' />
              <span className='text-gray-800 font-medium'>Hi, Username</span>
              <MdArrowDropDown size={24} className='text-black/50' />
            </div>
          </div>
        </header>

        {/* Main Content Section (Placeholder) */}
        <main className='flex-grow bg-gray-50 p-6'>
          <h1 className='text-2xl font-bold'>Dashboard Content</h1>
          <p className='mt-4 text-gray-600'>This is where the dashboard content goes.</p>
        </main>
      </div>
    </div>
  );
};

export default App;
