
import { MessageCircle, Users, Calendar, ShoppingCart, DollarSign, Activity, Camera, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhyTummytalesSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Ask Amma",
      description: "AI assistant available 24/7 for instant pregnancy guidance and support",
      gradient: "from-pink-300 to-rose-400"
    },
    {
      icon: Users,
      title: "Mom to Mom",
      description: "Peer support and private chats with expecting mothers worldwide",
      gradient: "from-blue-300 to-indigo-400"
    },
    {
      icon: Calendar,
      title: "Pregnancy Map",
      description: "Complete trimester roadmap to guide your journey",
      gradient: "from-purple-300 to-pink-400"
    },
    {
      icon: ShoppingCart,
      title: "Baby Setup",
      description: "Expert shopping lists tailored to your cultural preferences",
      gradient: "from-green-300 to-teal-400"
    },
    {
      icon: DollarSign,
      title: "Monetary Health",
      description: "Financial tools and planning for growing families",
      gradient: "from-yellow-300 to-orange-400"
    },
    {
      icon: Activity,
      title: "Kick Count Tracker",
      description: "Monitor and track your baby's movements with ease",
      gradient: "from-red-300 to-pink-400"
    },
    {
      icon: Camera,
      title: "Neuration",
      description: "AI food detection via camera for nutrition safety",
      gradient: "from-violet-300 to-purple-400"
    },
    {
      icon: Bell,
      title: "Activity Calendar",
      description: "Track appointments, reminders, and pregnancy milestones",
      gradient: "from-cyan-300 to-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Why Choose Tummytales?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pregnancy support designed with love, backed by science, and enhanced by AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTummytalesSection;
