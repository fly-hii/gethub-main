
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="text-center">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of mothers who trust TummyTales for their pregnancy journey. Free to start, beautiful to use.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg rounded-xl font-bold">
              <Apple className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg rounded-xl font-bold">
              <Smartphone className="mr-2 h-5 w-5" />
              Get on Android
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              100% Free
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              AI-Powered
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Secure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
