import React from "react";

interface CardProps {
  id: string;
  name: string;
  avatarUrl: string;
  tags: string[];
  title?: string;
  description?: string;
  status?: string;
  statusType?: "escalated" | "pending" | "open" | "resolved";
}

const SupportCard: React.FC<CardProps> = ({ id, name, avatarUrl, tags, title, description, status, statusType }) => {
  return (
    <div className='w-full rounded-xl bg-white shadow-[0px_18px_40px_0px_#7090B01F]'>
      <div className='p-5'>
        <div className='flex items-center space-x-4 mb-4'>
          {/* Image Container */}
          <div className='w-12 h-12 flex-shrink-0'>
            <img
              src={avatarUrl}
              alt={name}
              className='w-full h-full object-cover rounded-full border border-gray-300'
            />
          </div>

          <div className='flex-1 min-w-0'>
            <p className='text-[14px] text-[#2B3674] font-bold whitespace-nowrap'>{id}</p>
            <p className='text-[10px] font-medium text-[#252762] whitespace-nowrap'>{name}</p>
          </div>
          <div className='flex-shrink-0 flex flex-nowrap gap-2 overflow-hidden'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${
                  index % 2 === 0
                    ? "bg-[#FF847C]/10 border border-[#FF847C] text-[#2F2924]"
                    : "bg-[#4318FF]/10 border border-[#4318FF] text-[#2F2924]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {title && <h2 className='text-[14px] text-[#2B3674] font-medium mb-1'>{title}</h2>} {/* Removed truncate */}
        {description && <p className='text-[#72768B] font-normal text-[12px] mb-4'>{description}</p>}{" "}
        {/* Removed truncate */}
        {status && (
          <div className={`flex items-center ${statusType === "pending" ? "justify-between" : ""}`}>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                statusType === "escalated"
                  ? "bg-[#E77D00]/10 border border-[#E77D00] text-[#E77D00] text-[10px] font-medium"
                  : statusType === "open"
                  ? "bg-[#0054E7]/10 border border-[#0054E7] text-[#0054E7] text-[10px] font-medium"
                  : statusType === "resolved"
                  ? "bg-[#029738]/10 border border-[#029738] text-[#029738] text-[10px] font-medium"
                  : statusType === "pending"
                  ? "bg-[#FBBC05]/10 border border-[#FBBC05] text-[#FBBC05] text-[10px] font-medium"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Status: {status}
            </span>
            {statusType === "pending" && (
              <div className='w-1/2 bg-gray-200 rounded-full h-2.5'>
                <div className='bg-[#FBBC05] h-2.5 rounded-full' style={{ width: "65%" }}></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportCard;
