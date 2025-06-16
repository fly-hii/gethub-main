
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PregnancyMapSection = () => {
  return (
    <section id="pregnancy-map" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-6">
              <MapPin className="h-6 w-6 text-sky-500" />
              <span className="text-sky-600 font-semibold">Pregnancy Map</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Your Week-by-Week Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate your pregnancy journey with our comprehensive week-by-week roadmap
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-400 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Weekly Milestones</h3>
                  </div>
                  <p className="text-gray-600">Track your baby's development and your body's changes week by week.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-sky-400 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Visual Progress</h3>
                  </div>
                  <p className="text-gray-600">See your pregnancy journey visualized with beautiful graphics and timelines.</p>
                </CardContent>
              </Card>

              <Button className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white group">
                Explore Map
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80" 
                  alt="Pregnancy timeline and milestones"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PregnancyMapSection;
