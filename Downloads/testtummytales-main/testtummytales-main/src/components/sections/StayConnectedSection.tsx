
import { Bell, Mail, Calendar, MessageCircle, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StayConnectedSection = () => {
  const features = [
    {
      icon: Bell,
      title: "Real-Time Notifications",
      description: "Instant alerts for important pregnancy milestones and health reminders"
    },
    {
      icon: Mail,
      title: "Weekly Email Digests",
      description: "Personalized updates delivered to your inbox every week"
    },
    {
      icon: Calendar,
      title: "Development Updates",
      description: "Track your baby's growth with weekly size comparisons"
    },
    {
      icon: MessageCircle,
      title: "24/7 Ask Amma",
      description: "Your AI pregnancy companion is always available to help"
    }
  ];

  const weeklyUpdates = [
    { week: 12, comparison: "Lime", size: "2 inches" },
    { week: 16, comparison: "Avocado", size: "4.6 inches" },
    { week: 20, comparison: "Banana", size: "6.5 inches" },
    { week: 24, comparison: "Corn", size: "8.5 inches" },
    { week: 28, comparison: "Eggplant", size: "10 inches" },
    { week: 32, comparison: "Squash", size: "11 inches" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Stay Connected Throughout Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never miss a moment with personalized updates, reminders, and 24/7 support
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Connection Features</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold text-gray-800 flex items-center justify-center">
                  <Heart className="mr-2 h-5 w-5 text-pink-500" />
                  Weekly Baby Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyUpdates.map((update, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {update.week}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Week {update.week}</div>
                          <div className="text-sm text-gray-600">Size of a {update.comparison}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-purple-600">{update.size}</div>
                        <div className="text-xs text-gray-500">length</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnectedSection;
