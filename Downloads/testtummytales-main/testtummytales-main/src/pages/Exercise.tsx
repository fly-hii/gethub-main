
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Pause, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Exercise = () => {
  const navigate = useNavigate();

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
            Exercise Tracker
          </h1>
        </div>

        <div className="grid gap-6">
          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">🏃‍♀️</span>
                Today's Workout
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4">
                <h3 className="font-semibold text-lg mb-2">Prenatal Yoga - 30 minutes</h3>
                <p className="text-gray-600 mb-4">Gentle stretches and breathing exercises perfect for pregnancy</p>
                <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
                  <Play className="w-4 h-4 mr-2" />
                  Start Workout
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Timer className="w-6 h-6 text-pink-600" />
                Weekly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                  <div key={day} className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                    <span className="font-medium">{day}</span>
                    <span className="text-sm text-gray-600">
                      {index < 3 ? '✅ 30 min completed' : '⏳ Planned'}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
