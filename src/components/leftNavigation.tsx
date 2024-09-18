import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { IoBagRemoveOutline } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { ActiveComponent } from "@/types";

const LeftNavigation = () => {
  const [active, setActive] = useState<ActiveComponent | "home">("home");

  const getActiveClass = (componentName: ActiveComponent) => {
    return active === componentName
      ? "bg-gray-200 border-l-[6px] border-black"
      : "hover:bg-gray-100 border-l-[6px] border-transparent";
  };

  return (
    <nav className='w-20 bg-white flex flex-col items-center py-10'>
      <div className='mb-8'>
        <RxHamburgerMenu size={26} />
      </div>

      <div className='flex flex-col items-center mt-20 w-full'>
        <div
          className={`flex justify-center items-center text-black cursor-pointer p-7 ${getActiveClass("home")} w-full`}
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
          className={`flex justify-center items-center text-black cursor-pointer p-7 ${getActiveClass("chat")} w-full`}
          onClick={() => setActive("chat")}
        >
          <BsChatLeftText size={22} className='shrink-0' />
        </div>
      </div>

      <div className='flex flex-col items-center mt-28 w-full'>
        <div
          className={`flex justify-center items-center text-black cursor-pointer p-7 ${getActiveClass("help")} w-full`}
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
  );
};

export default LeftNavigation;
