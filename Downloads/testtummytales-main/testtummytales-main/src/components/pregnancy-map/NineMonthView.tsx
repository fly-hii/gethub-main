
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Calendar, Heart, Baby } from "lucide-react";

interface NineMonthViewProps {
  dueDate: Date;
  currentWeek: number;
}

const NineMonthView: React.FC<NineMonthViewProps> = ({ dueDate, currentWeek }) => {
  // Calculate current trimester based on current week
  const getCurrentTrimester = (): 1 | 2 | 3 => {
    if (currentWeek <= 13) return 1;
    if (currentWeek <= 26) return 2;
    return 3;
  };
  
  const currentTrimester = getCurrentTrimester();
  
  const getNineMonthProgram = () => {
    return [
      {
        trimester: 1,
        title: "Foundation Phase",
        months: [
          {
            month: 1,
            title: "Conception & Implantation",
            highlights: ["Fertilization occurs", "Embryo implants", "First missed period", "Start prenatal vitamins"],
            babyDevelopment: "Cell division begins, neural tube forms",
            motherExperience: "May not know pregnant yet, possible fatigue"
          },
          {
            month: 2, 
            title: "Organ Formation",
            highlights: ["Morning sickness may begin", "First doctor visit", "Heartbeat detectable", "Major organs forming"],
            babyDevelopment: "Brain, heart, spine develop rapidly",
            motherExperience: "Nausea, breast tenderness, frequent urination"
          },
          {
            month: 3,
            title: "First Trimester Completion", 
            highlights: ["First ultrasound", "Genetic testing options", "Morning sickness peaks", "Risk of miscarriage decreases"],
            babyDevelopment: "All major organs formed, fingers and toes visible",
            motherExperience: "Energy may return, appetite changes"
          }
        ]
      },
      {
        trimester: 2,
        title: "Growth & Discovery Phase",
        months: [
          {
            month: 4,
            title: "Feeling Better",
            highlights: ["Gender may be visible", "Anatomy scan", "Energy returns", "Show begins"],
            babyDevelopment: "Facial features clear, hair grows, movements increase",
            motherExperience: "Morning sickness subsides, baby bump visible"
          },
          {
            month: 5,
            title: "Halfway Point",
            highlights: ["Feel baby movements", "Detailed ultrasound", "Maternity clothes needed", "Glucose screening"],
            babyDevelopment: "Can hear sounds, develops sleep patterns",
            motherExperience: "Quickening felt, weight gain accelerates"
          },
          {
            month: 6,
            title: "Viability Milestone",
            highlights: ["Baby viable outside womb", "Braxton Hicks may start", "Nursery planning", "Prenatal classes"],
            babyDevelopment: "Eyes open, brain develops rapidly",
            motherExperience: "Back pain may begin, shortness of breath"
          }
        ]
      },
      {
        trimester: 3,
        title: "Preparation & Birth Phase",
        months: [
          {
            month: 7,
            title: "Rapid Growth",
            highlights: ["Baby shower planning", "Birth plan creation", "Hospital bag prep", "Weekly appointments begin"],
            babyDevelopment: "Bones harden, fat accumulates, lungs mature",
            motherExperience: "Increased discomfort, frequent bathroom trips"
          },
          {
            month: 8,
            title: "Final Preparations",
            highlights: ["Maternity leave planning", "Car seat installation", "Hospital tour", "Birth plan finalized"],
            babyDevelopment: "Brain development peaks, movements may decrease",
            motherExperience: "Difficulty sleeping, pelvic pressure increases"
          },
          {
            month: 9,
            title: "Birth & Arrival",
            highlights: ["Labor signs awareness", "Final appointments", "Baby arrives!", "New parent journey begins"],
            babyDevelopment: "Full term, ready for birth, head may engage",
            motherExperience: "Nesting instinct, anticipation, labor begins"
          }
        ]
      }
    ];
  };

  const getTrimesterColors = (trimester: number) => {
    switch (trimester) {
      case 1:
        return {
          bg: "from-pink-200 via-rose-200 to-pink-300",
          border: "border-pink-300",
          text: "text-rose-800",
          accent: "bg-pink-500",
          hover: "hover:from-pink-300 hover:via-rose-300 hover:to-pink-400"
        };
      case 2:
        return {
          bg: "from-rose-200 via-pink-200 to-rose-300",
          border: "border-rose-300",
          text: "text-pink-800",
          accent: "bg-rose-500",
          hover: "hover:from-rose-300 hover:via-pink-300 hover:to-rose-400"
        };
      case 3:
        return {
          bg: "from-pink-300 via-rose-300 to-pink-400",
          border: "border-pink-400",
          text: "text-rose-900",
          accent: "bg-pink-600",
          hover: "hover:from-pink-400 hover:via-rose-400 hover:to-pink-500"
        };
      default:
        return {
          bg: "from-gray-200 to-gray-300",
          border: "border-gray-300",
          text: "text-gray-800",
          accent: "bg-gray-500",
          hover: "hover:from-gray-300 hover:to-gray-400"
        };
    }
  };

  const programData = getNineMonthProgram();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full">
              <Baby className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent">
              9-Month Pregnancy Program
            </h1>
            <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full">
              <Heart className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200">
            <p className="text-2xl font-semibold text-gray-700 mb-2">
              Currently in Week <span className="text-pink-600">{currentWeek}</span>
            </p>
            <p className="text-lg text-gray-600">
              Trimester <span className="font-bold text-rose-600">{currentTrimester}</span> - Your Complete Journey Guide
            </p>
          </div>
        </div>
        
        {/* Trimesters with All Months Displayed */}
        <div className="space-y-12">
          {programData.map((trimesterData) => {
            const colors = getTrimesterColors(trimesterData.trimester);
            const isCurrent = currentTrimester === trimesterData.trimester;
            
            return (
              <div key={trimesterData.trimester} className="group">
                {/* Trimester Header */}
                <div className={cn(
                  "p-8 rounded-3xl shadow-xl mb-8",
                  `bg-gradient-to-br ${colors.bg} ${colors.border} border-2`,
                  isCurrent && "ring-4 ring-pink-400 ring-opacity-60 shadow-pink-200"
                )}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={cn(
                        "p-4 rounded-full text-white shadow-lg",
                        colors.accent
                      )}>
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div className="text-left">
                        <h3 className={cn("text-3xl font-bold mb-2", colors.text)}>
                          Trimester {trimesterData.trimester}
                        </h3>
                        <p className={cn("text-xl font-semibold", colors.text)}>
                          {trimesterData.title}
                        </p>
                        <p className={cn("text-sm opacity-80", colors.text)}>
                          Months {(trimesterData.trimester - 1) * 3 + 1}-{trimesterData.trimester * 3}
                        </p>
                      </div>
                    </div>
                    {isCurrent && (
                      <div className="px-6 py-3 bg-pink-500 text-white rounded-full text-lg font-bold animate-pulse shadow-lg">
                        ✨ Current Phase
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Months Grid - Always Visible */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {trimesterData.months.map((monthData) => (
                    <MonthProgramCard 
                      key={monthData.month}
                      monthData={monthData}
                      isCurrentMonth={currentWeek >= ((monthData.month - 1) * 4) && currentWeek <= (monthData.month * 4)}
                      trimesterColors={colors}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Progress Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200 mt-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Your Journey Progress
            </h3>
          </div>
          
          <div className="relative">
            <div className="w-full bg-pink-100 rounded-full h-6 shadow-inner">
              <div 
                className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 h-6 rounded-full shadow-lg transition-all duration-1000 ease-out relative overflow-hidden"
                style={{ width: `${(currentWeek / 40) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex justify-between mt-3 text-lg font-semibold">
              <span className="text-gray-600">Week 1</span>
              <span className="text-center bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent font-bold">
                Week {currentWeek} of 40
              </span>
              <span className="text-gray-600">Week 40</span>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                You're <span className="font-bold text-pink-600">{Math.round((currentWeek / 40) * 100)}%</span> through your pregnancy journey! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MonthProgramCardProps {
  monthData: {
    month: number;
    title: string;
    highlights: string[];
    babyDevelopment: string;
    motherExperience: string;
  };
  isCurrentMonth: boolean;
  trimesterColors: {
    bg: string;
    border: string;
    text: string;
    accent: string;
    hover: string;
  };
}

const MonthProgramCard: React.FC<MonthProgramCardProps> = ({
  monthData,
  isCurrentMonth,
  trimesterColors,
}) => {
  return (
    <Link to={`/month/${monthData.month}`} className="block group">
      <div className={cn(
        "relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl",
        "bg-white border-2 shadow-lg h-64 flex flex-col",
        isCurrentMonth 
          ? "border-pink-400 shadow-pink-200 ring-4 ring-pink-300 ring-opacity-50" 
          : "border-gray-200 hover:border-pink-300",
        "group-hover:shadow-xl"
      )}>
        {/* Header */}
        <div className="text-center mb-4">
          <div className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg mb-3 shadow-lg",
            trimesterColors.accent
          )}>
            {monthData.month}
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">{monthData.title}</h4>
          {isCurrentMonth && (
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg animate-pulse">
              ✨ Current Month
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 space-y-4 overflow-y-auto">
          {/* Highlights */}
          <div className="bg-pink-50 rounded-lg p-4">
            <h5 className="font-semibold text-pink-800 mb-2">Key Highlights</h5>
            <ul className="text-sm text-pink-700 space-y-1">
              {monthData.highlights.slice(0, 2).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Baby Development */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h5 className="font-semibold text-blue-800 mb-2">👶 Baby Development</h5>
            <p className="text-sm text-blue-700">{monthData.babyDevelopment}</p>
          </div>
        </div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </div>
    </Link>
  );
};

export default NineMonthView;
