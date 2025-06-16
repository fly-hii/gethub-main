
import { MessageCircle, Heart, ShoppingCart, DollarSign, Check } from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Everything You Need
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Large Feature Card */}
        <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50">
          <div className="h-40 mb-6 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
              alt="AI Assistant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-4 flex items-center justify-center">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ask Amma</h3>
          <p className="text-gray-600 mb-6">Your personal AI pregnancy guide available 24/7 to answer questions and provide support.</p>
          <ul className="space-y-3">
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-purple-500 mr-3" />
              Instant answers to pregnancy questions
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-purple-500 mr-3" />
              Personalized recommendations
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-purple-500 mr-3" />
              Evidence-based guidance
            </li>
          </ul>
        </div>
        
        {/* Medium Feature Cards */}
        {[
          { title: "Mom Circle", icon: Heart, color: "from-pink-500 to-red-500", desc: "Connect with loving mothers", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
          { title: "Timeline", icon: CalendarIcon, color: "from-blue-500 to-indigo-500", desc: "Track your pregnancy week by week", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80" },
          { title: "Smart Shopping", icon: ShoppingCart, color: "from-green-500 to-emerald-500", desc: "Curated baby essentials", image: "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=400&q=80" },
          { title: "Budget Planner", icon: DollarSign, color: "from-yellow-500 to-amber-500", desc: "Financial planning made easy", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80" }
        ].map((feature, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200/50 hover:shadow-xl transition-all duration-300">
            <div className="h-24 mb-4 rounded-xl overflow-hidden">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl mb-4 flex items-center justify-center`}>
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
