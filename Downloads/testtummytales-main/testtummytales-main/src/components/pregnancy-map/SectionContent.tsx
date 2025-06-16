
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Gamepad2, ChevronDown, ChevronUp, Lightbulb, TestTube, Home, UtensilsCrossed } from "lucide-react";

interface SectionContentProps {
  openSection: string | null;
  setOpenSection: (section: string | null) => void;
}

const SectionContent: React.FC<SectionContentProps> = ({ openSection, setOpenSection }) => {
  const sectionConfig = [
    {
      id: "facts",
      title: "Facts & Flash",
      icon: Gamepad2,
      content: (
        <div className="p-6">
          <p className="text-gray-700 mb-4">Your baby is developing rapidly this week! Every week brings new changes for both you and your little one.</p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Start Today's Game
          </Button>
        </div>
      )
    },
    {
      id: "tips",
      title: "Tips of the Week",
      icon: Lightbulb,
      content: (
        <div className="p-6 space-y-3">
          <ul className="space-y-2 text-gray-700">
            <li>• Stay hydrated with plenty of water throughout the day</li>
            <li>• Take your prenatal vitamins as recommended</li>
            <li>• Get adequate rest and sleep when possible</li>
            <li>• Maintain gentle exercise as approved by your doctor</li>
          </ul>
        </div>
      )
    },
    {
      id: "testing",
      title: "Essential Testing",
      icon: TestTube,
      content: (
        <div className="p-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-800">Blood Pressure Monitoring</h3>
              <p className="text-sm text-gray-600">Regular monitoring for pregnancy health</p>
            </div>
            <Button variant="outline" size="sm">Schedule</Button>
          </div>
        </div>
      )
    },
    {
      id: "setup",
      title: "Set Up for the Baby",
      icon: Home,
      content: (
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Mandatory Prep</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Crib & Mattress</p>
                <p>• Car Seat</p>
                <p>• Diaper Supplies</p>
                <p>• Baby Clothes</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Cultural Prep</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Baby Shower</p>
                <p>• Naming Ceremony</p>
                <p>• Blessing Rituals</p>
                <p>• Photo Sessions</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "meals",
      title: "Meals and Diet",
      icon: UtensilsCrossed,
      content: (
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Recommended Foods</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Leafy green vegetables</p>
                <p>• Lean proteins</p>
                <p>• Whole grains</p>
                <p>• Dairy products</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Foods to Avoid</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• High-mercury fish</p>
                <p>• Raw or undercooked meats</p>
                <p>• Unpasteurized dairy</p>
                <p>• Excessive caffeine</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-4 mb-8">
      {sectionConfig.map((section) => (
        <Card key={section.id} className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
          <Collapsible open={openSection === section.id}>
            <CollapsibleTrigger 
              asChild 
              onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
            >
              <div className="w-full p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <section.icon className="w-5 h-5 text-gray-600" />
                    <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
                  </div>
                  {openSection === section.id ? 
                    <ChevronUp className="w-5 h-5 text-gray-600" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  }
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {section.content}
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ))}
    </div>
  );
};

export default SectionContent;
