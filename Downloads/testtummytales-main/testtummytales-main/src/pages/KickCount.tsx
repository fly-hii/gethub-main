
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Timer, Baby } from "lucide-react";
import { useNavigate } from "react-router-dom";

const KickCount = () => {
  const navigate = useNavigate();

  const kickSessions = [
    { time: "2:30 PM", kicks: 8, duration: "15 minutes" },
    { time: "6:45 PM", kicks: 12, duration: "20 minutes" },
    { time: "9:15 PM", kicks: 6, duration: "12 minutes" },
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
            Kick Counter
          </h1>
        </div>

        <div className="grid gap-6">
          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">👶</span>
                Start New Session
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-8 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl">
                <div className="text-6xl font-bold text-pink-600 mb-2">0</div>
                <div className="text-lg text-gray-600 mb-4">Kicks Counted</div>
                <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
                  <Timer className="w-4 h-4" />
                  <span>00:00</span>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500">
                    Start Counting
                  </Button>
                  <Button size="lg" variant="outline" className="text-pink-600 border-pink-300">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Kick
                  </Button>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-xl">
                <strong>💡 Tip:</strong> Count kicks when your baby is most active, usually after meals or in the evening. 
                It should take no more than 2 hours to feel 10 movements.
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Baby className="w-6 h-6 text-pink-600" />
                Today's Sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {kickSessions.map((session, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-lg text-pink-700">{session.time}</div>
                      <div className="text-gray-600">Duration: {session.duration}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">{session.kicks}</div>
                      <div className="text-sm text-gray-600">kicks</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle>Weekly Average</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">8.5</div>
                  <div className="text-sm text-gray-600">Avg Kicks/Session</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">3</div>
                  <div className="text-sm text-gray-600">Sessions/Day</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">16</div>
                  <div className="text-sm text-gray-600">Avg Minutes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KickCount;
