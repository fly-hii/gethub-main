
import { ListChecks, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BabySetupSection = () => {
  return (
    <section id="baby-setup" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-6">
              <ListChecks className="h-6 w-6 text-amber-500" />
              <span className="text-amber-600 font-semibold">Baby Setup</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Checklists and Preparations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get organized with comprehensive checklists for your baby's arrival
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80" 
                  alt="Baby nursery preparation and setup"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                      <ListChecks className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Essential Items</h3>
                  </div>
                  <p className="text-gray-600">Complete checklists of everything you need for your baby's arrival.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                      <ListChecks className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Timeline Planning</h3>
                  </div>
                  <p className="text-gray-600">Know when to prepare what, with timely reminders and suggestions.</p>
                </CardContent>
              </Card>

              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white group">
                View Checklists
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySetupSection;
