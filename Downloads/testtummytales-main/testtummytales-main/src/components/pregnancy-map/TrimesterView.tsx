import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Calendar, Heart, Baby } from "lucide-react";

interface TrimesterViewProps {
  currentTrimester: 1 | 2 | 3;
  dueDate: Date;
}

const TrimesterView: React.FC<TrimesterViewProps> = ({ currentTrimester, dueDate }) => {
  // Calculate current month based on week (assuming we're in week 18, which is month 5)
  const currentWeek = 18; // This should come from props in a real implementation
  const currentMonth = Math.ceil(currentWeek / 4.33); // Approximate month calculation

  const getTrimesterData = () => {
    return [
      {
        trimester: 1,
        title: "First Trimester",
        description: "Foundation building phase - your pregnancy begins!",
        weeks: "1-13",
        color: "from-pink-400 to-rose-500",
        months: [
          {
            month: 1,
            title: "Month 1: New Beginnings",
            weeks: "1-4",
            highlights: ["Conception occurs", "Embryo implants", "Start prenatal vitamins"],
            babySize: "Poppy seed",
            symptoms: ["Missed period", "Possible fatigue"]
          },
          {
            month: 2,
            title: "Month 2: Early Development",
            weeks: "5-8", 
            highlights: ["First heartbeat", "Morning sickness begins", "First doctor visit"],
            babySize: "Blueberry",
            symptoms: ["Nausea", "Breast tenderness", "Frequent urination"]
          },
          {
            month: 3,
            title: "Month 3: Major Milestones",
            weeks: "9-13",
            highlights: ["First ultrasound", "All organs formed", "Risk decreases"],
            babySize: "Lime",
            symptoms: ["Energy may return", "Morning sickness peaks"]
          }
        ]
      },
      {
        trimester: 2,
        title: "Second Trimester",
        description: "The golden period - energy returns and baby grows!",
        weeks: "14-26",
        color: "from-purple-400 to-violet-500",
        months: [
          {
            month: 4,
            title: "Month 4: Feeling Better",
            weeks: "14-17",
            highlights: ["Gender visible", "Energy returns", "Baby bump shows"],
            babySize: "Avocado",
            symptoms: ["Morning sickness subsides", "Appetite returns"]
          },
          {
            month: 5,
            title: "Month 5: Halfway Point",
            weeks: "18-22",
            highlights: ["Feel movements", "Anatomy scan", "Quickening"],
            babySize: "Banana",
            symptoms: ["Baby movements felt", "Weight gain accelerates"]
          },
          {
            month: 6,
            title: "Month 6: Viability",
            weeks: "23-26",
            highlights: ["Baby viable", "Braxton Hicks", "Nursery planning"],
            babySize: "Corn",
            symptoms: ["Back pain", "Shortness of breath"]
          }
        ]
      },
      {
        trimester: 3,
        title: "Third Trimester", 
        description: "Final stretch - preparing for baby's arrival!",
        weeks: "27-40",
        color: "from-blue-400 to-sky-500",
        months: [
          {
            month: 7,
            title: "Month 7: Rapid Growth",
            weeks: "27-30",
            highlights: ["Baby shower", "Birth plan", "Weekly appointments"],
            babySize: "Cauliflower",
            symptoms: ["Increased discomfort", "Frequent bathroom trips"]
          },
          {
            month: 8,
            title: "Month 8: Final Prep",
            weeks: "31-35",
            highlights: ["Hospital bag", "Car seat", "Maternity leave"],
            babySize: "Coconut",
            symptoms: ["Difficulty sleeping", "Pelvic pressure"]
          },
          {
            month: 9,
            title: "Month 9: Baby's Arrival",
            weeks: "36-40",
            highlights: ["Labor signs", "Baby arrives!", "New journey begins"],
            babySize: "Watermelon",
            symptoms: ["Nesting instinct", "Labor preparation"]
          }
        ]
      }
    ];
  };

  // Sort months to put current month first within its trimester
  const sortMonthsWithCurrentFirst = (months: any[]) => {
    return [...months].sort((a, b) => {
      if (a.month === currentMonth) return -1;
      if (b.month === currentMonth) return 1;
      return a.month - b.month;
    });
  };

  // Sort trimesters to put current trimester first
  const sortTrimestersWithCurrentFirst = (trimesters: any[]) => {
    return [...trimesters].sort((a, b) => {
      if (a.trimester === currentTrimester) return -1;
      if (b.trimester === currentTrimester) return 1;
      return a.trimester - b.trimester;
    });
  };

  const trimesterData = getTrimesterData();
  const sortedTrimesterData = sortTrimestersWithCurrentFirst(trimesterData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Trimester View
            </h1>
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
              <Heart className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200">
            <p className="text-2xl font-semibold text-gray-700 mb-2">
              Currently in Trimester <span className="text-purple-600">{currentTrimester}</span>
            </p>
            <p className="text-lg text-gray-600">
              Month <span className="font-bold text-pink-600">{currentMonth}</span> of your pregnancy journey
            </p>
          </div>
        </div>

        {/* Trimesters - Current trimester first */}
        <div className="space-y-12">
          {sortedTrimesterData.map((trimester) => {
            const isCurrent = currentTrimester === trimester.trimester;
            const sortedMonths = sortMonthsWithCurrentFirst(trimester.months);
            
            return (
              <div key={trimester.trimester} className="group">
                {/* Trimester Header */}
                <div className={cn(
                  "p-8 rounded-3xl shadow-xl mb-8",
                  `bg-gradient-to-br ${trimester.color} border-2`,
                  isCurrent && "ring-4 ring-purple-400 ring-opacity-60 shadow-purple-200"
                )}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                        <Baby className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-3xl font-bold mb-2 text-white">
                          {trimester.title}
                        </h3>
                        <p className="text-xl font-semibold text-white/90">
                          {trimester.description}
                        </p>
                        <p className="text-sm text-white/80">
                          Weeks {trimester.weeks}
                        </p>
                      </div>
                    </div>
                    {isCurrent && (
                      <div className="px-6 py-3 bg-white/20 text-white rounded-full text-lg font-bold animate-pulse shadow-lg backdrop-blur-sm">
                        ✨ Current Trimester
                      </div>
                    )}
                  </div>
                </div>

                {/* Months Grid - Current month first */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {sortedMonths.map((month) => {
                    const isCurrentMonth = month.month === currentMonth;
                    
                    return (
                      <Link 
                        key={month.month} 
                        to={`/month/${month.month}`} 
                        className="block group/month"
                      >
                        <div className={cn(
                          "relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl",
                          "bg-white border-2 shadow-lg h-80 flex flex-col",
                          isCurrentMonth 
                            ? "border-purple-400 shadow-purple-200 ring-4 ring-purple-300 ring-opacity-50 order-first" 
                            : "border-gray-200 hover:border-purple-300"
                        )}>
                          {/* Month Header */}
                          <div className="text-center mb-4">
                            <div className={cn(
                              "inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg mb-3 shadow-lg",
                              `bg-gradient-to-r ${trimester.color}`
                            )}>
                              {month.month}
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">{month.title}</h4>
                            <p className="text-sm text-gray-600">Weeks {month.weeks}</p>
                            {isCurrentMonth && (
                              <div className="bg-gradient-to-r from-purple-400 to-blue-400 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg animate-pulse mt-2">
                                ✨ Current Month
                              </div>
                            )}
                          </div>

                          {/* Baby Size */}
                          <div className="bg-pink-50 rounded-lg p-3 mb-4">
                            <h5 className="font-semibold text-pink-800 mb-1">👶 Baby Size</h5>
                            <p className="text-sm text-pink-700">{month.babySize}</p>
                          </div>

                          {/* Highlights */}
                          <div className="bg-purple-50 rounded-lg p-3 mb-4 flex-1">
                            <h5 className="font-semibold text-purple-800 mb-2">Key Highlights</h5>
                            <ul className="text-sm text-purple-700 space-y-1">
                              {month.highlights.slice(0, 2).map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-purple-500 mt-1">•</span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Symptoms */}
                          <div className="bg-blue-50 rounded-lg p-3">
                            <h5 className="font-semibold text-blue-800 mb-1">Common Symptoms</h5>
                            <p className="text-sm text-blue-700">{month.symptoms.join(", ")}</p>
                          </div>

                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover/month:translate-x-full transition-transform duration-1000 ease-out"></div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-200 mt-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Your Trimester Progress
            </h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((tri) => (
              <div key={tri} className={cn(
                "p-4 rounded-xl border-2 text-center transition-all",
                currentTrimester === tri 
                  ? "bg-gradient-to-r from-purple-100 to-blue-100 border-purple-400" 
                  : "bg-gray-50 border-gray-200"
              )}>
                <div className={cn(
                  "text-2xl font-bold mb-2",
                  currentTrimester === tri ? "text-purple-600" : "text-gray-500"
                )}>
                  Trimester {tri}
                </div>
                <div className={cn(
                  "text-sm",
                  currentTrimester === tri ? "text-purple-700" : "text-gray-600"
                )}>
                  {currentTrimester === tri ? "Current" : 
                   currentTrimester > tri ? "Completed" : "Upcoming"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrimesterView;
