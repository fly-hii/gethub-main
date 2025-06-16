
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TestTube, Heart, Baby, Sparkles, Star } from "lucide-react";
import FactsFlashSection from "./sections/FactsFlashSection";
import TipsWeekSection from "./sections/TipsWeekSection";
import EssentialTestingSection from "./sections/EssentialTestingSection";
import BabySetupSection from "./sections/BabySetupSection";
import MealsDietSection from "./sections/MealsDietSection";

interface HorizontalWeekCarouselPart2Props {
  selectedWeek: number;
}

const HorizontalWeekCarouselPart2: React.FC<HorizontalWeekCarouselPart2Props> = ({ selectedWeek }) => {
  const [openSection, setOpenSection] = useState<string | null>("testing");
  
  const today = new Date();
  const currentWeek = 18;
  
  // Generate all 40 weeks
  const generateWeeks = () => {
    const weeks = [];
    for (let i = 1; i <= 40; i++) {
      const weekStartDate = new Date(today);
      weekStartDate.setDate(weekStartDate.getDate() - (currentWeek - i) * 7);
      
      const weekEndDate = new Date(weekStartDate);
      weekEndDate.setDate(weekEndDate.getDate() + 6);
      
      weeks.push({
        weekNum: i,
        startDate: weekStartDate,
        endDate: weekEndDate,
        isActive: i === currentWeek
      });
    }
    return weeks;
  };

  const weeks = generateWeeks();

  // Get week-specific essential testing content
  const getEssentialTestingContent = (week: number) => {
    const testingByWeek: { [key: number]: Array<{ name: string; description: string; priority: 'high' | 'medium' | 'low' }> } = {
      1: [{ name: "Pregnancy Test", description: "Confirm pregnancy with home test", priority: 'high' }],
      4: [{ name: "First Doctor Visit", description: "Initial pregnancy consultation and health assessment", priority: 'high' }],
      6: [{ name: "Blood Tests", description: "Complete blood count, blood type, and Rh factor", priority: 'high' }],
      8: [{ name: "First Ultrasound", description: "Confirm pregnancy, heartbeat, and due date", priority: 'high' }],
      10: [{ name: "Prenatal Vitamins Check", description: "Ensure proper folic acid and vitamin intake", priority: 'medium' }],
      12: [
        { name: "NT Scan", description: "Nuchal translucency screening for chromosomal abnormalities", priority: 'high' },
        { name: "First Trimester Screening", description: "Blood test for genetic conditions", priority: 'high' }
      ],
      15: [{ name: "Maternal Serum Screening", description: "Alpha-fetoprotein test for neural tube defects", priority: 'medium' }],
      16: [{ name: "Amniocentesis", description: "Optional genetic testing (if recommended)", priority: 'low' }],
      18: [
        { name: "Anatomy Scan", description: "Detailed 20-week ultrasound examination", priority: 'high' },
        { name: "Gender Reveal", description: "Baby's gender determination (optional)", priority: 'low' }
      ],
      20: [{ name: "Level 2 Ultrasound", description: "Comprehensive fetal anatomy assessment", priority: 'high' }],
      24: [{ name: "Glucose Screening", description: "Test for gestational diabetes", priority: 'high' }],
      26: [{ name: "Blood Pressure Monitoring", description: "Regular checks for preeclampsia signs", priority: 'medium' }],
      28: [
        { name: "Glucose Tolerance Test", description: "Follow-up diabetes screening if needed", priority: 'medium' },
        { name: "Rh Antibody Test", description: "Blood compatibility and Rhogam shot if needed", priority: 'high' }
      ],
      30: [{ name: "Growth Ultrasound", description: "Monitor baby's growth and position", priority: 'medium' }],
      32: [{ name: "Fetal Movement Monitoring", description: "Daily kick counts and movement tracking", priority: 'medium' }],
      34: [{ name: "Group B Strep Test", description: "Screen for GBS bacterial infection", priority: 'high' }],
      35: [{ name: "Weekly Appointments Begin", description: "More frequent prenatal check-ups", priority: 'high' }],
      36: [
        { name: "Cervical Examination", description: "Check for labor preparation signs", priority: 'medium' },
        { name: "Baby Position Assessment", description: "Confirm head-down presentation", priority: 'medium' }
      ],
      37: [{ name: "Full-Term Monitoring", description: "Weekly checks for labor readiness", priority: 'high' }],
      38: [{ name: "Membrane Sweep", description: "Optional natural labor induction method", priority: 'low' }],
      39: [{ name: "Non-Stress Test", description: "Monitor baby's heart rate and well-being", priority: 'medium' }],
      40: [{ name: "Labor Watch", description: "Daily monitoring for labor onset", priority: 'high' }]
    };

    return testingByWeek[week] || [{ name: "Routine Check-up", description: "Standard prenatal visit", priority: 'medium' as const }];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 -mt-8">
      <div className="container mx-auto py-4 sm:py-6 lg:py-8 px-2 sm:px-4">
        {/* Enhanced Selected Week Details */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border-2 border-purple-200 shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-t-lg p-6 relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 animate-spin-slow">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="absolute bottom-4 left-4 animate-bounce">
                  <Heart className="w-6 h-6" />
                </div>
              </div>
              
              <CardTitle className="text-2xl lg:text-3xl font-bold text-center relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Baby className="w-8 h-8 animate-pulse" />
                <span className="text-pink-500">Week {selectedWeek} - Your Beautiful Journey</span>
                <Star className="w-8 h-8 animate-pulse" />
              </CardTitle>
              <p className="text-center text-purple-100 text-lg font-semibold relative z-10">
                {formatDate(weeks[selectedWeek - 1]?.startDate)} - {formatDate(weeks[selectedWeek - 1]?.endDate)} ✨
              </p>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <FactsFlashSection 
                  selectedWeek={selectedWeek}
                  isOpen={openSection === "facts"}
                  onToggle={() => setOpenSection(openSection === "facts" ? null : "facts")}
                />

                <TipsWeekSection 
                  selectedWeek={selectedWeek}
                  isOpen={openSection === "tips"}
                  onToggle={() => setOpenSection(openSection === "tips" ? null : "tips")}
                />

                <EssentialTestingSection 
                  selectedWeek={selectedWeek}
                  isOpen={openSection === "testing"}
                  onToggle={() => setOpenSection(openSection === "testing" ? null : "testing")}
                />

                <BabySetupSection 
                  selectedWeek={selectedWeek}
                  isOpen={openSection === "setup"}
                  onToggle={() => setOpenSection(openSection === "setup" ? null : "setup")}
                />

                <MealsDietSection 
                  selectedWeek={selectedWeek}
                  isOpen={openSection === "meals"}
                  onToggle={() => setOpenSection(openSection === "meals" ? null : "meals")}
                />
              </div>

              {/* Enhanced Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <Card className="bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="p-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-fit mx-auto mb-3">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm text-blue-800 font-bold">Baby's Development 👶</p>
                    <p className="text-xs text-blue-600 mt-2 font-semibold">Major milestones this week ✨</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-100 via-green-200 to-emerald-200 border-green-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full w-fit mx-auto mb-3">
                      <TestTube className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm text-green-800 font-bold">Tests Due 🔬</p>
                    <p className="text-xs text-green-600 mt-2 font-semibold">{getEssentialTestingContent(selectedWeek).length} tests scheduled 📋</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-100 via-purple-200 to-pink-200 border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full w-fit mx-auto mb-3">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm text-purple-800 font-bold">Trimester 🌸</p>
                    <p className="text-xs text-purple-600 mt-2 font-semibold">
                      {selectedWeek <= 13 ? '1st' : selectedWeek <= 26 ? '2nd' : '3rd'} Trimester ✨
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HorizontalWeekCarouselPart2;
