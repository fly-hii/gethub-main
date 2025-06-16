
import { Button } from "@/components/ui/button";
import { Heart, Play, Baby } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="order-2 lg:order-1">
          <div className="mb-8">
            <div className="inline-flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Baby className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4">
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  TummyTales
                </h1>
                <p className="text-xl text-purple-700 font-semibold">Journey Together</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Pregnancy Companion for Every Step
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Connect, learn, and grow with a supportive community of mothers while receiving personalized AI guidance throughout your beautiful pregnancy journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg rounded-xl">
                <Heart className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl border-purple-300 text-purple-700 hover:bg-purple-50">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right Column - Hero Image */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-3xl blur-xl transform rotate-6"></div>
            <img 
              src="/lovable-uploads/1ae289fa-514d-4409-a2c5-6bfaebafb321.png" 
              alt="Pregnancy journey illustration with technical diagrams"
              className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              onError={(e) => {
                console.log('Image failed to load:', e);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
