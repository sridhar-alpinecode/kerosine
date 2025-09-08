"use client"
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import Image from 'next/image';


const DynamicHeader = () => {
    
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 }); 
  const weekEnd = endOfWeek(today, { weekStartsOn: 1 });

const [dateRange, setDateRange] = useState<(Date | null)[]>([weekStart, weekEnd]);
const [startDate, endDate] = dateRange;

  const weekDisplay =
    startDate && endDate
      ? `${format(startDate, 'MMMM d')} - ${format(endDate, 'd, yyyy')}`
      : 'Select a date range';
  
  const durationDisplay =
    startDate && endDate
      ? `${format(startDate, 'MMM d')} - ${format(endDate, 'MMM d')}`
      : 'Select Range';

  return (
    <header className="flex justify-between items-center mb-4 p-4 rounded-lg" style={{backgroundColor:'#F0F4F8'}}>
      <div className="flex flex-col gap-y-2">
        <p className="font-['Space_Grotesk'] !text-[35px] font-bold leading-none tracking-normal text-[#253D61]">Time Insights</p>
        <div className="pt-5">
          <p className="font-['Space_Grotesk'] text-xl font-normal leading-none tracking-normal text-gray-500 mb-1 text-[#253D61]">This Week</p>
          <p className="font-['Space_Grotesk'] text-xl font-bold leading-none tracking-normal text-[#5D5DFF]">{weekDisplay}</p>
        </div>
      </div>
      <div>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          popperPlacement="bottom-end"
          customInput={
            <div className="!font-['Space_Grotesk'] border border-gray-300 rounded-lg px-4 py-2 text-sm cursor-pointer  text-[#253D61] flex items-center gap-x-2">
            Duration: {durationDisplay} {<Image src="/images/Back icon.svg" alt="Select duration" width={20} height={24} className="flex-shrink-0" />}
            </div>
          }
        />
      </div>
    </header>
  );
};

export default DynamicHeader;
