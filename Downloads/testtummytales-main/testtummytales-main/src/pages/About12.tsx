
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Star, Download, Heart, Users, Baby, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const About12 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Navigation />
      
      {/* Hero Section with Slide-in Animation */}
      <section className="py-20 bg-gradient-to-b from-purple-100 via-blue-100 to-pink-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Welcome to TummyTales
            </span>
          </h1>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Your Smart Pregnancy Companion for Every Step of Your Journey
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Star className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 hover:text-purple-700 px-8 py-3 rounded-full text-lg hover:scale-105 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose TummyTales?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Personalized Care",
                description: "AI-powered guidance tailored to your unique pregnancy journey",
                color: "from-pink-400 to-rose-400"
              },
              {
                icon: Users,
                title: "Community Support",
                description: "Connect with other expecting mothers in a safe, supportive environment",
                color: "from-purple-400 to-blue-400"
              },
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your data is secure with enterprise-grade privacy protection",
                color: "from-blue-400 to-cyan-400"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of mothers who trust TummyTales for their pregnancy experience
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Baby className="mr-2 h-5 w-5" />
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About12;
