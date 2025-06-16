
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart } from "lucide-react";

interface WeekCardProps {
  weekNumber: number;
  startDate: Date;
  endDate: Date;
  isSelected: boolean;
  isActive: boolean;
  onClick: () => void;
}

const WeekCard: React.FC<WeekCardProps> = ({
  weekNumber,
  startDate,
  endDate,
  isSelected,
  isActive,
  onClick
}) => {
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
    <Card
      className={`cursor-pointer transition-all duration-500 min-w-[140px] shrink-0 hover:scale-105 ${
        isSelected
          ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-white shadow-xl shadow-purple-300/50 ring-2 ring-purple-300 transform scale-105'
          : isActive
            ? 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 text-white shadow-lg shadow-blue-300/40'
            : 'bg-white/90 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 shadow-md shadow-purple-100/30 border border-purple-100/50'
      }`}
      onClick={onClick}
    >
      <CardContent className="p-4 text-center relative overflow-hidden">
        {/* Decorative elements */}
        {(isSelected || isActive) && (
          <>
            <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-full -mr-4 -mt-4"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-white/10 rounded-full -ml-3 -mb-3"></div>
          </>
        )}
        
        <div className="flex items-center justify-center gap-2 mb-3">
          <Calendar className={`w-4 h-4 ${isSelected || isActive ? 'text-white' : 'text-purple-500'}`} />
          <p className="text-xs font-bold uppercase tracking-wider">Week</p>
        </div>
        
        <div className="relative">
          <p className="text-2xl font-bold mb-2 relative z-10">{weekNumber}</p>
          {isActive && (
            <Heart className="w-4 h-4 text-red-300 absolute -top-1 -right-1 animate-pulse" />
          )}
        </div>
        
        <p className="text-xs opacity-90 font-medium">
          {formatDateRange(startDate, endDate)}
        </p>
      </CardContent>
    </Card>
  );
};

export default WeekCard;
