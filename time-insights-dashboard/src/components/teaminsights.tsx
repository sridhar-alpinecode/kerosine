import React from 'react';

type CardData = {
  title: string;
  description: string;
  buttonText: string;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
};

export const performanceCardData: CardData[] = [
  {
    title: 'Team Time Summary',
    description: 'Want to know which Manager is doing great w.r.t team time allocation?',
    buttonText: 'Add Team Member',
    backgroundColor: '#253D61', // Dark Slate Blue
    textColor: '#D0E6FA', // Light Gray
    buttonColor: '#5D5DFF', // Peter River Blue
    buttonTextColor: '#ffffff', // White
  },
  {
    title: 'Time Vs Team Performance',
    description: 'Want to know how Managers are spending time with Top Vs Low Performers',
    buttonText: 'Add Team Performance',
    backgroundColor: '#253D61', // Wet Asphalt
    textColor: '#D0E6FA', // Light Gray
    buttonColor: '#5D5DFF', // Amethyst
    buttonTextColor: '#ffffff', // White
  },
  // You can add more card objects here with different content and colors.
];

export const PerformanceCard = ({ title, description, buttonText, backgroundColor, textColor, buttonColor, buttonTextColor }: CardData) => {
  return (

    <div
      className="rounded-xl p-8 flex flex-col h-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
      style={{ backgroundColor: backgroundColor || '#2c3e50' }} // Fallback to default color
    >
      <div className="flex-grow">
        <h2
          className="text-[31px] font-bold mb-3 text-[#FFFFFF]"
          
        >
          {title}
        </h2>
        {/* Card Description with dynamic text color */}
        <p
          className='!text-[15px]'
          style={{ color: textColor || '#bdc3c7' }}
        >
          {description}
        </p>
      </div>
      {/* Action Button with dynamic colors */}
      <div className="mt-8">
        <button
          className="!text-[15px] py-3 px-6 rounded-lg sm:w-auto focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
          style={{
            backgroundColor: buttonColor || '#3498db',
            color: buttonTextColor || '#ffffff',
          } as React.CSSProperties}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};








