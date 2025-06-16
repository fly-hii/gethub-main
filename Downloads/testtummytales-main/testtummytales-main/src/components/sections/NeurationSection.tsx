
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Scan, Zap, CheckCircle } from "lucide-react";

const NeurationSection = () => {
  return (
    <section id="neuration" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-6">
              <Camera className="h-6 w-6 text-cyan-500" />
              <span className="text-cyan-600 font-semibold">Neuration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              AI-Powered Food Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scan your meals instantly and get detailed nutritional analysis for your pregnancy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Scan className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Instant Recognition</h3>
                  </div>
                  <p className="text-gray-600">Point your camera at any food and get instant nutritional breakdown.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Smart Analysis</h3>
                  </div>
                  <p className="text-gray-600">AI analyzes ingredients and provides pregnancy-specific recommendations.</p>
                </CardContent>
              </Card>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl shadow-lg">
                Try Camera Scan
              </Button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="AI food recognition technology"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeurationSection;
