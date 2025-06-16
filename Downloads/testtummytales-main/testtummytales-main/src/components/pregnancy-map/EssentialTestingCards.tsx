import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface EssentialTestingCardsProps {
  weekNum: number;
}

interface TestItem {
  name: string;
  description: string;
  priority: "high" | "medium" | "low";
  timing?: string;
  isCompleted?: boolean;
  category: "screening" | "routine" | "diagnostic" | "monitoring";
  emoji: string;
}

const EssentialTestingCards: React.FC<EssentialTestingCardsProps> = ({ weekNum }) => {
  const { toast } = useToast();

  // Sample key weeks – add more up to 40 as needed
  const getTestingData = (): { [key: number]: TestItem[] } => ({
    1: [{
      name: "Pregnancy Test",
      description: "Confirm pregnancy with home test or blood work",
      priority: "high",
      timing: "As soon as possible",
      category: "screening",
      emoji: "🧪"
    }],
    4: [{
      name: "First Doctor Visit",
      description: "Initial consultation, health history, and physical exam",
      priority: "high",
      timing: "Week 4",
      category: "routine",
      emoji: "👩‍⚕️"
    }],
    8: [{
      name: "First Ultrasound",
      description: "Confirm pregnancy, estimate due date, detect heartbeat",
      priority: "high",
      timing: "Week 8",
      category: "diagnostic",
      emoji: "🩻"
    }],
    12: [{
      name: "Nuchal Translucency Screening",
      description: "First trimester screening for chromosomal abnormalities",
      priority: "medium",
      timing: "Week 11–13",
      category: "screening",
      emoji: "🧬"
    }],
    20: [{
      name: "Anatomy Scan",
      description: "Detailed ultrasound for baby's growth and development",
      priority: "high",
      timing: "Week 20",
      category: "diagnostic",
      emoji: "👶"
    }],
    28: [{
      name: "Glucose Tolerance Test",
      description: "Check for gestational diabetes",
      priority: "high",
      timing: "Week 24–28",
      category: "screening",
      emoji: "🩸"
    }],
    36: [{
      name: "Group B Strep Test",
      description: "Test for bacteria that could affect the baby during delivery",
      priority: "medium",
      timing: "Week 36–37",
      category: "screening",
      emoji: "🧫"
    }],
    40: [{
      name: "Final Checkup",
      description: "Monitor dilation, baby's position, plan for delivery",
      priority: "high",
      timing: "Week 40",
      category: "monitoring",
      emoji: "📋"
    }]
  });

  // For any week, return a card (either from data or fallback)
  const getTestsForWeek = (week: number): TestItem[] => {
    const data = getTestingData();
    return data[week] || [{
      name: "Routine Prenatal Visit",
      description: "Weekly monitoring, vitals, and Q&A with your provider",
      priority: "medium",
      timing: `Week ${week}`,
      category: "routine",
      emoji: "💬"
    }];
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-gradient-to-r from-red-50 to-red-100 text-red-700 border-red-200 shadow-red-100";
      case "medium": return "bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-amber-200 shadow-amber-100";
      case "low": return "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200 shadow-blue-100";
      default: return "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-gray-200 shadow-gray-100";
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "high": return "HIGH PRIORITY";
      case "medium": return "MEDIUM PRIORITY";
      case "low": return "LOW PRIORITY";
      default: return "PRIORITY";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "screening": return "bg-purple-100 text-purple-700 border-purple-200";
      case "routine": return "bg-green-100 text-green-700 border-green-200";
      case "diagnostic": return "bg-blue-100 text-blue-700 border-blue-200";
      case "monitoring": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const handleScheduleTest = (testName: string) => {
    toast({
      title: "Test Scheduled ✅",
      description: `${testName} has been added to your calendar`,
    });
  };

  const tests = getTestsForWeek(weekNum);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🩺</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
            Week {weekNum} Essential Tests
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay on track with your pregnancy journey. Here are the important tests and checkups for this week.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content - Tests Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests.map((test, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Test Header */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{test.emoji}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{test.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className={`text-xs font-medium px-3 py-1 ${getPriorityColor(test.priority)} shadow-sm`}>
                            {getPriorityText(test.priority)}
                          </Badge>
                          <Badge variant="outline" className={`text-xs font-medium px-3 py-1 ${getCategoryColor(test.category)}`}>
                            {test.category.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Test Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">{test.description}</p>

                    {/* Timing Info */}
                    {test.timing && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-purple-600">⏰</span>
                        <span className="text-gray-700 font-medium">{test.timing}</span>
                      </div>
                    )}

                    {/* Action Button */}
                    <Button
                      onClick={() => handleScheduleTest(test.name)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span className="mr-2">📅</span>
                      Schedule Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar - Tips & Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Weekly Tip Card */}
          <Card className="border-0 bg-gradient-to-br from-pink-50 to-purple-50 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-pink-600 text-lg font-bold flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Week {weekNum} Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 text-sm leading-relaxed">
                {weekNum < 12
                  ? "Focus on taking prenatal vitamins, staying hydrated, and eating folate-rich foods. Early prenatal care is crucial for healthy development."
                  : weekNum < 28
                  ? "Monitor baby movements, attend all scheduled appointments, and maintain a healthy weight gain. This is an exciting time for growth!"
                  : weekNum <= 40
                  ? "Prepare your hospital bag, finalize your birth plan, and watch for labor signs. You're almost there!"
                  : "Stay in close contact with your healthcare provider. Every day past your due date requires careful monitoring."}
              </p>
            </CardContent>
          </Card>

          {/* Quick Stats Card */}
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-blue-600 text-lg font-bold flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Tests this week:</span>
                <span className="font-bold text-blue-600">{tests.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">High priority:</span>
                <span className="font-bold text-red-600">
                  {tests.filter(t => t.priority === 'high').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Trimester:</span>
                <span className="font-bold text-purple-600">
                  {weekNum <= 13 ? '1st' : weekNum <= 27 ? '2nd' : '3rd'}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EssentialTestingCards;
