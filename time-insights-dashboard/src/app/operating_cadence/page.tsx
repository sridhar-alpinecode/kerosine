"use client"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import Image from 'next/image';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import OperatingCadenceTable from "@/components/operatingCadenceTable";

export default function operating_cadence(){
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
        <>
        <header className="w-full flex items-end text-[#253D61] justify-between border-b border-b-[rgba(37,61,97,0.2)] pb-2">
            <div className="w-full md:w-[40%] ">
                <p className=" font-['Space_Grotesk'] font-bold !text-[42px] leading-[100%] tracking-[0] text-[#253D61]">Operating Cadence</p>
                <div className="pt-5">
                    <p className="font-['Space_Grotesk'] text-xl font-normal leading-none tracking-normal mb-1 text-[#253D61]">This Week</p>
                    <p className="font-['Space_Grotesk'] text-xl font-bold leading-none tracking-normal text-[#5D5DFF]">{weekDisplay}</p>
                </div>
            </div>  
            <div className=" w-full h-full md:w-[60%] flex items-end justify-end gap-3">
                 <DatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                        setDateRange(update);
                        }}
                        popperPlacement="bottom-end"
                        customInput={
                        <div className="!flex-1 !font-['Space_Grotesk'] border border-gray-300 rounded-md  !font-thin !text-[16px] px-3 !py-2 text-sm cursor-pointer  text-[#253D61] flex items-center gap-x-2">
                        Duration: {durationDisplay} {
                            <Image src="/images/Back icon.svg" alt="Select duration" width={20} height={24} className="flex-shrink-0" />
                            }
                        </div>
                        }
                    />
                    <div>
                        <Menu as="div" className="!flex-1 relative inline-block">
      <MenuButton className="w-full !font-['Space_Grotesk'] border border-gray-300 rounded-md  !font-thin !text-[16px] px-3 !py-1 text-sm cursor-pointer text-[#253D61] flex items-center gap-x-2">
            Team : Select
            <ChevronDownIcon aria-hidden="true" className=" size-5 text-gray-400" />
      </MenuButton>


      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Edit
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Archive
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Move
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Share
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Add to favorites
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
                    </div>
 
                        </div>      
    </header>
    <div className="mt-4 flex gap-2 mb-5">
        <Image src="/images/arrow-left.png" alt ="arrow left " width={20} height={20}/>
        <p className="font-space-grotesk font-medium text-[30px] leading-[100%] tracking-normal text-[#253D61]">Set Cadence</p>
    </div>

    <OperatingCadenceTable/>
    </>
    )
}