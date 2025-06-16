
import { UserPlus, Settings, Users, Mail, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Create your account and join our supportive community",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: Settings,
      title: "Set Up Profile",
      description: "Add your due date, preferences, and cultural background",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: Users,
      title: "Choose Your Role",
      description: "Select whether you're pregnant or supporting a mom",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Mail,
      title: "Receive Login",
      description: "Get secure access credentials via email",
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: Heart,
      title: "Start Your Journey",
      description: "Begin your personalized pregnancy experience",
      gradient: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with your personalized pregnancy journey in just a few simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-500 mb-2">Step {index + 1}</div>
                  <CardTitle className="text-lg font-bold text-gray-800">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
