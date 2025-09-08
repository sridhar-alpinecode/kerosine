"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const navImagePaths = [
  { name: 'Time Insights', path: '/images/security-time.png',href:'/time_insights'},
  { name: 'Smart Insights', path: '/images/temp_preferences_custom.png',href:'/smart_insights'},
  { name: 'Operating Cadence', path: '/images/chart.png',href:'/operating_cadence'},
  { name: 'Managers', path: '/images/profile-2user.png',href:'/some'},
  { name: 'Sellers', path: '/images/profile.png',href:'/somenath'},
  { name: 'Team Management', path: '/images/people.png',href:'/subu'},
  { name: 'Settings', path: '/images/settings.png',href:'/dubbu'},
  { name: 'AI Chat', path: '/images/setting-2.png',href:'/gabbu'},
];

const Sidebar = () => {
const name="Shrutika Mane"
const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string|null>(null);
  return (
   <aside className="w-50 h-screen text-white flex flex-col overflow-y-scroll max-h-screen bg-[#253D61]">
  {/* Header with Logo Icon and Text */}
  <Link href='/'>
    <div className="flex  px-2  pt-[23px] pb-6 fixed  z-50 bg-[#253D61] pr-6 border-b border-[#B5D3EF]/50 border-opacity-50" >
      <div
        style={{
          position: 'relative',
          mixBlendMode: 'screen',
          width: '45px',
          height: '41px',
          left: '14px',
          flexShrink: 0,
        }}
      >
        <Image src="/images/logo.svg" alt="Kerosene Icon" width={45} height={41} />
      </div>

      <div style={{ marginLeft: '12px', display: 'flex', alignItems: 'flex-end' }}>
        <span
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '34px',
            lineHeight: '100%',
            letterSpacing: '0%',
            opacity: 1,
            userSelect: 'none',
            color:'#D0E6FA'
          }}
        >
          kerosene
        </span>
        <span
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '16.43px',
            lineHeight: '100%',
            letterSpacing: '0%',
            opacity: 1,
            marginLeft: '4px',
            userSelect: 'none',
            alignSelf: 'flex-start', 
            color:'#D0E6FA'
          }}
        >
          io
        </span>
      </div>
    </div>
  </Link>

                
      <nav className="flex pt-[10px] mt-[85px] text-[#D0E6FA]">
      <ul className='w-full'>
        {navImagePaths.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className="flex items-center transition-colors"
                style={{
                  backgroundColor: isActive
                    ? 'rgba(173, 206, 235, 0.3)' 
                    : item.name === hoveredItem
                    ? 'rgba(173, 206, 235, 0.1)' 
                    : 'transparent',            
                  width: '100%',
                  color: '#D0E6FA',
                  textAlign: 'left', 
                  fontWeight: isActive ? 500 : 400, 
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '20px',
                  padding: '18px 8px 12px 24px', 
                  gap: '8px',
                }}
              >
                <Image
                  src={item.path}
                  alt={`${item.name} icon`}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <span className="truncate">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
      <div className="mt-auto fixed bottom-0 z-50 flex gap-3 items-center p-1 pr-0 bg-[#253D61] border-t border-[#B5D3EF] border-opacity-50">
         <Image
          src={'/images/mask group.png'}
          alt={`${name}'s profile picture`}
          width={40} 
          height={40}
          className="rounded-full object-cover" 
        />
        <span className="font-small flex-grow truncate text-[#FFFFF] font-['Space_Grotesk']">
          {name}
        </span>
        <div className='pl-[28px]'>
           <Image
          src={'/images/arrow-circle-down.png'}
          alt="options arrow"
          width={25}
          height={20}
          
          className="flex-shrink-0" 
        />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
