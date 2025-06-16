
import { Baby, Shirt, Utensils, Waves, Car, Shield, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BabyEssentialsSection = () => {
  const categories = [
    {
      icon: Baby,
      title: "Nursery",
      items: ["Crib", "Changing Table", "Rocking Chair", "Night Light"],
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: Shirt,
      title: "Clothing",
      items: ["Onesies", "Sleep Suits", "Bibs", "Hats & Mittens"],
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: Utensils,
      title: "Feeding",
      items: ["Bottles", "Burp Cloths", "High Chair", "Breast Pump"],
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: Waves,
      title: "Bathing",
      items: ["Baby Tub", "Soft Towels", "Gentle Soap", "Bath Toys"],
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Car,
      title: "Travel",
      items: ["Car Seat", "Stroller", "Diaper Bag", "Carrier"],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Shield,
      title: "Safety",
      items: ["Baby Gates", "Cabinet Locks", "Outlet Covers", "Corner Guards"],
      gradient: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Baby Essentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated checklists with cultural sensitivity and expert recommendations for everything your baby needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-xl font-bold text-gray-800">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4 border-purple-300 text-purple-700 hover:bg-purple-50">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Culturally Sensitive Recommendations
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our expert team curates products that respect diverse cultural practices and traditions, ensuring every family feels supported and understood.
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-xl px-8 py-3">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BabyEssentialsSection;
