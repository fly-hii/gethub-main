
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, CheckCircle, Baby, Activity, Camera, Heart } from "lucide-react";

const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <section className="mb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Plan Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track important dates, appointments, and milestones throughout your pregnancy journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Component */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-indigo-200/50">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <CalendarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Pregnancy Calendar</h3>
              <p className="text-gray-600 mt-2">Mark important dates and track your progress</p>
            </div>
            
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => setSelectedDate(date)}
                className="rounded-2xl border border-indigo-200 bg-white/50 backdrop-blur-sm"
              />
            </div>
            
            {selectedDate && (
              <div className="mt-6 p-4 bg-indigo-50 rounded-2xl text-center">
                <p className="text-indigo-700 font-medium">
                  Selected: {selectedDate.toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
          
          {/* Calendar Features */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Calendar Features</h3>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Doctor appointments", color: "text-green-500" },
                  { icon: Baby, text: "Milestone tracking", color: "text-blue-500" },
                  { icon: Activity, text: "Kick count reminders", color: "text-purple-500" },
                  { icon: Camera, text: "Bump photo memories", color: "text-pink-500" },
                  { icon: Heart, text: "Special moments", color: "text-red-500" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/60 rounded-2xl">
                    <feature.icon className={`h-5 w-5 ${feature.color} mr-3`} />
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-indigo-200/50">
              <h4 className="font-bold text-gray-800 mb-4">Upcoming Events</h4>
              <div className="space-y-3">
                {[
                  { date: "Tomorrow", event: "Prenatal checkup", time: "10:00 AM" },
                  { date: "Next Week", event: "Ultrasound appointment", time: "2:30 PM" },
                  { date: "Week 20", event: "Anatomy scan", time: "TBD" }
                ].map((event, index) => (
                  <div key={index} className="p-3 bg-indigo-50 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{event.event}</p>
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>
                      <span className="text-sm font-bold text-indigo-600">{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-2xl">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
