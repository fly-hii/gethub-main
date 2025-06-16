
import React from "react";
import { Button } from "@/components/ui/button";

const MealsSection: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="text-center order-1 lg:order-1">
        <div className="w-40 h-40 rounded-full bg-tummytales-green mx-auto mb-4 flex items-center justify-center">
          <div className="text-center">
            <p className="font-bold">Focus on:</p>
            <p>Iron</p>
            <p>Calcium</p>
            <p>Omega-3</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 order-2 lg:order-2">
        <div>
          <h5 className="font-semibold mb-3">Nutrition Guidelines</h5>
          <div className="space-y-3">
            <Button className="w-full bg-tummytales-blue hover:bg-blue-300">Focus of the Week</Button>
            <Button variant="outline" className="w-full">Foods to Avoid</Button>
          </div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h6 className="font-semibold mb-2">Weekly Nutrition Tips</h6>
          <ul className="text-sm space-y-1">
            <li>• Include leafy greens for folate</li>
            <li>• Choose lean proteins</li>
            <li>• Stay hydrated with water</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MealsSection;
