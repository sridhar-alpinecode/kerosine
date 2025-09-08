import PlaceholderCard from '@/components/placeholder';
import StatCard from '@/components/statcard';
import  { PerformanceCard, performanceCardData} from '@/components/teaminsights';
import '@/app/globals.css'
import "react-datepicker/dist/react-datepicker.css";
import DynamicHeader from '@/components/dynamicheader';


const timeWithoutTeamData = [
  { title: 'Call review', value: '7.5', change: 2, hours: '5.8', expected: '6%-10%' ,},
  { title: 'Internal Meets', value: '15.0', change: -5, hours: '5.8', expected: '10%-16%' },
  { title: 'External Meets', value: '12.5', change: 5, hours: '5.8', expected: '20%-25%' },
  { title: 'Block', value: '2.5', change: 2, hours: '5.8', expected: '4%-8%' },
];

export default function Time_Insights() {
  return (
    <div >
      {/* Header Section */}
      <DynamicHeader/>
     <hr className="mx-5 border border-[#253D61] opacity-50 " />

      {/* Time with team Section */}
      <section  className="font-['Space_Grotesk'] pb-[16px] mt-10">
        <p className="font-['Space_Grotesk'] !text-[25px] font-medium leading-none tracking-normal text-[#253D61] pl-5 pb-4">Time with team</p>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 font-['space_Grotesk']">
          <PlaceholderCard title="1 on 1s" description="Add team members to view data" number={0}/>
          <PlaceholderCard title="Team Meets" description="Add team members to view data" number={0}/>
          <PlaceholderCard title="Co-Selling" description="Expected: 20%-22%" number ={0}/>
        </div>
      </section>
      <hr className="mx-5 border border-[#253D61] opacity-50" />
      {/* Time without team Section */}
      <section className="mt-10">
        <h2 className="font-['Space_Grotesk'] !text-[25px] font-medium leading-none tracking-normal text-[#253D61] pl-5 pb-4">Time without team</h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 font-['space_Grotesk'] pb-[16px]" >
          {timeWithoutTeamData.map((data) => (
            <StatCard key={data.title} {...data} />
          ))}
        </div>
      </section>
      <hr className="mx-5 border border-[#253D61] opacity-50" />

      {/* Open Section */}
        <h2 className=" !text-[25px] mt-10  text-[#253D61] font-['space_Grotesk'] pl-5 pb-4 " >Open</h2>
      <section className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 mx-5" style={{paddingBottom:'1em'}}>
        <StatCard 
          title="Open Calendar" 
          value="44.5" 
          change={2} 
          hours="5.8" 
          expected="12%-15%"
          bgColorClass='bg-[#4747C7]'
        />
      </section>

      {/* time insights section  */}
     <hr className="mx-5 border border-[#253D61] opacity-50" />
      <section className="mt-10">
        <h2 className="font-['Space_Grotesk'] !text-[25px] font-medium leading-none tracking-normal text-gray-700 mx-5 pb-4">TEAM INSIGHTS</h2>
      
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-2 max-w[448px] mx-5">
          {performanceCardData.map((card, index) => (
            <PerformanceCard
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              backgroundColor={card.backgroundColor}
              textColor={card.textColor}
              buttonColor={card.buttonColor}
              buttonTextColor={card.buttonTextColor}
            />
          ))}
        </div>

    </section>
    </div>
  );
}