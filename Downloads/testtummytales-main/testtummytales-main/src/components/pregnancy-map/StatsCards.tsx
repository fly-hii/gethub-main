
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TestTube, Heart } from "lucide-react";

interface StatsCardsProps {
  selectedWeek: number;
}

const StatsCards: React.FC<StatsCardsProps> = ({ selectedWeek }) => {
  const getTrimester = (week: number) => {
    if (week <= 13) return '1st Trimester';
    if (week <= 26) return '2nd Trimester';
    return '3rd Trimester';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card className="bg-white shadow-sm border border-gray-200 rounded-xl">
        <CardContent className="p-6 text-center">
          <Heart className="w-8 h-8 mx-auto mb-3 text-red-500" />
          <h3 className="font-semibold text-gray-800">Baby's Development</h3>
          <p className="text-sm text-gray-600 mt-1">Major milestones this week</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white shadow-sm border border-gray-200 rounded-xl">
        <CardContent className="p-6 text-center">
          <TestTube className="w-8 h-8 mx-auto mb-3 text-blue-500" />
          <h3 className="font-semibold text-gray-800">Tests Due</h3>
          <p className="text-sm text-gray-600 mt-1">1 test scheduled</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white shadow-sm border border-gray-200 rounded-xl">
        <CardContent className="p-6 text-center">
          <Calendar className="w-8 h-8 mx-auto mb-3 text-purple-500" />
          <h3 className="font-semibold text-gray-800">Trimester</h3>
          <p className="text-sm text-gray-600 mt-1">{getTrimester(selectedWeek)}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
