import SupportCard from "../components/supportCard";
import { SectionData } from "@/types";
import IconWithBackground from "../components/iconWithBackground";
import { FaRegBell } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { sections } from "../../public/data/topServiceData.ts";

const Section: React.FC<{ title: string; cards: SectionData["cards"] }> = ({ title, cards }) => (
  <div>
    <div className='flex items-center justify-between'>
      <p className='text-[16px] font-medium'>{title}</p>
      <p className='bg-[#F4F7FE] rounded-[70px] px-4 py-2 text-[14px] font-medium text-center text-[#4318FF]'>
        View All
      </p>
    </div>
    <div className='space-y-3 mt-6'>
      {cards.map((card) => (
        <SupportCard
          key={card.id}
          id={card.id}
          name={card.name}
          avatarUrl={card.avatarUrl}
          tags={card.tags}
          title={card.title}
          description={card.description}
          status={card.status}
          statusType={card.statusType}
        />
      ))}
    </div>
  </div>
);

export default function Support() {
  return (
    <div className='space-y-3'>
      <div className='flex items-center gap-5'>
        <IconWithBackground Icon={FaRegBell} bgColor={"#F4F7FE"} />
        <p className='text-[24px] font-semibold text-[#0D0D0D]'>Support & Compliance</p>
      </div>

      <div className='space-y-4'>
        {sections.map((section) => (
          <Section key={section.title} title={section.title} cards={section.cards} />
        ))}
      </div>

      <div className='pt-3'>
        <Button className='bg-[#4318FF] rounded-[8px] text-white'>Raise a Ticket</Button>
      </div>
    </div>
  );
  // Updated styles to allow growth with content
  // Added 'flex-grow' to the main container
}
