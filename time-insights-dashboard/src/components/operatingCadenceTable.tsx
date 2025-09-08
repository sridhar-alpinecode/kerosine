import Image from 'next/image';

// Define the structure for a single row of data
type CadenceData = {
  eventName: string;
  frequency: 'Weekly' | 'Bi-Weekly';
  interactions: number;
  timePerInteraction: number;
  totalTimeRequired: number;
  percentTimePlanned: string;
  bestPracticeRange: string;
};

// Sample data that matches the provided image
const tableData: CadenceData[] = [
  { eventName: '1 on 1s', frequency: 'Weekly', interactions: 1, timePerInteraction: 25, totalTimeRequired: 12, percentTimePlanned: '11%', bestPracticeRange: '10% - 20%' },
  { eventName: 'Team Meetings', frequency: 'Bi-Weekly', interactions: 3, timePerInteraction: 14, totalTimeRequired: 22, percentTimePlanned: '23%', bestPracticeRange: '10% - 20%' },
  { eventName: 'Co-Selling', frequency: 'Weekly', interactions: 1, timePerInteraction: 22, totalTimeRequired: 43, percentTimePlanned: '6.7%', bestPracticeRange: '10% - 20%' },
  { eventName: 'Call Review', frequency: 'Weekly', interactions: 1, timePerInteraction: 17, totalTimeRequired: 52, percentTimePlanned: '12.2%', bestPracticeRange: '10% - 20%' },
  { eventName: 'Internal Meetings', frequency: 'Weekly', interactions: 2, timePerInteraction: 15, totalTimeRequired: 11, percentTimePlanned: '2%', bestPracticeRange: '10% - 20%' },
  { eventName: 'External Meetings', frequency: 'Weekly', interactions: 3, timePerInteraction: 22, totalTimeRequired: 31, percentTimePlanned: '4.8%', bestPracticeRange: '10% - 20%' },
  { eventName: 'Block', frequency: 'Weekly', interactions: 3, timePerInteraction: 54, totalTimeRequired: 4, percentTimePlanned: '8.1%', bestPracticeRange: '10% - 20%' },
  { eventName: 'Open Calendar Time', frequency: 'Weekly', interactions: 5, timePerInteraction: 23, totalTimeRequired: 12, percentTimePlanned: '1.1%', bestPracticeRange: '10% - 20%' },
];

const OperatingCadenceTable = () => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden font-sans">
      {/* Card Header */}
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

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
  <tr>
    {/* Remove flex classes from <th>, add a <div> inside */}
    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]">
      <div className="flex items-center gap-2">
       <p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'> Event Name</p>
      </div>
    </th>
    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]">
      <div className="flex items-center gap-2">
        <p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'>Frequency</p>
        <Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"
/>
      </div>
    </th>
    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]">
      <div className="flex items-center gap-2">
        <p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'># of interactions</p>
        <Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"/>
      </div>
    </th>
    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]">
      <div className="flex items-center gap-2 ">
        <p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'>Time per interaction (hrs)</p>
        <Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]" />
      </div>
    </th>
    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]">
      <div className="flex items-center gap-2">
       <p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'>Total time required (hrs)</p>
        <Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"/>
      </div>
    </th>
    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]">
      <div className="flex items-center gap-2">
       <p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'>% of time planned</p> 
        <Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"/>
      </div>
    </th>
    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-[#253D61]">
      <div className="flex items-center gap-2">
       <p className='font-[500] text-[16px] leading-[10px] tracking-[0] font-space-grotesk'> Best practice range</p>
        <Image src="/images/arrow-down.png" alt="Sort icon" width={24} height={24}   className="!w-[16px] !h-[16px]"/>
      </div>
    </th>
    {/* You'll also need a header for the actions column */}
    <th scope="col" className="relative px-6 py-3">
      <span className="sr-only">Actions</span>
    </th>
  </tr>
</thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row) => (
              <tr key={row.eventName} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-bold">
                  <div className="flex items-center gap-2">
                    {row.eventName}
                    <Image src="/images/questionmark.png" alt="info" width={16} height={16} className="!w-[16px] !h-[16px]"/>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium hover:opacity-75">{row.frequency}</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium hover:opacity-75">{row.interactions}</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium hover:opacity-75">{row.timePerInteraction}</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium hover:opacity-75">{row.totalTimeRequired}</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium hover:opacity-75">{row.percentTimePlanned}</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-[#253D61] font-medium hover:opacity-75">{row.bestPracticeRange}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
                  <div className="flex items-center gap-4">
                   <button className="relative h-5 w-3 hover:opacity-75 transition-opacity"> <Image src="/images/edit.png" fill alt="edit" className="w-[2rem] h-[1rem]"/></button>
                   <button className="relative h-5 w-3 hover:opacity-75 transition-opacity"> <Image src="/images/receipt-edit.png" fill alt="link" className="w-[2rem] h-[1rem]"/></button>
                   <button className="relative h-5 w-3 hover:opacity-75 transition-opacity"> <Image src="/images/add-circle.png" fill alt="delete" className="w-[2rem] h-[1rem]" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OperatingCadenceTable;