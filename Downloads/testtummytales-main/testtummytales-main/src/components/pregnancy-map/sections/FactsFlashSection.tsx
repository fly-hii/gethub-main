
import React from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Gamepad2, Heart } from "lucide-react";

interface FactsFlashSectionProps {
  selectedWeek: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FactsFlashSection: React.FC<FactsFlashSectionProps> = ({ selectedWeek, isOpen, onToggle }) => {
  return (
    <Collapsible open={isOpen} className="border-2 border-blue-200 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CollapsibleTrigger asChild onClick={onToggle}>
        <Button 
          variant="ghost" 
          className="w-full justify-between rounded-none bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-100 hover:from-blue-200 hover:to-cyan-200 border-b border-blue-200 py-4 transition-all duration-300"
        >
          <span className="text-lg font-bold text-blue-800 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            Facts & Flash ✨
          </span>
          {isOpen ? 
            <ChevronUp className="w-5 h-5 text-blue-600" /> : 
            <ChevronDown className="w-5 h-5 text-blue-600" />
          }
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <h3 className="font-bold text-lg text-blue-800 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Your Body & Baby 💕
            </h3>
            <p className="text-base text-blue-700">Your baby is developing rapidly this week! Every week brings new changes for both you and your little one. Stay hydrated and get plenty of rest. 🌟</p>
          </div>
          <div className="p-4 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <h3 className="font-bold text-lg text-green-800 mb-3 flex items-center gap-2">
              <Gamepad2 className="w-5 h-5" />
              Daily Learning Game 🎮
            </h3>
            <div className="flex flex-col items-center">
              <p className="text-base text-green-700 text-center mb-4">Start your day's streak now! 🔥</p>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
                🎯 Play Today's Game
              </Button>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FactsFlashSection;
