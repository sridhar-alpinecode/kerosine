"use client"
import { useState, Fragment } from 'react'; 
import Image from 'next/image';
import React from 'react';

type CadenceData = {
  eventName: string;
  frequency: 'Weekly' | 'Bi-Weekly' | string; 
  interactions: number;
  timePerInteraction: number;
  totalTimeRequired: number;
  percentTimePlanned: string;
  bestPracticeRange: string;
};

const initialTableData: CadenceData[] = [
    { eventName: '1 on 1s', frequency: 'Weekly', interactions: 1, timePerInteraction: 2, totalTimeRequired: 12, percentTimePlanned: '11%', bestPracticeRange: '10% - 20%' },
    { eventName: 'Team Meetings', frequency: 'Bi-Weekly', interactions: 3, timePerInteraction: 4, totalTimeRequired: 22, percentTimePlanned: '23%', bestPracticeRange: '10% - 20%' },
    { eventName: 'Co-Selling', frequency: 'Weekly', interactions: 1, timePerInteraction: 2, totalTimeRequired: 43, percentTimePlanned: '6.7%', bestPracticeRange: '10% - 20%' },
    { eventName: 'Call Review', frequency: 'Weekly', interactions: 1, timePerInteraction: 1, totalTimeRequired: 52, percentTimePlanned: '12.2%', bestPracticeRange: '10% - 20%' },
    { eventName: 'Internal Meetings', frequency: 'Weekly', interactions: 2, timePerInteraction: 1, totalTimeRequired: 11, percentTimePlanned: '2%', bestPracticeRange: '10% - 20%' },
    { eventName: 'External Meetings', frequency: 'Weekly', interactions: 3, timePerInteraction: 2, totalTimeRequired: 31, percentTimePlanned: '4.8%', bestPracticeRange: '10% - 20%' },
    { eventName: 'Block', frequency: 'Weekly', interactions: 3, timePerInteraction: 5, totalTimeRequired: 4, percentTimePlanned: '8.1%', bestPracticeRange: '10% - 20%' },
    { eventName: 'Open Calendar Time', frequency: 'Weekly', interactions: 5, timePerInteraction: 2, totalTimeRequired: 12, percentTimePlanned: '1.1%', bestPracticeRange: '10% - 20%' },
];

