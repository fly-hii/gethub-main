
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import WeekCard from "./WeekCard";

interface WeekData {
  weekNumber: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  isSelected: boolean;
}

interface WeekNavigationProps {
  weeks: WeekData[];
  onWeekSelect: (weekNum: number) => void;
}

const WeekNavigation: React.FC<WeekNavigationProps> = ({ weeks, onWeekSelect }) => {
  const scrollToWeek = (direction: 'left' | 'right') => {
    const container = document.getElementById('week-scroll-container');
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Card className="bg-white/95 backdrop-blur-md shadow-xl shadow-purple-200/40 border border-purple-100/50 rounded-3xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Pregnancy Timeline
          </h3>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToWeek('left')}
            className="w-12 h-12 rounded-full border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
          </Button>
          
          <div className="overflow-x-auto flex-1">
            <div 
              id="week-scroll-container"
              className="flex gap-4 pb-2 min-w-max scroll-smooth"
            >
              {weeks.map((week) => (
                <WeekCard
                  key={week.weekNumber}
                  weekNumber={week.weekNumber}
                  startDate={week.startDate}
                  endDate={week.endDate}
                  isSelected={week.isSelected}
                  isActive={week.isActive}
                  onClick={() => onWeekSelect(week.weekNumber)}
                />
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToWeek('right')}
            className="w-12 h-12 rounded-full border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeekNavigation;
