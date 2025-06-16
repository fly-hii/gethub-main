
import React from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Home, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BabySetupSectionProps {
  selectedWeek: number;
  isOpen: boolean;
  onToggle: () => void;
}

const BabySetupSection: React.FC<BabySetupSectionProps> = ({ selectedWeek, isOpen, onToggle }) => {
  const navigate = useNavigate();

  // Get week-specific baby setup items
  const getBabySetupItems = (week: number) => {
    const setupByWeek: { [key: number]: { mandatory: Array<{ item: string; description: string; urgency: 'high' | 'medium' | 'low' }>; cultural: Array<{ item: string; description: string; tradition: string }> } } = {
      12: {
        mandatory: [
          { item: "Nursery Planning", description: "Start planning the baby's room layout", urgency: 'low' },
          { item: "Budgeting", description: "Create a budget for baby expenses", urgency: 'medium' }
        ],
        cultural: [
          { item: "Baby Shower Planning", description: "Traditional celebration of upcoming arrival", tradition: "Western" }
        ]
      },
      20: {
        mandatory: [
          { item: "Crib Selection", description: "Choose and order a safe crib", urgency: 'medium' },
          { item: "Car Seat Research", description: "Research infant car seat safety ratings", urgency: 'high' }
        ],
        cultural: [
          { item: "Gender Reveal Party", description: "Celebration to announce baby's gender", tradition: "Modern Western" }
        ]
      },
      28: {
        mandatory: [
          { item: "Hospital Bag Essentials", description: "Start collecting items for delivery", urgency: 'medium' },
          { item: "Pediatrician Selection", description: "Choose your baby's first doctor", urgency: 'high' }
        ],
        cultural: [
          { item: "Baby Blessing Ceremony", description: "Spiritual protection rituals", tradition: "Various Cultures" }
        ]
      },
      35: {
        mandatory: [
          { item: "Car Seat Installation", description: "Install and inspect car seat", urgency: 'high' },
          { item: "Hospital Pre-registration", description: "Complete hospital admission paperwork", urgency: 'high' }
        ],
        cultural: [
          { item: "Naming Ceremony Prep", description: "Prepare for traditional naming rituals", tradition: "Cultural Specific" }
        ]
      }
    };

    return setupByWeek[week] || {
      mandatory: [{ item: "General Preparation", description: "Continue preparing for baby's arrival", urgency: 'medium' as const }],
      cultural: [{ item: "Family Traditions", description: "Consider your family's cultural practices", tradition: "Personal" }]
    };
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-gradient-to-r from-red-50 to-red-100 border-red-300 text-red-800 shadow-lg';
      case 'medium': return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-300 text-yellow-800 shadow-md';
      case 'low': return 'bg-gradient-to-r from-green-50 to-green-100 border-green-300 text-green-800 shadow-sm';
      default: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 text-gray-800 shadow-sm';
    }
  };

  return (
    <Collapsible open={isOpen} className="border-2 border-orange-200 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CollapsibleTrigger asChild onClick={onToggle}>
        <Button 
          variant="ghost" 
          className="w-full justify-between rounded-none bg-gradient-to-r from-orange-100 via-amber-100 to-orange-100 hover:from-orange-200 hover:to-amber-200 border-b border-orange-200 py-4 transition-all duration-300"
        >
          <span className="text-lg font-bold text-orange-800 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-lg">
              <Home className="w-5 h-5 text-white" />
            </div>
            Set Up for the Baby 🍼
          </span>
          {isOpen ? 
            <ChevronUp className="w-5 h-5 text-orange-600" /> : 
            <ChevronDown className="w-5 h-5 text-orange-600" />
          }
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6">
        <div className="space-y-6">
          {/* Mandatory Prep - Enhanced */}
          <div>
            <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Mandatory Preparation 📋
            </h3>
            <div className="space-y-4">
              {getBabySetupItems(selectedWeek).mandatory.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl border-2 ${getUrgencyColor(item.urgency)} transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer`}
                  onClick={() => navigate(`/general-preparation?week=${selectedWeek}`)}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-base">{item.item} 🎯</h4>
                      <p className="text-sm mt-2 opacity-90">{item.description}</p>
                      <span className="inline-block mt-3 px-3 py-1 text-xs font-bold rounded-full bg-white bg-opacity-50 shadow-sm">
                        {item.urgency.toUpperCase()} URGENCY ⚡
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural Prep - Enhanced */}
          <div>
            <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Cultural Preparation 🌸
            </h3>
            <div className="space-y-4">
              {getBabySetupItems(selectedWeek).cultural.map((item, index) => (
                <div key={index} className="p-4 rounded-xl border-2 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300 text-purple-800 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-base">{item.item} 🌺</h4>
                      <p className="text-sm mt-2 opacity-90">{item.description}</p>
                      <span className="inline-block mt-3 px-3 py-1 text-xs font-bold rounded-full bg-white bg-opacity-50 shadow-sm">
                        {item.tradition.toUpperCase()} 🎨
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white hover:bg-gray-50 w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      onClick={() => navigate('/family-traditions')}
                    >
                      Learn More 📖
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default BabySetupSection;
