import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { DropdownProps } from "@/types";

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect, startIcon, endIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative inline-block text-left '>
      <div>
        <button
          type='button'
          onClick={toggleDropdown}
          className='inline-flex items-center justify-between px-3 py-2 text-md font-light text-[#272727] bg-white border border-[#89B0EB] rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none'
        >
          <div className='flex items-center'>
            {startIcon && <span className='mr-2'>{startIcon}</span>}
            {label}
          </div>
          {endIcon ? <span className='ml-2'>{endIcon}</span> : <FiChevronDown className='ml-2 text-[#272727]' />}
        </button>
      </div>

      {isOpen && (
        <div className='absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg'>
          <div className='py-1'>
            {options.map((option, index) => (
              <button
                key={index}
                className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
