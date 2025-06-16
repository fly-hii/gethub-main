
import React, { useState } from "react";
import WeekHeader from "./WeekHeader";
import CollapsibleSection from "./CollapsibleSection";
import WeekToWeekContent from "./WeekToWeekContent";
import EssentialTestingCards from "./EssentialTestingCards";
import TipsSection from "./TipsSection";
import SetupSection from "./SetupSection";
import MealsSection from "./MealsSection";

interface WeekViewProps {
  weekNum: number;
  startDate: Date;
  endDate: Date;
}

const WeekView: React.FC<WeekViewProps> = ({ weekNum, startDate, endDate }) => {
  const [openSection, setOpenSection] = useState<string | null>("facts");
  
  return (
    <div className="notebook-paper p-6 mb-6 border border-gray-200 rounded-lg">
      <WeekHeader weekNum={weekNum} startDate={startDate} endDate={endDate} />
      
      <div className="space-y-4">
        <CollapsibleSection 
          id="facts" 
          title="Facts & Flash" 
          isOpen={openSection === "facts"} 
          onClick={() => setOpenSection(openSection === "facts" ? null : "facts")}
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="order-1 lg:order-1">
              <WeekToWeekContent weekNum={weekNum} />
            </div>
            <div className="order-2 lg:order-2">
              <EssentialTestingCards weekNum={weekNum} />
            </div>
          </div>
        </CollapsibleSection>
        
        <CollapsibleSection 
          id="tips" 
          title="Tips of the Week" 
          isOpen={openSection === "tips"} 
          onClick={() => setOpenSection(openSection === "tips" ? null : "tips")}
        >
          <TipsSection />
        </CollapsibleSection>
        
        <CollapsibleSection 
          id="setup" 
          title="Set Up for the Baby" 
          isOpen={openSection === "setup"} 
          onClick={() => setOpenSection(openSection === "setup" ? null : "setup")}
        >
          <SetupSection />
        </CollapsibleSection>
        
        <CollapsibleSection 
          id="meals" 
          title="Meals and Diet" 
          isOpen={openSection === "meals"} 
          onClick={() => setOpenSection(openSection === "meals" ? null : "meals")}
        >
          <MealsSection />
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default WeekView;
