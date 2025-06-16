
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Bell, Activity, Calendar } from "lucide-react";

const ActivityCalendarSection = () => {
  return (
    <section id="activity-calendar" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-6">
              <CalendarIcon className="h-6 w-6 text-indigo-500" />
              <span className="text-indigo-600 font-semibold">Activity Calendar</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Smart Pregnancy Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organize your pregnancy journey with intelligent scheduling and milestone tracking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
                  alt="Smart calendar interface"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Smart Reminders</h3>
                  </div>
                  <p className="text-gray-600">Never miss appointments or important milestones with intelligent notifications.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Calendar Sync</h3>
                  </div>
                  <p className="text-gray-600">Seamlessly integrates with your phone calendar and popular apps.</p>
                </CardContent>
              </Card>

              <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-xl shadow-lg">
                Setup Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityCalendarSection;
