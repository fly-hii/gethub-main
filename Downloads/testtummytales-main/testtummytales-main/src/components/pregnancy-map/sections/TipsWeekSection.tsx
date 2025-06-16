
import React from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react";

interface TipsWeekSectionProps {
  selectedWeek: number;
  isOpen: boolean;
  onToggle: () => void;
}

const TipsWeekSection: React.FC<TipsWeekSectionProps> = ({ selectedWeek, isOpen, onToggle }) => {
  // Get week-specific tips
  const getWeeklyTips = (week: number) => {
    const tipsByWeek: { [key: number]: Array<{ title: string; description: string; category: 'nutrition' | 'exercise' | 'wellness' | 'preparation' }> } = {
      1: [
        { title: "Start Taking Folic Acid", description: "Begin prenatal vitamins with 400-800 mcg of folic acid daily", category: 'nutrition' },
        { title: "Avoid Alcohol & Smoking", description: "Eliminate alcohol, smoking, and harmful substances", category: 'wellness' }
      ],
      8: [
        { title: "Morning Sickness Relief", description: "Try small, frequent meals and ginger tea", category: 'wellness' },
        { title: "Stay Hydrated", description: "Drink 8-10 glasses of water daily", category: 'nutrition' }
      ],
      12: [
        { title: "Gentle Exercise", description: "Start prenatal yoga or walking routine", category: 'exercise' },
        { title: "Rest When Tired", description: "Listen to your body and get adequate sleep", category: 'wellness' }
      ],
      18: [
        { title: "Prepare for Baby Kicks", description: "Start tracking fetal movements", category: 'preparation' },
        { title: "Consider Prenatal Classes", description: "Research birthing and parenting classes", category: 'preparation' }
      ],
      24: [
        { title: "Monitor Blood Sugar", description: "Maintain stable blood sugar with balanced meals", category: 'nutrition' },
        { title: "Pelvic Floor Exercises", description: "Practice Kegel exercises daily", category: 'exercise' }
      ],
      32: [
        { title: "Hospital Bag Prep", description: "Start gathering items for your hospital bag", category: 'preparation' },
        { title: "Baby Movement Counts", description: "Track 10 movements in 2 hours daily", category: 'wellness' }
      ]
    };

    return tipsByWeek[week] || [
      { title: "Stay Healthy", description: "Continue prenatal vitamins and healthy habits", category: 'wellness' as const },
      { title: "Regular Check-ups", description: "Keep up with all scheduled appointments", category: 'preparation' as const }
    ];
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'nutrition': return 'bg-gradient-to-r from-emerald-50 to-green-100 border-green-300 text-green-800 shadow-lg';
      case 'exercise': return 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300 text-blue-800 shadow-lg';
      case 'wellness': return 'bg-gradient-to-r from-purple-50 to-purple-100 border-purple-300 text-purple-800 shadow-lg';
      case 'preparation': return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-300 text-orange-800 shadow-lg';
      default: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 text-gray-800 shadow-sm';
    }
  };

  return (
    <Collapsible open={isOpen} className="border-2 border-green-200 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CollapsibleTrigger asChild onClick={onToggle}>
        <Button 
          variant="ghost" 
          className="w-full justify-between rounded-none bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 hover:from-green-200 hover:to-emerald-200 border-b border-green-200 py-4 transition-all duration-300"
        >
          <span className="text-lg font-bold text-green-800 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            Tips of the Week 💡
          </span>
          {isOpen ? 
            <ChevronUp className="w-5 h-5 text-green-600" /> : 
            <ChevronDown className="w-5 h-5 text-green-600" />
          }
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6">
        <div className="space-y-4">
          {getWeeklyTips(selectedWeek).map((tip, index) => (
            <div key={index} className={`p-4 rounded-xl border-2 ${getCategoryColor(tip.category)} transition-all duration-300 hover:shadow-lg transform hover:scale-105`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{tip.title} ✨</h3>
                  <p className="text-sm mt-2 opacity-90">{tip.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 text-xs font-bold rounded-full bg-white bg-opacity-50 shadow-sm">
                    {tip.category.toUpperCase()} 🎯
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white hover:bg-gray-50 w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Learn More 📚
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default TipsWeekSection;
