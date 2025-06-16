
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ArrowLeft, Calendar as CalendarIcon, Heart, Baby } from "lucide-react";
import { addMonths, startOfMonth, format } from "date-fns";

const Month = () => {
  const { monthNumber } = useParams();
  const navigate = useNavigate();
  const month = parseInt(monthNumber || "1");

  // Calculate the month date based on pregnancy start
  const pregnancyStart = new Date();
  pregnancyStart.setMonth(pregnancyStart.getMonth() - 4); // Assuming current month is month 5
  const currentMonthDate = addMonths(pregnancyStart, month - 1);
  const monthStart = startOfMonth(currentMonthDate);

  // Month data using JSON structure
  const monthData = {
    1: {
      title: "Month 1",
      trimester: 1,
      weeks: "1-4",
      description: "Your pregnancy journey begins! Time for first doctor's visit and prenatal vitamins.",
      milestones: [
        "🏥 Schedule first prenatal appointment",
        "💊 Start taking prenatal vitamins",
        "🚭 Quit smoking and alcohol",
        "🥗 Begin healthy eating habits"
      ],
      babyDevelopment: "Your baby is the size of a poppy seed. The neural tube is forming, which will become the brain and spinal cord.",
      color: "from-pink-400 to-rose-500"
    },
    2: {
      title: "Month 2",
      trimester: 1,
      weeks: "5-8",
      description: "First ultrasound and heartbeat detection - exciting milestones ahead!",
      milestones: [
        "👶 First ultrasound appointment",
        "💓 Baby's heartbeat can be detected",
        "🤢 Morning sickness may begin",
        "📋 Genetic screening discussions"
      ],
      babyDevelopment: "Your baby is the size of a blueberry. Facial features are beginning to form, and tiny limb buds appear.",
      color: "from-rose-400 to-pink-500"
    },
    3: {
      title: "Month 3",
      trimester: 1,
      weeks: "9-13",
      description: "End of first trimester! Morning sickness often subsides and energy returns.",
      milestones: [
        "🌅 Morning sickness typically improves",
        "⚡ Energy levels may increase",
        "👕 May need maternity clothes soon",
        "📱 Consider pregnancy apps"
      ],
      babyDevelopment: "Your baby is the size of a lime. All major organs are formed and the baby starts moving (though you can't feel it yet).",
      color: "from-purple-400 to-pink-500"
    },
    4: {
      title: "Month 4",
      trimester: 2,
      weeks: "14-17",
      description: "Gender reveal possible and detailed anatomy scan coming up!",
      milestones: [
        "💕 Gender may be visible on ultrasound",
        "🔍 Detailed anatomy scan scheduled",
        "😊 Pregnancy glow may appear",
        "🍎 Increased appetite"
      ],
      babyDevelopment: "Your baby is the size of an avocado. Baby can hear sounds and may start responding to light.",
      color: "from-purple-400 to-violet-500"
    },
    5: {
      title: "Month 5",
      trimester: 2,
      weeks: "18-22",
      description: "Feel baby movements and reach the exciting halfway milestone!",
      milestones: [
        "🤱 First baby movements (quickening)",
        "🎉 Halfway point celebration",
        "🛏️ Start planning nursery",
        "👶 Baby shower planning"
      ],
      babyDevelopment: "Your baby is the size of a banana. Baby is very active and you'll start feeling regular movements.",
      color: "from-violet-400 to-purple-500"
    },
    6: {
      title: "Month 6",
      trimester: 2,
      weeks: "23-26",
      description: "Glucose screening test and important growth monitoring.",
      milestones: [
        "🩺 Glucose screening test",
        "📊 Growth and development check",
        "🎵 Play music for baby",
        "📚 Childbirth class research"
      ],
      babyDevelopment: "Your baby is the size of a corn cob. Baby's hearing is fully developed and they respond to sounds.",
      color: "from-blue-400 to-violet-500"
    },
    7: {
      title: "Month 7",
      trimester: 3,
      weeks: "27-30",
      description: "Time to prepare birth plan and consider maternity leave options.",
      milestones: [
        "📋 Create birth plan",
        "💼 Discuss maternity leave",
        "🛍️ Stock up on baby supplies",
        "🏥 Tour delivery hospital"
      ],
      babyDevelopment: "Your baby is the size of a cauliflower. Baby's brain is rapidly developing and they can dream!",
      color: "from-blue-400 to-sky-500"
    },
    8: {
      title: "Month 8",
      trimester: 3,
      weeks: "31-35",
      description: "Weekly check-ups begin and it's time for hospital tours!",
      milestones: [
        "📅 Weekly prenatal appointments",
        "🏥 Hospital tour and registration",
        "👶 Baby shower celebrations",
        "📦 Pack hospital bag"
      ],
      babyDevelopment: "Your baby is the size of a coconut. Baby's bones are hardening and they're gaining weight rapidly.",
      color: "from-sky-400 to-blue-500"
    },
    9: {
      title: "Month 9",
      trimester: 3,
      weeks: "36-40",
      description: "Final preparations - your baby will arrive soon!",
      milestones: [
        "🍼 Final birth preparations",
        "👶 Baby can arrive any day",
        "🎒 Hospital bag ready",
        "📞 Labor signs awareness"
      ],
      babyDevelopment: "Your baby is the size of a watermelon. Baby is considered full-term and ready for birth!",
      color: "from-green-400 to-blue-500"
    }
  };

  const currentMonth = monthData[month as keyof typeof monthData];

  if (!currentMonth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Navigation />
        <div className="container mx-auto py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Month not found</h1>
          <Button onClick={() => navigate("/map")} className="mt-4">
            Back to Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      
      <div className="container mx-auto py-8 px-6">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/map")}
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pregnancy Map
          </Button>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-r ${currentMonth.color}`}>
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {currentMonth.title}
              </h1>
              <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                <Heart className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200">
              <p className="text-xl font-semibold text-gray-700 mb-2">
                Trimester {currentMonth.trimester} • Weeks {currentMonth.weeks}
              </p>
              <p className="text-lg text-gray-600">{currentMonth.description}</p>
              <p className="text-md text-purple-600 font-medium mt-2">
                {format(currentMonthDate, 'MMMM yyyy')}
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-full bg-gradient-to-r ${currentMonth.color}`}>
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {format(currentMonthDate, 'MMMM yyyy')}
              </h3>
            </div>
            
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={monthStart}
                month={currentMonthDate}
                className="rounded-md border border-purple-200"
                classNames={{
                  head_cell: "text-purple-600 font-semibold",
                  cell: "text-center",
                  day: "hover:bg-purple-100",
                  day_selected: `bg-gradient-to-r ${currentMonth.color} text-white hover:bg-purple-600`,
                  day_today: "bg-purple-100 text-purple-800 font-bold"
                }}
              />
            </div>
          </div>

          {/* Milestones Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-full bg-gradient-to-r ${currentMonth.color}`}>
                <Baby className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                This Month's Milestones
              </h3>
            </div>
            
            <div className="space-y-4">
              {currentMonth.milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentMonth.color} mt-2 flex-shrink-0`}></div>
                  <p className="text-gray-700 font-medium">{milestone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Baby Development Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-full bg-gradient-to-r ${currentMonth.color}`}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Baby's Development
              </h3>
            </div>
            
            <div className={`p-6 rounded-2xl bg-gradient-to-br ${currentMonth.color} bg-opacity-10 border-2 border-opacity-20`}>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                {currentMonth.babyDevelopment}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Button 
            variant="outline" 
            onClick={() => navigate(`/month/${month - 1}`)}
            disabled={month <= 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Month
          </Button>
          
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((monthNum) => (
              <Button
                key={monthNum}
                variant={monthNum === month ? "default" : "outline"}
                size="sm"
                onClick={() => navigate(`/month/${monthNum}`)}
                className={monthNum === month ? "bg-gradient-to-r from-pink-500 to-purple-500" : ""}
              >
                {monthNum}
              </Button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => navigate(`/month/${month + 1}`)}
            disabled={month >= 9}
            className="flex items-center gap-2"
          >
            Next Month
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Month;
