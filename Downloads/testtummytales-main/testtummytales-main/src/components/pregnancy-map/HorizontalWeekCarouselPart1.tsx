
import React, { useState, useEffect, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Baby, Sparkles, Star } from "lucide-react";

interface WeekData {
  weekNum: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
}

interface HorizontalWeekCarouselPart1Props {
  selectedWeek: number;
  onWeekSelect: (weekNum: number) => void;
}

const HorizontalWeekCarouselPart1: React.FC<HorizontalWeekCarouselPart1Props> = ({ selectedWeek, onWeekSelect }) => {
  const [api, setApi] = useState<CarouselApi>();
  
  const today = new Date();
  const currentWeek = 18;
  
  // Generate all 40 weeks
  const generateWeeks = (): WeekData[] => {
    const weeks = [];
    for (let i = 1; i <= 40; i++) {
      const weekStartDate = new Date(today);
      weekStartDate.setDate(weekStartDate.getDate() - (currentWeek - i) * 7);
      
      const weekEndDate = new Date(weekStartDate);
      weekEndDate.setDate(weekEndDate.getDate() + 6);
      
      weeks.push({
        weekNum: i,
        startDate: weekStartDate,
        endDate: weekEndDate,
        isActive: i === currentWeek
      });
    }
    return weeks;
  };

  const weeks = generateWeeks();

  // Auto-scroll to current week on component mount
  useEffect(() => {
    if (api) {
      const currentWeekIndex = currentWeek - 1;
      api.scrollTo(currentWeekIndex, false);
    }
  }, [api, currentWeek]);

  // Handle week selection and auto-scroll
  const handleWeekSelect = useCallback((weekNum: number) => {
    onWeekSelect(weekNum);
    if (api) {
      const weekIndex = weekNum - 1;
      api.scrollTo(weekIndex, true);
    }
  }, [api, onWeekSelect]);

  // Auto-scroll to selected week when it changes
  useEffect(() => {
    if (api && selectedWeek) {
      const selectedWeekIndex = selectedWeek - 1;
      api.scrollTo(selectedWeekIndex, true);
    }
  }, [selectedWeek, api]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto py-4 sm:py-6 lg:py-8 px-2 sm:px-4">
        {/* Enhanced Header with Animation */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-4 mb-4 animate-fade-in">
            <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-xl animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500">
              Your Magical Journey
            </h1>
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full shadow-xl animate-pulse">
              <Baby className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 font-medium animate-fade-in">
            Every week brings new wonders and milestones ✨
          </p>
        </div>
        
        {/* Enhanced Horizontal Week Navigation */}
        <div className="mb-0">
          <Carousel 
            className="w-full max-w-7xl mx-auto"
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
              skipSnaps: false,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
              {weeks.map((week) => (
                <CarouselItem key={week.weekNum} className="pl-2 sm:pl-3 md:pl-4 basis-1/4 sm:basis-1/5 md:basis-1/7 lg:basis-1/9 xl:basis-1/12">
                  <Card 
                    className={`cursor-pointer transition-all duration-700 transform hover:scale-110 hover:rotate-1 ${
                      selectedWeek === week.weekNum 
                        ? 'bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 text-white shadow-2xl ring-4 ring-pink-300 scale-110 animate-pulse' 
                        : week.isActive 
                          ? 'bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 text-white shadow-xl ring-2 ring-pink-300 scale-105'
                          : 'bg-gradient-to-br from-white via-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 shadow-lg hover:shadow-2xl border-2 border-pink-200'
                    }`}
                    onClick={() => handleWeekSelect(week.weekNum)}
                  >
                    <CardContent className="p-2 sm:p-3 text-center relative overflow-hidden">
                      {/* Decorative Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1 right-1">
                          <Star className="w-3 h-3" />
                        </div>
                        <div className="absolute bottom-1 left-1">
                          <Heart className="w-2 h-2" />
                        </div>
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center space-y-1">
                        <Calendar className={`w-3 h-3 sm:w-4 sm:h-4 ${selectedWeek === week.weekNum || week.isActive ? 'text-white' : 'text-pink-500'}`} />
                        <p className="text-xs font-bold">Week</p>
                        <p className="text-lg sm:text-xl font-bold">{week.weekNum}</p>
                        <p className="text-xs opacity-90 hidden sm:block font-medium">
                          {formatDate(week.startDate)}
                        </p>
                        {week.isActive && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-8 lg:-left-16 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 border-2 border-white shadow-xl text-white" />
            <CarouselNext className="hidden sm:flex -right-8 lg:-right-16 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 border-2 border-white shadow-xl text-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HorizontalWeekCarouselPart1;
