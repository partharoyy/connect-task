import Dropdown from "./dropdown";
import { FiChevronDown } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { Button } from "../components/ui/button";

export function ButtonDemo() {
  return <Button>Button</Button>;
}

const Filters = () => {
  const handleSelect = () => {};

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <Dropdown
          label='This Year'
          options={["Today", "Tomorrow", "Next Week"]}
          onSelect={handleSelect}
          startIcon={<SlCalender />}
          endIcon={<FiChevronDown />}
        />

        <Dropdown label='Location' options={["Option 1", "Option 2", "Option 3"]} onSelect={handleSelect} />

        <Dropdown label='Status' options={["Action 1", "Action 2", "Action 3"]} onSelect={handleSelect} />
      </div>
      <div className='flex items-center gap-2 mr-4'>
        <Button className='bg-[#4318FF] text-white font-light rounded-lg'>Assign Order</Button>
        <Button className='bg-[#4318FF] text-white font-light rounded-lg'>Add New Service Provider</Button>
      </div>
    </div>
  );
};

export default Filters;
