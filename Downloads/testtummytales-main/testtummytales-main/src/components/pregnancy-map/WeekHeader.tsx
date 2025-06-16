
import React from "react";

interface WeekHeaderProps {
  weekNum: number;
  startDate: Date;
  endDate: Date;
}

const WeekHeader: React.FC<WeekHeaderProps> = ({ weekNum, startDate, endDate }) => {
  const weekDays = [];
  const currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    weekDays.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  const startDateStr = startDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
  
  const endDateStr = endDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="notebook-title">
          Week {weekNum}
        </h2>
        <p className="notebook-text">
          {startDateStr} - {endDateStr}
        </p>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-6">
        {weekDays.map((day, index) => (
          <div 
            key={index} 
            className="text-center border border-gray-300 p-2 rounded-md"
          >
            <p className="text-xs text-gray-500">
              {day.toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <p className="notebook-text text-lg">
              {day.getDate()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeekHeader;
