import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CalendarSection from "@/components/sections/CalendarSection";
import CommunitySection from "@/components/sections/CommunitySection";
import NutritionBabySection from "@/components/sections/NutritionBabySection";
import TrustSecuritySection from "@/components/sections/TrustSecuritySection";
import CTASection from "@/components/sections/CTASection";
import AskAmmaSection from "@/components/sections/AskAmmaSection";
import MomToMomSection from "@/components/sections/MomToMomSection";
import PregnancyMapSection from "@/components/sections/PregnancyMapSection";
import BabySetupSection from "@/components/sections/BabySetupSection";
import KickCountTrackerSection from "@/components/sections/KickCountTrackerSection";
import NeurationSection from "@/components/sections/NeurationSection";
import ActivityCalendarSection from "@/components/sections/ActivityCalendarSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  UserPlus, 
  Heart, 
  Users, 
  Settings,
  Bot,
  HeartHandshake,
  MapPin,
  ListChecks,
  PiggyBank,
  Activity,
  Leaf,
  CalendarDays,
  Sparkles,
  Camera
} from "lucide-react";

const About2 = () => {
  const whyTummyTalesFeatures = [
    { 
      icon: Bot, 
      title: "Ask Amma", 
      href: "#ask-amma",
      iconBgColor: "from-purple-400 to-indigo-400",
      description: "AI-powered guidance anytime."
    },
    { 
      icon: HeartHandshake, 
      title: "Mom to Mom", 
      href: "#mom-to-mom",
      iconBgColor: "from-teal-400 to-cyan-400",
      description: "Connect with fellow mothers."
    },
    { 
      icon: MapPin, 
      title: "Pregnancy Map", 
      href: "#pregnancy-map",
      iconBgColor: "from-sky-400 to-blue-400",
      description: "Your week-by-week guide."
    },
    { 
      icon: ListChecks, 
      title: "Baby Setup", 
      href: "#baby-setup",
      iconBgColor: "from-amber-400 to-orange-400",
      description: "Checklists and preparations."
    },
    { 
      icon: PiggyBank, 
      title: "Monetary Health", 
      href: "#features",
      iconBgColor: "from-emerald-400 to-green-400",
      description: "Financial planning for baby."
    },
    { 
      icon: Activity, 
      title: "Kick Count Tracker", 
      href: "#kick-tracker",
      iconBgColor: "from-yellow-400 to-orange-400",
      description: "Monitor baby's movements."
    },
    { 
      icon: Camera, 
      title: "Neuration", 
      href: "#neuration",
      iconBgColor: "from-cyan-400 to-blue-400",
      description: "AI food detection."
    },
    { 
      icon: CalendarDays, 
      title: "Activity Calendar", 
      href: "#activity-calendar",
      iconBgColor: "from-indigo-400 to-purple-400",
      description: "Track appointments & events."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-teal-400/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-300/30 to-teal-500/30 rounded-full blur-2xl opacity-70"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-200/25 to-emerald-300/25 rounded-full blur-xl opacity-70"></div>
      </div>

      <Navigation />
      
      <section className="py-20 text-center relative z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="inline-block animate-bounce bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Welcome to TummyTales
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your Smart Pregnancy Companion for a beautiful journey
          </p>
        </div>
      </section>
      
      <div className="container mx-auto py-8 px-4 relative z-10">
        <div className="bg-gradient-to-r from-white/70 via-emerald-50/70 to-teal-50/70 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 shadow-lg">
          <HeroSection />
        </div>
        
        {/* How It Works Section */}
        <div className="bg-gradient-to-l from-teal-100/80 to-emerald-100/80 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 shadow-lg">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-6">
              <Settings className="h-6 w-6 text-teal-500" />
              <span className="text-emerald-600 font-semibold">Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get started with TummyTales in just 4 simple steps</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { step: "01", icon: Download, title: "Download App", desc: "Download TummyTales from App Store or Google Play Store and install it on your device.", color: "from-emerald-400 to-teal-400" },
              { step: "02", icon: UserPlus, title: "Create Profile", desc: "Set up your pregnancy profile with due date, preferences, and personal information.", color: "from-teal-400 to-emerald-400" },
              { step: "03", icon: Heart, title: "Get Personalized Care", desc: "Receive AI-powered guidance, tips, and support tailored to your pregnancy stage.", color: "from-emerald-400 to-teal-400" },
              { step: "04", icon: Users, title: "Join Community", desc: "Connect with other expecting mothers and share your beautiful pregnancy journey.", color: "from-teal-400 to-emerald-400" }
            ].map((step, index) => (
              <Card key={index} className="group bg-white/90 backdrop-blur-md hover:bg-white transition-all duration-300 border-0 hover:shadow-2xl transform hover:scale-[1.03] rounded-2xl overflow-hidden relative">
                <CardContent className="p-6 md:p-8 relative">
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
                    <div className="flex-shrink-0 mb-4 sm:mb-0">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 relative`}>
                        <step.icon className="h-10 w-10 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 font-bold text-sm shadow-lg">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Download className="mr-3 h-5 w-5" />
              Start Your Journey Today
            </Button>
          </div>
        </div>

        {/* Why TummyTales Section */}
        <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 shadow-lg">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-6">
              <Sparkles className="h-6 w-6 text-teal-500" />
              <span className="text-emerald-600 font-semibold">Why TummyTales?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Discover What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore unique features designed for your pregnancy journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyTummyTalesFeatures.map((feature, index) => (
              <a key={index} href={feature.href} className="block group">
                <Card className="bg-white/90 backdrop-blur-md hover:bg-white transition-all duration-300 border-0 hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 rounded-2xl overflow-hidden text-center cursor-pointer h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col items-center justify-center flex-grow relative">
                    <div className={`mb-4 p-4 bg-gradient-to-br ${feature.iconBgColor} rounded-full inline-block group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Feature Sections */}
      <AskAmmaSection />
      <MomToMomSection />
      <PregnancyMapSection />
      <BabySetupSection />
      <KickCountTrackerSection />
      <NeurationSection />
      <ActivityCalendarSection />
      
      {/* Existing Sections with IDs for navigation */}
      <div className="container mx-auto px-4 relative z-10">
        <div id="features" className="bg-gradient-to-l from-teal-100/80 to-emerald-100/80 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 shadow-lg">
          <FeaturesSection />
        </div>
        
        <div id="calendar" className="bg-gradient-to-r from-emerald-200/60 to-teal-200/60 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 shadow-lg">
          <CalendarSection />
        </div>
        
        <div id="community" className="bg-gradient-to-l from-teal-50/90 to-emerald-50/90 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 shadow-lg">
          <CommunitySection />
        </div>
        
        <div id="nutrition-baby" className="bg-gradient-to-r from-emerald-100/70 to-teal-100/70 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 shadow-lg">
          <NutritionBabySection />
        </div>
        
        <div id="trust-security" className="bg-gradient-to-l from-teal-200/50 to-emerald-200/50 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-12 shadow-lg">
          <TrustSecuritySection />
        </div>
        
        <div className="bg-gradient-to-r from-emerald-300/40 to-teal-300/40 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-lg">
          <CTASection />
        </div>
      </div>
    </div>
  );
};

export default About2;
