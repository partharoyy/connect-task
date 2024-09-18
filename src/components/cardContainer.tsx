import Card from "./card";
import { FiCalendar } from "react-icons/fi";
import profile2 from "../assets/profile2.png";

const cardData = [
  {
    label: "Total Service Provider",
    amount: 20000,
    percentageIncrease: 5,
    Icon: FiCalendar,
  },
  {
    label: "New Service Provider",
    count: 2000,
    percentageIncrease: -10,
    Icon: FiCalendar,
  },
  {
    label: "Active Service Provider",
    count: 2000,
    percentageIncrease: 10,
    Icon: FiCalendar,
  },
  {
    label: "Average Rating",
    Icon: FiCalendar,
    customerName: "Abhinav",
    CustomerRating: "4.0",
    CustomerRatingStar: "⭐️⭐️⭐️⭐️★",
    time: "1 day ago",
    bottomCustomerImage: profile2,
    labelDesc: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    label: "Service Completion Rate",
    Icon: FiCalendar,
    bottomGraph: profile2,
    percentageIncrease: 85,
  },
  {
    label: "Service Provider Retension Rate",
    percentageIncrease: 100,
    Icon: FiCalendar,
  },
];

const CardContainer = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {cardData.map((card, index) => (
        <Card
          key={index}
          label={card.label}
          amount={card.amount}
          percentageIncrease={card.percentageIncrease}
          Icon={card.Icon}
          customerName={card.customerName}
          CustomerRating={card.CustomerRating}
          CustomerRatingStar={card.CustomerRatingStar}
          time={card.time}
          count={card.count}
          bottomCustomerImage={card.bottomCustomerImage}
          labelDesc={card.labelDesc}
          bottomGraph={card.bottomGraph}
        />
      ))}
    </div>
  );
};

export default CardContainer;
