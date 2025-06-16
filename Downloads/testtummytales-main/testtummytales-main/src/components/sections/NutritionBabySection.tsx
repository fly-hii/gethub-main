
import { Button } from "@/components/ui/button";
import { Camera, Baby } from "lucide-react";

const NutritionBabySection = () => {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Nutrition Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-green-200/50">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Smart Nutrition</h3>
            <p className="text-gray-600 mt-2">AI-powered food analysis for healthy pregnancy</p>
          </div>
          
          <div className="space-y-4 mb-6">
            {[
              { nutrient: "Protein", value: 85, color: "from-green-400 to-emerald-500" },
              { nutrient: "Iron", value: 72, color: "from-orange-400 to-red-500" },
              { nutrient: "Folate", value: 91, color: "from-blue-400 to-indigo-500" },
              { nutrient: "Calcium", value: 68, color: "from-purple-400 to-pink-500" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-2xl">
                <span className="font-medium text-gray-800">{item.nutrient}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-gray-600">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80" 
              alt="Healthy food"
              className="w-full h-32 object-cover rounded-2xl mb-4"
            />
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
              Scan Your Meal
            </Button>
          </div>
        </div>
        
        {/* Baby Prep Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-200/50">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Baby className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Baby Essentials</h3>
            <p className="text-gray-600 mt-2">Everything ready for your little one</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { category: "Feeding", progress: 88, items: 12 },
              { category: "Sleep", progress: 75, items: 8 },
              { category: "Clothing", progress: 92, items: 15 },
              { category: "Care", progress: 64, items: 10 }
            ].map((category, index) => (
              <div key={index} className="p-4 bg-blue-50 rounded-2xl text-center">
                <h4 className="font-bold text-gray-800 mb-2">{category.category}</h4>
                <div className="text-2xl font-black text-blue-600 mb-1">{category.progress}%</div>
                <p className="text-xs text-gray-600">{category.items} items ready</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    style={{ width: `${category.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=600&q=80" 
              alt="Baby essentials"
              className="w-full h-32 object-cover rounded-2xl mb-4"
            />
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              View Checklist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionBabySection;
