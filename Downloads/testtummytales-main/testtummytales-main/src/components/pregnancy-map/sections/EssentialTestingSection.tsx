
import React from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, TestTube } from "lucide-react";

interface EssentialTestingSectionProps {
  selectedWeek: number;
  isOpen: boolean;
  onToggle: () => void;
}

const EssentialTestingSection: React.FC<EssentialTestingSectionProps> = ({ selectedWeek, isOpen, onToggle }) => {
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-gradient-to-r from-red-50 to-red-100 border-red-300 text-red-800 shadow-lg';
      case 'medium': return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-300 text-yellow-800 shadow-md';
      case 'low': return 'bg-gradient-to-r from-green-50 to-green-100 border-green-300 text-green-800 shadow-sm';
      default: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 text-gray-800 shadow-sm';
    }
  };

  return (
    <Collapsible open={isOpen} className="border-2 border-purple-200 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CollapsibleTrigger asChild onClick={onToggle}>
        <Button 
          variant="ghost" 
          className="w-full justify-between rounded-none bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 hover:from-purple-200 hover:to-pink-200 border-b border-purple-200 py-4 transition-all duration-300"
        >
          <span className="text-lg font-bold text-purple-800 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg">
              <TestTube className="w-5 h-5 text-white" />
            </div>
            Essential Testing 🔬
          </span>
          {isOpen ? 
            <ChevronUp className="w-5 h-5 text-purple-600" /> : 
            <ChevronDown className="w-5 h-5 text-purple-600" />
          }
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6">
        <div className="space-y-4">
          {getEssentialTestingContent(selectedWeek).map((test, index) => (
            <div key={index} className={`p-4 rounded-xl border-2 ${getPriorityColor(test.priority)} transition-all duration-300 hover:shadow-lg transform hover:scale-105`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{test.name} 🏥</h3>
                  <p className="text-sm mt-2 opacity-90">{test.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 text-xs font-bold rounded-full bg-white bg-opacity-50 shadow-sm">
                    {test.priority.toUpperCase()} PRIORITY ⚡
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white hover:bg-gray-50 w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Schedule 📅
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default EssentialTestingSection;
