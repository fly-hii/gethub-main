
import React from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, UtensilsCrossed } from "lucide-react";

interface MealsDietSectionProps {
  selectedWeek: number;
  isOpen: boolean;
  onToggle: () => void;
}

const MealsDietSection: React.FC<MealsDietSectionProps> = ({ selectedWeek, isOpen, onToggle }) => {
  return (
    <Collapsible open={isOpen} className="border-2 border-emerald-200 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CollapsibleTrigger asChild onClick={onToggle}>
        <Button 
          variant="ghost" 
          className="w-full justify-between rounded-none bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 hover:from-emerald-200 hover:to-teal-200 border-b border-emerald-200 py-4 transition-all duration-300"
        >
          <span className="text-lg font-bold text-emerald-800 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            Meals and Diet 🥗
          </span>
          {isOpen ? 
            <ChevronUp className="w-5 h-5 text-emerald-600" /> : 
            <ChevronDown className="w-5 h-5 text-emerald-600" />
          }
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6">
        <div className="space-y-6">
          {/* Nutritional Focus - Enhanced */}
          <div className="text-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 mx-auto mb-6 flex items-center justify-center shadow-2xl animate-pulse">
              <div className="text-center text-white">
                <p className="font-bold text-lg mb-3">Week {selectedWeek} Focus: ✨</p>
                <div className="space-y-2">
                  <p className="font-bold text-base">Iron 💪</p>
                  <p className="font-bold text-base">Calcium 🦴</p>
                  <p className="font-bold text-base">Omega-3 🧠</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diet Cards - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <h3 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5" />
                Recommended Foods 🌟
              </h3>
              <ul className="space-y-3 text-green-700 text-base">
                <li>• Leafy green vegetables (spinach, kale) 🥬</li>
                <li>• Lean proteins (chicken, fish, beans) 🐟</li>
                <li>• Whole grains (quinoa, brown rice) 🌾</li>
                <li>• Dairy products (milk, yogurt, cheese) 🥛</li>
              </ul>
              <Button 
                className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                📅 Weekly Menu Plan
              </Button>
            </div>

            <div className="p-4 rounded-xl border-2 bg-gradient-to-br from-red-50 to-pink-50 border-red-200 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <h3 className="font-bold text-lg text-red-800 mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5" />
                Foods to Limit ⚠️
              </h3>
              <ul className="space-y-3 text-red-700 text-base">
                <li>• High-mercury fish (shark, swordfish) 🦈</li>
                <li>• Raw or undercooked meats 🥩</li>
                <li>• Unpasteurized dairy products 🧀</li>
                <li>• Excessive caffeine (limit to 200mg/day) ☕</li>
              </ul>
              <Button 
                variant="outline"
                className="w-full mt-4 border-red-300 text-red-700 hover:bg-red-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                🛡️ Safety Guidelines
              </Button>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MealsDietSection;
