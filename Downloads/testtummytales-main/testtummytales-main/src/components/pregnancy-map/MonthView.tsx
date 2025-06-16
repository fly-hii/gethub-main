
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format, getDay, isSameDay } from "date-fns";

interface MonthViewProps {
  date: Date;
  weekNum: number;
}

const MonthView: React.FC<MonthViewProps> = ({ date, weekNum }) => {
  const today = new Date();
  
  const monthName = format(date, 'MMMM yyyy');
  
  // Generate key pregnancy events for demonstration
  const events = [
    {
      date: addDays(today, 3),
      title: "OB/GYN Appointment",
      type: "appointment"
    },
    {
      date: addDays(today, 7),
      title: "Ultrasound",
      type: "test"
    },
    {
      date: addDays(today, 12),
      title: "Childbirth Class",
      type: "class"
    },
    {
      date: addDays(today, 18),
      title: "Blood Test",
      type: "test"
    }
  ];

  const renderDayContent = (day: Date) => {
    const dayEvents = events.filter(event => isSameDay(day, event.date));
    
    return (
      <div className="h-full">
        <div className="text-right font-bold">{format(day, 'd')}</div>
        <div className="mt-1">
          {dayEvents.map((event, index) => (
            <div
              key={index}
              className={`text-xs p-1 mb-1 rounded truncate ${
                event.type === "appointment" ? "bg-tummytales-blue" :
                event.type === "test" ? "bg-tummytales-pink" : 
                "bg-tummytales-yellow"
              }`}
            >
              {event.title}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="notebook-paper p-6">
      <div className="mb-6 text-center">
        <h2 className="notebook-title">
          {monthName}
        </h2>
        <p className="notebook-text">
          Currently in week {weekNum} of your pregnancy
        </p>
      </div>
      
      <div className="bg-white border border-gray-300 rounded-md overflow-hidden">
        <Calendar 
          mode="default" 
          selected={today}
          className="p-3 pointer-events-auto" 
        />
      </div>
      
      <div className="mt-6 space-y-2">
        <h3 className="notebook-heading">Upcoming Events</h3>
        
        {events.map((event, index) => (
          <div 
            key={index}
            className={`p-3 border rounded-md flex justify-between items-center ${
              event.type === "appointment" ? "bg-tummytales-blue/20 border-tummytales-blue" :
              event.type === "test" ? "bg-tummytales-pink/20 border-tummytales-pink" : 
              "bg-tummytales-yellow/20 border-tummytales-yellow"
            }`}
          >
            <div>
              <p className="notebook-text font-bold">{event.title}</p>
              <p className="text-sm">{format(event.date, 'EEEE, MMMM d')}</p>
            </div>
            <Button size="sm" variant="outline">Reschedule</Button>
          </div>
        ))}
        
        <Button variant="outline" className="w-full mt-4 border-dashed">
          + Add New Event
        </Button>
      </div>
    </div>
  );
};

export default MonthView;
