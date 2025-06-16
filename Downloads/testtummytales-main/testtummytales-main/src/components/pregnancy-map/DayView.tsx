
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrackersDashboard } from "./TrackersDashboard";
import { Plus, Calendar, CheckCircle, Target } from "lucide-react";

interface DayViewProps {
  date: Date;
  weekNum: number;
  daysNum: number;
}

const DayView: React.FC<DayViewProps> = ({ date, weekNum, daysNum }) => {
  const navigate = useNavigate();
  const dateString = date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric' 
  });

  const handleExerciseClick = () => {
    navigate('/exercise');
  };

  const handleMealMapClick = () => {
    navigate('/meal-map');
  };

  const handleJournalClick = () => {
    navigate('/journal');
  };

  const handleMedicationsClick = () => {
    navigate('/medications');
  };

  const handleKickCountClick = () => {
    navigate('/kick-count');
  };

  const handleMentalHealthClick = () => {
    navigate('/mental-health');
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl px-6 py-3 mb-4">
          <Calendar className="w-6 h-6 text-pink-600" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent">
            {dateString}
          </h2>
        </div>
        <p className="text-lg text-gray-600">
          <span className="font-semibold text-pink-600">{weekNum} weeks</span> and 
          <span className="font-semibold text-rose-600"> {daysNum} days</span>
        </p>
      </div>
      
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white/90 backdrop-blur-sm rounded-2xl p-1 shadow-lg shadow-pink-200/40">
          <TabsTrigger 
            value="dashboard" 
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white transition-all duration-300"
          >
            📊 Dashboard
          </TabsTrigger>
          <TabsTrigger 
            value="checklist" 
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white transition-all duration-300"
          >
            ✅ Checklist
          </TabsTrigger>
          <TabsTrigger 
            value="trackers" 
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white transition-all duration-300"
          >
            🎯 Trackers
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-6 mt-6">
          <TrackersDashboard />
        </TabsContent>
        
        <TabsContent value="checklist" className="space-y-6 mt-6">
          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl shadow-pink-200/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <CheckCircle className="w-6 h-6 text-pink-600" />
                <span className="bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent">
                  Today's Tasks
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  { time: "8:00 am", task: "Take prenatal vitamins", icon: "💊" },
                  { time: "9:00 am", task: "Check your weight", icon: "⚖️" },
                  { time: "12:00 pm", task: "Afternoon walk (30 minutes)", icon: "🚶‍♀️" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-100/60">
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm text-pink-600 font-medium">{item.time}</p>
                      <p className="text-gray-800 font-medium">{item.task}</p>
                    </div>
                    <input 
                      type="checkbox" 
                      className="h-6 w-6 accent-pink-500 rounded-lg"
                    />
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-dashed border-2 border-pink-300 hover:border-pink-400 hover:bg-pink-50 rounded-2xl py-6 text-pink-600 hover:text-pink-700 transition-all duration-300"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New Task
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trackers" className="space-y-6 mt-6">
          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl shadow-pink-200/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Target className="w-6 h-6 text-pink-600" />
                <span className="bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent">
                  Health Trackers
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Button
                  onClick={handleExerciseClick}
                  className="h-24 bg-gradient-to-br from-pink-400 to-rose-500 hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg text-white font-semibold text-sm flex flex-col gap-2 border-0"
                >
                  <span className="text-2xl">🏃‍♀️</span>
                  <span>Exercise</span>
                </Button>
                <Button
                  onClick={handleMealMapClick}
                  className="h-24 bg-gradient-to-br from-rose-400 to-pink-500 hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg text-white font-semibold text-sm flex flex-col gap-2 border-0"
                >
                  <span className="text-2xl">🍎</span>
                  <span>Meal Map</span>
                </Button>
                <Button
                  onClick={handleJournalClick}
                  className="h-24 bg-gradient-to-br from-pink-500 to-rose-600 hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg text-white font-semibold text-sm flex flex-col gap-2 border-0"
                >
                  <span className="text-2xl">📝</span>
                  <span>Journal</span>
                </Button>
                <Button
                  onClick={handleMedicationsClick}
                  className="h-24 bg-gradient-to-br from-rose-500 to-pink-600 hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg text-white font-semibold text-sm flex flex-col gap-2 border-0"
                >
                  <span className="text-2xl">💊</span>
                  <span>Medications</span>
                </Button>
                <Button
                  onClick={handleKickCountClick}
                  className="h-24 bg-gradient-to-br from-pink-400 to-rose-500 hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg text-white font-semibold text-sm flex flex-col gap-2 border-0"
                >
                  <span className="text-2xl">👶</span>
                  <span>Kick Count</span>
                </Button>
                <Button
                  onClick={handleMentalHealthClick}
                  className="h-24 bg-gradient-to-br from-rose-400 to-pink-500 hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg text-white font-semibold text-sm flex flex-col gap-2 border-0"
                >
                  <span className="text-2xl">🧠</span>
                  <span>Mental Health</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DayView;
