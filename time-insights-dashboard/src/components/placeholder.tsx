import React from 'react';

type PlaceholderCardProps = {
  title: string;
  description: string;
  number:number;
};

const PlaceholderCard = ({ number,title, description }: PlaceholderCardProps) => {
  return (
  <div className="w-full max-w-screen-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      
      <div className="mb-3 flex items-center gap-1">
        {
        number === 0 && (
          <>
            <div className="h-1 w-4 bg-indigo-500" />
            <div className="h-1 w-4 bg-indigo-500" />
          </>
        )

       }
       { 
       number !== 0 &&(
        <div className="space-y-1">
        <p className="font-['Space_Grotesk'] text-[56px] font-bold leading-none tracking-normal text-indigo-500  w-[49px]">{number.toString().padStart(2, '0')}</p>
        </div>
      )
      }

      </div>
      

      <div className="flex items-center !justify-between">
        <div className="flex items-center gap-1 !justify-start">
          <h2 className="text-2xl text-gray-400">{title}</h2>
          <div className="flex h-5 w-5 cursor-help items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-500">
            ?
          </div>
        </div>

        <button className="rounded-full bg-[#5D5DFF] px-2 py-2 font-['Space_Grotesk'] text-[15px] text-[#D0E6FA] text-white transition-colors hover:bg-indigo-600">
          Add Team
        </button>
      </div>
      <hr className="my-5 border-gray-200" />
      <p className="text-left text-gray-400">{description}</p>
    </div>
  );
};

export default PlaceholderCard;