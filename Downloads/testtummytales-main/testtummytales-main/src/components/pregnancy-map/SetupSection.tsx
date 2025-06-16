
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SetupSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="space-y-4 order-1 lg:order-1">
        <Button 
          className="w-full h-auto py-6 bg-tummytales-blue hover:bg-blue-300"
          onClick={() => navigate('/general-preparation')}
        >
          <div>
            <p className="font-bold">General Prep</p>
            <p className="text-xs">Essential items to prepare</p>
          </div>
        </Button>
        <div className="p-4 bg-blue-50 rounded-lg">
          <h5 className="font-semibold mb-2">Must-Have Items</h5>
          <ul className="text-sm space-y-1">
            <li>• Car seat installation</li>
            <li>• Hospital bag essentials</li>
            <li>• Newborn clothing basics</li>
          </ul>
        </div>
      </div>
      <div className="space-y-4 order-2 lg:order-2">
        <Button 
          className="w-full h-auto py-6 bg-tummytales-yellow hover:bg-yellow-300"
          onClick={() => navigate('/family-traditions')}
        >
          <div>
            <p className="font-bold">Cultural Prep</p>
            <p className="text-xs">Cultural traditions and rituals</p>
          </div>
        </Button>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h5 className="font-semibold mb-2">Cultural Considerations</h5>
          <ul className="text-sm space-y-1">
            <li>• Traditional naming ceremonies</li>
            <li>• Cultural birthing practices</li>
            <li>• Family blessing rituals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SetupSection;
