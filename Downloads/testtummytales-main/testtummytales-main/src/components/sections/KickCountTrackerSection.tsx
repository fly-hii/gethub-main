
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Activity, Clock, TrendingUp } from "lucide-react";

const KickCountTrackerSection = () => {
  return (
    <section id="kick-tracker" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-6">
              <Users className="h-6 w-6 text-yellow-500" />
              <span className="text-yellow-600 font-semibold">Kick Count Tracker</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Monitor Your Baby's Movements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track and analyze your baby's kick patterns with our intelligent monitoring system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                  alt="Baby movement tracking"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Smart Tracking</h3>
                  </div>
                  <p className="text-gray-600">Intelligent algorithms analyze kick patterns and provide insights.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Pattern Analysis</h3>
                  </div>
                  <p className="text-gray-600">Visual charts and trends to understand your baby's activity.</p>
                </CardContent>
              </Card>

              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-xl shadow-lg">
                Start Tracking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KickCountTrackerSection;
