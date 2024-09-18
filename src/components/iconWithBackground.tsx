import React from "react";
import { IconWithBackgroundProps } from "@/types";

const IconWithBackground: React.FC<IconWithBackgroundProps> = ({
  Icon,
  bgColor,
  size = 28,
  notificationCount = 0,
  iconColor,
}) => {
  return (
    <div
      className={`relative p-3 rounded-2xl flex items-center justify-center w-14 h-14`}
      style={{ backgroundColor: bgColor }}
    >
      <Icon size={size} color={iconColor} />

      {/* notification badge */}
      {notificationCount > 0 && (
        <div
          className='absolute -top-3 -right-3 flex items-center justify-center rounded-full w-[32px] h-[32px] p-[2px]'
          style={{ backgroundColor: bgColor }}
        >
          <span
            style={{
              color: bgColor,
              backgroundColor: iconColor,
            }}
            className='text-[.7rem] w-[23px] h-[23px] rounded-full flex items-center justify-center'
          >
            {notificationCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default IconWithBackground;
