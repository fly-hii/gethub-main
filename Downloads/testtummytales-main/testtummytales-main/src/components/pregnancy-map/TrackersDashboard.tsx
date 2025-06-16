
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExerciseChart } from "./dashboard/ExerciseChart";
import { MealChart } from "./dashboard/MealChart";
import { JournalChart } from "./dashboard/JournalChart";
import { MedicationsChart } from "./dashboard/MedicationsChart";
import { KickCountChart } from "./dashboard/KickCountChart";
import { MentalHealthChart } from "./dashboard/MentalHealthChart";

export const TrackersDashboard = () => {
  const navigate = useNavigate();

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={handleExerciseClick}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 bg-tummytales-blue rounded-full"></div>
              Exercise Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ExerciseChart />
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={handleMealMapClick}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 bg-tummytales-green rounded-full"></div>
              Meal Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MealChart />
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={handleJournalClick}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 bg-tummytales-purple rounded-full"></div>
              Journal Entries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <JournalChart />
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={handleMedicationsClick}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 bg-tummytales-yellow rounded-full"></div>
              Medications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MedicationsChart />
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={handleKickCountClick}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 bg-tummytales-pink rounded-full"></div>
              Kick Count
            </CardTitle>
          </CardHeader>
          <CardContent>
            <KickCountChart />
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={handleMentalHealthClick}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              Mental Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MentalHealthChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
