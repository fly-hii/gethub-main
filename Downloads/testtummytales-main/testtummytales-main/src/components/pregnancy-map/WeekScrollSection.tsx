
import React, { useState } from "react";
import { Baby } from "lucide-react";
import WeekNavigation from "./WeekNavigation";
import StatsCards from "./StatsCards";
import SectionContent from "./SectionContent";

interface WeekScrollSectionProps {
  currentWeek: number;
}

const WeekScrollSection: React.FC<WeekScrollSectionProps> = ({ currentWeek }) => {
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const generateWeeks = () => {
    const weeks = [];
    const today = new Date();
    
    for (let i = 1; i <= 40; i++) {
      const weekStartDate = new Date(today);
      weekStartDate.setDate(weekStartDate.getDate() - (currentWeek - i) * 7);
      
      const weekEndDate = new Date(weekStartDate);
      weekEndDate.setDate(weekEndDate.getDate() + 6);
      
      weeks.push({
        weekNumber: i,
        startDate: weekStartDate,
        endDate: weekEndDate,
        isActive: i === currentWeek,
        isSelected: i === selectedWeek
      });
    }
    return weeks;
  };

  const weeks = generateWeeks();

  const handleWeekSelect = (weekNum: number) => {
    setSelectedWeek(weekNum);
  };

  const formatDateRange = (startDate: Date, endDate: Date) => {
    const startStr = startDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
    const endStr = endDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
    return `${startStr} - ${endStr}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Baby className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">Week {selectedWeek}</h1>
          </div>
          <p className="text-lg text-gray-600">
            {formatDateRange(weeks[selectedWeek - 1]?.startDate, weeks[selectedWeek - 1]?.endDate)}
          </p>
        </div>

        {/* Collapsible Sections */}
        <SectionContent 
          openSection={openSection} 
          setOpenSection={setOpenSection} 
        />

        {/* Stats Cards */}
        <StatsCards selectedWeek={selectedWeek} />

        {/* Week Navigation */}
        <WeekNavigation 
          weeks={weeks} 
          onWeekSelect={handleWeekSelect} 
        />
      </div>
    </div>
  );
};

export default WeekScrollSection;