const OperatingCadenceTable = () => {
  // State to track which row's edit form is open (using its unique eventName)
  const [editingEventName, setEditingEventName] = useState<string | null>(null);

  // State to hold the data for the new "edit" row
  const [editFormData, setEditFormData] = useState<CadenceData | null>(null);
  
  // This is your original data
  const [tableData, setTableData] = useState(initialTableData);

  // When the edit icon is clicked
  const handleEditClick = (rowData: CadenceData) => {
    // If the clicked row is already being edited, close the form
    if (editingEventName === rowData.eventName) {
      setEditingEventName(null);
      setEditFormData(null);
    } else {
      // Otherwise, open the form for this row and populate it with the row's data
      setEditingEventName(rowData.eventName);
      setEditFormData({ ...rowData });
    }
  };

  // Close the edit form without saving
  const handleCancelClick = () => {
    setEditingEventName(null);
    setEditFormData(null);
  };

  // Update the form data state as the user types
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (editFormData) {
        // Handle numeric conversion for specific fields
        const isNumericField = ['interactions', 'timePerInteraction'].includes(name);
        setEditFormData({
            ...editFormData,
            [name]: isNumericField ? Number(value) : value,
        });
    }
  };


 const handleSaveClick = () => {
    // 1. Log the data, just like before
    console.log("Data to be sent to backend:", editFormData);
    
    // 2. NEW: Update the main table's state
    if (editFormData) {
      const updatedTableData = tableData.map(row => 
        // Find the row that was being edited by its name
        row.eventName === editingEventName ? editFormData : row
      );
      // Tell React to re-render the table with the new data
      setTableData(updatedTableData);
    }
    
    // 3. Close the edit form as usual
    setEditingEventName(null);
    setEditFormData(null);
  };


  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden font-sans">
      {/* Card Header (no changes here) */}
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="font-['Space_Grotesk'] !text-[24px] leading-[28px] font-bold text-[#253D61]">% of time planned vs. event</h1>
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="py-[0.5rem] px-[0.5rem] border border-[#5D5DFF] text-[#5D5DFF] text-base font-medium rounded-full hover:bg-indigo-50 transition-colors"
            >
              Preview Template
            </button>
            <button
              type="button"
              className="py-[0.5rem] px-[0.5rem] bg-[#5D5DFF] text-[#D0E6FA] text-base font-medium rounded-full bg-opacity-50 hover:bg-opacity-100 transition-all"
            >
              Publish Cadence
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full">
          {/* Table Head (no changes here) */}
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]"><div className="flex items-center gap-2"><p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'> Event Name</p></div></th>
              <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]"><div className="flex items-center gap-2"><p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'>Frequency</p><Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"/></div></th>
              <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]"><div className="flex items-center gap-2"><p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'># of interactions</p><Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"/></div></th>
              <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]"><div className="flex items-center gap-2 "><p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'>Time per interaction (hrs)</p><Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]" /></div></th>
              <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]"><div className="flex items-center gap-2"><p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'>Total time required (hrs)</p><Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"/></div></th>
              <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]"><div className="flex items-center gap-2"><p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'>% of time planned</p> <Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"/></div></th>
              <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]"><div className="flex items-center gap-2"><p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'> Best practice range</p><Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"/></div></th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row) => (
              // KEY CHANGE: Use React.Fragment to group the original row and the potential new edit row
              <Fragment key={row.eventName}>
                {/* 1. The original, read-only row is ALWAYS rendered */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-bold">
                    <div className="flex items-center gap-2">
                      {row.eventName}
                      <Image src="/images/questionmark.png" alt="info" width={16} height={16} className="!w-[16px] !h-[16px]"/>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium">{row.frequency}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium">{row.interactions}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium">{row.timePerInteraction}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium">{row.totalTimeRequired}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium">{row.percentTimePlanned}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium">{row.bestPracticeRange}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
                    <div className="flex items-center gap-4">
                      {/* Pass the entire 'row' object to the handler */}
                      <button onClick={() => handleEditClick(row)} className="relative h-5 w-3 hover:opacity-75 transition-opacity">
                        <Image src="/images/edit.png" width={16} height={8} alt="edit" className="w-[2rem] h-[1rem]"/>
                      </button>
                      <button className="relative h-5 w-3 hover:opacity-75 transition-opacity">
                        <Image src="/images/receipt-edit.png" alt="link" width={16} height={8} className="w-[2rem] h-[1rem]"/>
                      </button>
                      <button className="relative h-5 w-3 hover:opacity-75 transition-opacity">
                        <Image src="/images/add-circle.png" alt="delete" width={16} height={8} className="w-[2rem] h-[1rem]"/>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* 2. The new "edit" row is rendered CONDITIONALLY below the original row */}
                {editingEventName === row.eventName && editFormData && (
                  <tr className="bg-indigo-50">
                    <td className="px-6 py-4">
                      <input 
                        name="eventName" 
                        value={editFormData.eventName} 
                        onChange={handleFormChange}
                        className="p-1 border rounded w-full font-medium !text-[#253D61] !text-[16px] placeholder-[#253D61]"
                      />
                    </td>
                    <td className="px-6 py-4">
                      
                    <select name="frequency"
                        value={editFormData.frequency}
                        onChange={handleFormChange} 
                        className="p-1 border rounded w-auto text-gray-500 !text-[16px] !text-[#253D61] border border-[0.6px] border-[#0000002E]">
                    <option className="font-space-grotesk font-bold text-[16px] leading-[18px] tracking-[0%] !text-[#253D61] ">Select</option>
                    <option className="font-space-grotesk font-bold text-[16px] leading-[18px] tracking-[0%] text-[#253D61]">Weekly</option>
                    <option className="font-space-grotesk font-bold text-[16px] leading-[18px] tracking-[0%] text-[#253D61]">Bi-Weekly</option>
                    </select>
                        
                    
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="number" 
                        name="interactions"
                        value={editFormData.interactions}
                        onChange={handleFormChange}
                        className="p-1 border rounded w-full !text-[16px] !text-[#253D61] border border-[0.6px] border-[#0000002E] placeholder-[#253D61]" 
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="number" 
                        name="timePerInteraction"
                        value={editFormData.timePerInteraction}
                        onChange={handleFormChange}
                        className="p-1 border rounded w-full !text-[16px] !text-[#253D61] border border-[0.6px] border-[#0000002E] placeholder-[#253D61]" 
                      />
                    </td>
                    <td className="px-6 py-4 font-medium !text-[16px] !text-gray-500">{editFormData.totalTimeRequired}</td>
                    <td className="px-6 py-4 font-medium !text-[16px] !text-gray-500">{editFormData.percentTimePlanned}</td>
                    <td className="px-6 py-4 font-medium !text-[16px] !text-gray-500">{editFormData.bestPracticeRange}</td>
                    
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center gap-3">
                        <button onClick={handleSaveClick} className="!text-[16px] font-medium text-blue-600 hover:text-blue-800">Save</button>
                        <button className="relative h-5 w-3 hover:opacity-75 transition-opacity"> <Image src="/images/receipt-edit.png" alt="link" width={16} height={8} className="w-[2rem] h-[1rem]"/></button>
                        <button className="relative h-5 w-3 hover:opacity-75 transition-opacity"> <Image src="/images/add-circle.png" alt="delete" width={16} height={8} className="w-[2rem] h-[1rem]" /></button>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OperatingCadenceTable;