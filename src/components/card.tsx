import React from "react";
import IconWithBackground from "./iconWithBackground";
import { IconType } from "react-icons";
import redWave from "../assets/red.png";
import yellowWave from "../assets/yellow.png";
import greenWave from "../assets/green.png";
import PieChart from "./pieChart";

interface CardProps {
  label: string;
  amount?: number;
  count?: number;
  percentageIncrease?: number;
  period?: string;
  Icon: IconType;
  labelDesc?: string;
  bottomCustomerImage?: string;
  customerName?: string;
  CustomerRating?: string;
  CustomerRatingStar?: string;
  time?: string;
  iconBGColor?: string;
  bottomGraph?: string;
}

const Card: React.FC<CardProps> = ({
  label,
  amount,
  count,
  percentageIncrease = 6,
  period = "from last week",
  Icon,
  labelDesc,
  bottomCustomerImage,
  customerName,
  CustomerRating,
  CustomerRatingStar,
  time,
  iconBGColor = "#E6E6FA",
  bottomGraph,
}) => {
  return (
    <div className='w-full min-w-[279.33px] h-auto rounded-[16px] p-6 gap-4 bg-white'>
      {/* Top Section */}
      <div className='flex items-center gap-3 mb-4 w-[231.33px] h-[60px]'>
        <IconWithBackground Icon={Icon} bgColor={iconBGColor} iconColor='#000435' />
        <div className='flex flex-col items-start gap-1'>
          <p className='text-[#808080] text-[15px] font-medium'>{label}</p>
          {!labelDesc ? (
            <p className='text-[28px] font-semibold text-[#0D0D0D]'>
              {amount ? (
                <span>
                  <span className=' font-semibold'>Rs. </span>
                  <span className=' font-bold'>{`${amount}`}</span>
                </span>
              ) : (
                count
              )}
            </p>
          ) : (
            <p className='text-sm text-gray-500'>{labelDesc}</p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className='w-full h-[1px] bg-gray-200'></div>

      {/* Bottom Section */}
      <div className='flex'>
        {!bottomCustomerImage && !bottomGraph ? (
          <div className=' flex items-center justify-between'>
            {percentageIncrease < 1 ? (
              <img src={redWave} alt='yellow-wave' className='h-20 w-20 object-cover' />
            ) : percentageIncrease <= 5 ? (
              <img src={yellowWave} alt='yellow-wave' className='h-20 w-20 object-cover' />
            ) : (
              <img src={greenWave} alt='yellow-wave' className='h-20 w-20 object-cover' />
            )}

            <div className='mt-2 text-[16px] text-[#808080] ml-3'>
              <p>
                <span
                  className={
                    percentageIncrease < 1
                      ? "text-red-500"
                      : percentageIncrease <= 5
                      ? "text-yellow-500"
                      : "text-green-500"
                  }
                >
                  {percentageIncrease < 1 ? `${percentageIncrease}%` : `+${percentageIncrease}%`}
                </span>{" "}
                more
              </p>

              <p>{period}</p>
            </div>
          </div>
        ) : !bottomGraph && bottomCustomerImage && !(count || amount) ? (
          <div className='flex items-center justify-between mt-4 w-full'>
            <div className='flex items-center justify-start'>
              <img
                src={bottomCustomerImage}
                alt={customerName}
                className='w-[48.53px] h-[48.53px] rounded-full mr-4 object-cover'
              />
              <div className='flex flex-col'>
                <p className='text-[14px] font-medium text-[#0D0D0D]'>{customerName}</p>
                <p className='text-sm text-gray-500 flex items-center'>
                  {CustomerRatingStar}
                  <span className='ml-1 text-[10px] text-[#0D0D0D] font-medium'>{CustomerRating}</span>
                </p>
              </div>
            </div>

            <div className='flex flex-col items-start mr-1'>
              <button className='text-[10px] font-medium text-[#4318FF] hover:underline'>View all</button>
              <p className='text-[10px] font-medium text-gray-400'>{time}</p>
            </div>
          </div>
        ) : bottomGraph && !bottomCustomerImage && !(count || amount) ? (
          <div className=' flex items-center mt-4 '>
            <div>
              {percentageIncrease < 1 ? (
                <PieChart color='red' percentageIncrease={percentageIncrease} />
              ) : percentageIncrease <= 5 ? (
                <PieChart color='yellow' percentageIncrease={percentageIncrease} />
              ) : (
                <PieChart color='#FF834D' percentageIncrease={percentageIncrease} />
              )}
            </div>
            <div className='text-[14px] font-medium text-[#808080] ml-4'>
              <p>
                <span
                  className={
                    percentageIncrease < 1
                      ? "text-red-500"
                      : percentageIncrease <= 5
                      ? "text-yellow-500"
                      : "text-green-500"
                  }
                >
                  {percentageIncrease < 1 ? `${percentageIncrease}%` : `${percentageIncrease}%`} completed
                </span>{" "}
              </p>

              <p>{period}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
