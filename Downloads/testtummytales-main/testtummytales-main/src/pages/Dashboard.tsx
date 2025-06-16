
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube, UtensilsCrossed, Baby, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const DashboardFeatureCard = ({ title, description, icon: Icon, path, bgColor, iconColor, buttonColor }) => {
  return (
    <Card className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${bgColor} border-0 rounded-2xl`}>
      <CardHeader className="text-center pb-4">
        <div className={`mx-auto w-16 h-16 ${iconColor} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-gray-800 mb-3">{title}</CardTitle>
        <CardDescription className="text-gray-600 font-medium leading-relaxed px-4">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0 pb-6">
        <Link to={path} className="w-full">
          <Button className={`w-full ${buttonColor} text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-base`}>
            Explore Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  // Check if user is logged in, redirect to login if not
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const features = [
    {
      title: "Your Essential Tests",
      description: "Track important prenatal tests and screenings for a healthy pregnancy journey.",
      icon: TestTube,
      path: "/map",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "bg-blue-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "What's In Your Thali",
      description: "Discover nutritious meal plans and recipes tailored for your pregnancy needs.",
      icon: UtensilsCrossed,
      path: "/resources",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "bg-green-500",
      buttonColor: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Set Up For The Baby",
      description: "Essential preparation checklist and tips for welcoming your little one.",
      icon: Baby,
      path: "/network",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      iconColor: "bg-pink-500",
      buttonColor: "bg-pink-500 hover:bg-pink-600"
    },
    {
      title: "Monitor Your Health",
      description: "Keep track of your health metrics and wellness throughout pregnancy.",
      icon: Heart,
      path: "/mental-health",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "bg-purple-500",
      buttonColor: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <Navigation />
      <div className="container mx-auto p-4 py-12">
        <div className="text-center mb-16">
          <h1 className="notebook-title text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-bold">
            Your Pregnancy Journey
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and resources to support you through every step of your beautiful pregnancy journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <DashboardFeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Personalized Guidance?</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">Connect with our AI assistant for instant support and answers to your pregnancy questions.</p>
            <Link to="/ask-amma">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Ask Amma Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
