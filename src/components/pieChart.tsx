import React from "react";

interface PieChartProps {
  color?: string;
  percentageIncrease: number;
}

const PieChart: React.FC<PieChartProps> = ({ color = "#FF834D", percentageIncrease }) => {
  const calculatePieSlice = (percentage: number) => {
    const angle = (percentage / 100) * 360;
    const x = Math.cos((angle - 90) * (Math.PI / 180));
    const y = Math.sin((angle - 90) * (Math.PI / 180));
    const largeArcFlag = percentage > 50 ? 1 : 0;

    return `M 1 0 A 1 1 0 ${largeArcFlag} 1 ${x} ${y} L 0 0`;
  };

  return (
    <div className='w-[48.63px] h-[48.63px]'>
      <svg viewBox='-1 -1 2 2' className='transform rotate-12'>
        <path d={calculatePieSlice(percentageIncrease + 15)} fill={color} />
        <circle cx='0' cy='0' r='1' fill='none' stroke={color} strokeWidth='0.02' />
      </svg>
    </div>
  );
};

export default PieChart;
