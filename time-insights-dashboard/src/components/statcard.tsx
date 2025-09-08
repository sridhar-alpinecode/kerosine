import React from 'react';
type StatCardProps = {
  title: string;
  value: string;
  change?: number;
  hours: string;
  expected: string;
  bgColorClass?: string; // e.g. "bg-indigo-500"
};

const StatCard = ({title,value,change = 0,expected,  hours,bgColorClass = "bg-[#253D61]"}: StatCardProps) => {
  const isPositive = change >= 0;
  const validChange = Number.isNaN(change) ? 0 : change;

  return (
    <div className={`p-5 rounded-xl shadow-lg text-white flex flex-col justify-between max-w-screen-md  gap-[20px] ${bgColorClass}`}>

      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="font-['Space_Grotesk'] text-[34px] !font-bold !text-[52px] leading-none tracking-normal uppercase text-[#86CB91]">{value}%</p>
            <div className="flex items-center space-x-1.5 mt-1">
              <p className="text-sm text-gray-300 font-['Space_Grotesk'] pt-1">{title}</p>
              <div className="flex h-4 w-4 p-1 cursor-help items-center justify-center rounded-full bg-gray-500/30 text-xs font-semibold text-gray-200 ">
                ?
              </div>
            </div>
          </div>

          <div className={`text-center rounded-lg px-4 py-1.5 !font-bold !text-[52px] font-['Space_Grotesk'] ${isPositive ? 'bg-green-500/20' : 'bg-red-500/20'} pb-1`}>
            <div className={`flex items-center text-sm font-['Space_Grotesk'] !text-[20px] font-semibold pb-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? '▲' : '▼'} {Math.abs(validChange)}%
            </div>
            <hr />
            <div className="text-sm font-semibold !text-[20px] text-gray-300 mt-0.5 pt-1">
              {hours}hrs
            </div>
          </div>
        </div>

        {/* Divider line */}
        <hr className="border-t border-gray-500/60" />
      </div>

      {/* Bottom section for "Expected" value */}
      <div className="mt-2">
         <p className="text-sm text-gray-400">Expected: {expected}</p>
      </div>
    </div>
  );
};

export default StatCard;

// 253D61