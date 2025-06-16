
import { HeartHandshake, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MomToMomSection = () => {
  return (
    <section id="mom-to-mom" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-6">
              <HeartHandshake className="h-6 w-6 text-teal-500" />
              <span className="text-teal-600 font-semibold">Mom to Mom</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Connect with Fellow Mothers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a supportive community of expecting mothers sharing experiences and advice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                  alt="Group of pregnant women supporting each other"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <HeartHandshake className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Peer Support</h3>
                  </div>
                  <p className="text-gray-600">Connect with mothers at similar stages of pregnancy for mutual support.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
                      <HeartHandshake className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Share Experiences</h3>
                  </div>
                  <p className="text-gray-600">Share your journey and learn from the experiences of other mothers.</p>
                </CardContent>
              </Card>

              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white group">
                Join Community
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomToMomSection;
