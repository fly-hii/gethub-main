
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowLeft, Calendar as CalendarIcon, Heart, CheckCircle, AlertTriangle, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const FamilyTraditions = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [activeEventIndex, setActiveEventIndex] = useState<number | null>(null);

  const events = [
    {
      title: "Baby Shower Planning",
      description: "Traditional celebration with family and friends",
      timeline: "28-32 weeks",
      cultural: "Western tradition"
    },
    {
      title: "Naming Ceremony",
      description: "Cultural ritual for blessing the baby's name",
      timeline: "After birth",
      cultural: "Various cultures"
    },
    {
      title: "Blessing Rituals",
      description: "Religious or spiritual ceremonies for protection",
      timeline: "Before/after birth",
      cultural: "Religious traditions"
    }
  ];

  const truthChecks = [
    {
      statement: "All cultures celebrate baby showers before birth",
      isTrue: false,
      explanation: "Many cultures prefer celebrations after the baby is born for various traditional reasons. For example, in some Asian cultures, it's considered unlucky to celebrate before the baby arrives safely. Jewish traditions often wait until after the baby is born due to concerns about tempting fate. Hindu traditions may include a 'Jatakarma' ceremony after birth rather than before. These practices stem from deep cultural beliefs about protection and ensuring the well-being of both mother and child."
    },
    {
      statement: "Naming ceremonies are always religious",
      isTrue: false,
      explanation: "Naming ceremonies can be cultural, spiritual, or simply family traditions without religious elements. While many religious traditions include naming rituals - such as Christian baptisms, Islamic Aqiqah, or Hindu Namkaran - secular families often create their own meaningful naming ceremonies. These might include family storytelling about the name's significance, planting a tree in the baby's honor, or creating a time capsule. The key is that the ceremony holds personal meaning for the family, regardless of religious affiliation."
    },
    {
      statement: "It's important to respect cultural differences in baby celebrations",
      isTrue: true,
      explanation: "Every culture has unique and meaningful ways to welcome a new baby into the family, and these traditions deserve respect and understanding. Cultural practices around childbirth and baby celebrations often carry deep significance, representing centuries of wisdom about family, community, and child-rearing. Whether it's the Chinese practice of a month-long confinement period, African naming ceremonies that connect the child to ancestors, or Scandinavian traditions of announcing births with flags, each practice serves important social and emotional functions for families and communities."
    }
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handlePlusClick = (index: number) => {
    setActiveEventIndex(activeEventIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/map')}
            className="mb-4 border-pink-300 text-pink-600 hover:bg-pink-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Map
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent mb-4">
            Family Traditions
          </h1>
          <p className="text-gray-600 text-lg">Cultural celebrations and traditions for welcoming your baby</p>
        </div>

        <Tabs defaultValue="plan-events" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/90 backdrop-blur-sm rounded-2xl p-1 shadow-lg shadow-pink-200/40 mb-8">
            <TabsTrigger 
              value="plan-events" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white transition-all duration-300"
            >
              <Heart className="w-4 h-4 mr-2" />
              Plan Your Events
            </TabsTrigger>
            <TabsTrigger 
              value="truth-check" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white transition-all duration-300"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Truth Check
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plan-events" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-200/50 hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-pink-700 flex items-center justify-between">
                      {event.title}
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0 rounded-full border-pink-300 text-pink-600 hover:bg-pink-50"
                        onClick={() => handlePlusClick(index)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{event.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-pink-500" />
                        <span className="text-sm text-gray-500">{event.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-rose-500" />
                        <span className="text-sm text-gray-500">{event.cultural}</span>
                      </div>
                    </div>
                    
                    {activeEventIndex === index && (
                      <div className="space-y-4 pt-4 border-t border-pink-200">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-pink-700">Select Date:</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !selectedDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-pink-700">Select Time:</label>
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                variant={selectedTime === time ? "default" : "outline"}
                                size="sm"
                                className={cn(
                                  "text-xs",
                                  selectedTime === time 
                                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white" 
                                    : "border-pink-300 text-pink-600 hover:bg-pink-50"
                                )}
                                onClick={() => setSelectedTime(time)}
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                          Save Event
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="truth-check" className="space-y-6">
            <div className="space-y-6">
              {truthChecks.map((item, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-200/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${item.isTrue ? 'bg-green-100' : 'bg-red-100'}`}>
                        {item.isTrue ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <AlertTriangle className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.statement}</h3>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                          item.isTrue ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {item.isTrue ? 'TRUE' : 'FALSE'}
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item.explanation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FamilyTraditions;
