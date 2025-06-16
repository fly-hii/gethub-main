
import React, { useState } from "react";
import PregnancyMapNav from "./PregnancyMapNav";
import DayView from "./DayView";
import MonthView from "./MonthView";
import TrimesterView from "./TrimesterView";
import NineMonthView from "./NineMonthView";
import HorizontalWeekCarousel from "./HorizontalWeekCarousel";

type CalendarView = "day" | "week" | "month" | "trimester" | "9month";

const PregnancyMap = () => {
  const [activeView, setActiveView] = useState<CalendarView>("week");
  
  // For demo purposes, we'll hardcode some values
  // In a real app, these would be calculated from the user's due date
  const today = new Date();
  const dueDate = new Date(today);
  dueDate.setDate(dueDate.getDate() + 140); // About 20 weeks from now
  
  const currentWeek = 18;
  const currentDays = 3;
  
  const getCurrentTrimester = (): 1 | 2 | 3 => {
    if (currentWeek <= 13) return 1;
    if (currentWeek <= 26) return 2;
    return 3;
  };
  
  const currentTrimester = getCurrentTrimester();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Modern header with pink theme */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent mb-4">
            Your Pregnancy Journey
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Track your beautiful journey with modern, intuitive tools designed for expecting mothers
          </p>
        </div>

        {/* Navigation with pink styling */}
        <div className="mb-8">
          <PregnancyMapNav activeView={activeView} setActiveView={setActiveView} />
        </div>
        
        {/* Content area with pink card styling */}
        <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-2xl shadow-pink-200/50 border border-pink-200/30 p-6 md:p-8">
          {activeView === "day" && (
            <DayView 
              date={today} 
              weekNum={currentWeek} 
              daysNum={currentDays} 
            />
          )}
          
          {activeView === "week" && (
            <HorizontalWeekCarousel />
          )}
          
          {activeView === "month" && (
            <MonthView 
              date={today} 
              weekNum={currentWeek} 
            />
          )}
          
          {activeView === "trimester" && (
            <TrimesterView 
              currentTrimester={currentTrimester}
              dueDate={dueDate}
            />
          )}
          
          {activeView === "9month" && (
            <NineMonthView 
              dueDate={dueDate}
              currentWeek={currentWeek}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PregnancyMap;
