
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MealMap = () => {
  const navigate = useNavigate();

  const meals = [
    { time: "8:00 AM", name: "Breakfast", items: "Oatmeal with berries, Greek yogurt", calories: "350 cal" },
    { time: "12:00 PM", name: "Lunch", items: "Grilled chicken salad, whole grain bread", calories: "450 cal" },
    { time: "3:00 PM", name: "Snack", items: "Apple with almond butter", calories: "200 cal" },
    { time: "7:00 PM", name: "Dinner", items: "Salmon, quinoa, steamed vegetables", calories: "500 cal" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent">
            Meal Map
          </h1>
        </div>

        <div className="grid gap-6">
          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍎</span>
                  Today's Meals
                </div>
                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-rose-500">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Meal
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {meals.map((meal, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-pink-600" />
                      <span className="font-semibold">{meal.time} - {meal.name}</span>
                    </div>
                    <span className="text-sm text-pink-600 font-medium">{meal.calories}</span>
                  </div>
                  <p className="text-gray-600">{meal.items}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle>Nutrition Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">1,500</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">65g</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">45g</div>
                  <div className="text-sm text-gray-600">Fiber</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MealMap;
