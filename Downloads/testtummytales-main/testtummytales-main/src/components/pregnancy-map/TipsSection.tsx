
import React from "react";

const TipsSection: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="order-1 lg:order-1">
        <h4 className="font-semibold mb-3 text-lg">Health & Wellness</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li className="notebook-text">Stay hydrated with plenty of water throughout the day.</li>
          <li className="notebook-text">Take your prenatal vitamins as recommended.</li>
          <li className="notebook-text">Get adequate rest and sleep when possible.</li>
          <li className="notebook-text">Maintain gentle exercise as approved by your doctor.</li>
        </ul>
      </div>
      <div className="order-2 lg:order-2">
        <h4 className="font-semibold mb-3 text-lg">Preparation Tips</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li className="notebook-text">Start preparing your hospital bag if in third trimester.</li>
          <li className="notebook-text">Research pediatricians in your area.</li>
          <li className="notebook-text">Consider taking childbirth classes.</li>
          <li className="notebook-text">Plan your maternity leave and discuss with employer.</li>
        </ul>
      </div>
    </div>
  );
};

export default TipsSection;
