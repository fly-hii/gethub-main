
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MessageCircle, Heart, Calendar as CalendarIcon, ShoppingCart, DollarSign, Activity, Camera, Clock, Shield, Lock, CheckCircle, User, Apple, Smartphone, Mail, Bell, Bot, Star, Users, Download, UserPlus, Settings, Dumbbell, Calculator, Target, Utensils, Stethoscope } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Welcome to TummyTales";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []); // Added fullText to dependency array, though not strictly necessary if fullText never changes

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToDownload = () => {
    const element = document.getElementById('download-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 selection:bg-pink-500 selection:text-white">
      <Navigation />
      {/* Enhanced Hero Section */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 min-h-[80px] md:min-h-[120px] flex items-center justify-center lg:justify-start">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500 inline-block">
                  {displayedText}
                  <span className="animate-pulse text-pink-500">|</span>
                </span>
              </h1>
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-semibold text-gray-700 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Your Smart Pregnancy Companion
                </p>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  From expert guidance to community support, food tracking to cultural care – experience a new journey of motherhood.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-pink-300/50 hover:scale-105 transition-all duration-300 transform">
                  <Star className="mr-3 h-6 w-6" /> Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-pink-400 text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-xl hover:border-pink-500 transition-all duration-300"
                  onClick={scrollToDownload}
                >
                  <Download className="mr-3 h-6 w-6" /> Download App
                </Button>
              </div>
              <p className="text-base text-gray-500 italic text-center lg:text-left font-medium">
                Empowering Moms with Knowledge, Support & Love – One Kick at a Time.
              </p>
            </div>
            {/* Enhanced Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-pink-400/30 via-rose-400/30 to-pink-500/30 rounded-3xl blur-3xl transform rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 animate-pulse"></div>
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-300/20 via-rose-300/20 to-pink-400/20 rounded-3xl blur-2xl transform -rotate-3 group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500"></div>
                <img
                  src="/lovable-uploads/1ae289fa-514d-4409-a2c5-6bfaebafb321.png"
                  alt="Pregnancy journey illustration with technical diagrams"
                  className="relative w-full max-h-[500px] h-auto object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/50"
                  onError={(e) => {
                    console.log('Image failed to load:', e);
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/ffe4e6/db2777?text=TummyTales';
                  }}
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border-4 border-white">
                  <Smartphone className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16 px-4 space-y-20">
        {/* Enhanced How It Works Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white mb-6 px-6 py-2 text-lg rounded-full shadow-lg">
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">How It Works</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">Simple 5-step onboarding journey</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", icon: UserPlus, title: "Register", desc: "Create your account", color: "from-pink-400 to-rose-400" },
              { step: "2", icon: Settings, title: "Set Profile", desc: "Due date, preferences, culture", color: "from-rose-400 to-pink-500" },
              { step: "3", icon: User, title: "Choose Role", desc: "Pregnant or supporting mom", color: "from-pink-500 to-rose-500" },
              { step: "4", icon: Mail, title: "Email Login", desc: "Secure access sent to email", color: "from-rose-500 to-pink-600" },
              { step: "5", icon: Heart, title: "Start Journey", desc: "Personalized experience begins", color: "from-pink-600 to-rose-600" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500 border-2 border-pink-100 hover:border-pink-300 hover:scale-110 group bg-gradient-to-br from-white to-pink-50/50">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {item.step}
                  </div>
                  <item.icon className="h-10 w-10 mx-auto mb-4 text-pink-600 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-xl mb-3 text-gray-700 group-hover:text-pink-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Why TummyTales Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white mb-6 px-6 py-2 text-lg rounded-full shadow-lg">
              Our Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Why TummyTales?</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Discover comprehensive tools and support designed for your pregnancy journey</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageCircle, title: "Ask Amma", desc: "AI assistant available 24/7 for all your pregnancy questions", color: "from-pink-400 to-rose-400", sectionId: "ask-amma-section" },
              { icon: Users, title: "Mom to Mom", desc: "Peer support and private chats with real mothers", color: "from-rose-400 to-pink-400", sectionId: "community-section" },
              { icon: CalendarIcon, title: "Pregnancy Map", desc: "Complete trimester roadmap with personalized insights", color: "from-pink-400 to-rose-400", sectionId: "calendar-section" },
              { icon: ShoppingCart, title: "Baby Setup", desc: "Expert shopping lists with cultural considerations", color: "from-rose-400 to-pink-400", sectionId: "baby-setup-section" },
              { icon: DollarSign, title: "Monetary Health", desc: "Financial tools for growing families and budget planning", color: "from-pink-400 to-rose-400", sectionId: "monetary-section" },
              { icon: Activity, title: "Kick Count Tracker", desc: "Monitor baby movements and development milestones", color: "from-rose-400 to-pink-400", sectionId: "kick-tracker-section" },
              { icon: Camera, title: "Ask Nutrition", desc: "AI food detection via camera with nutrition analysis", color: "from-pink-400 to-rose-400", sectionId: "nutrition-section" },
              { icon: Clock, title: "Activity Calendar", desc: "Track appointments, reminders, and important milestones", color: "from-rose-400 to-pink-400", sectionId: "calendar-section" }
            ].map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:shadow-pink-200/50 hover:scale-110 hover:-rotate-2 transition-all duration-500 group cursor-pointer border-2 border-transparent hover:border-pink-200 overflow-hidden bg-gradient-to-br from-white to-pink-50/30"
                onClick={() => scrollToSection(feature.sectionId)}
              >
                <CardHeader className="text-center pt-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-pink-600 transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <CardDescription className="text-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300 px-2 text-base leading-relaxed">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Activity Calendar Demo Section */}
        <div id="calendar-section" className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white mb-6 px-6 py-2 text-lg rounded-full shadow-lg">
              New Feature
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Activity Calendar</h2>
            <p className="text-xl md:text-2xl text-gray-600">Track, Plan, and Stay Ahead with our comprehensive pregnancy calendar</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 rounded-3xl p-8 shadow-xl border border-pink-200/50">
              <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
                <CalendarIcon className="mr-4 h-8 w-8 text-pink-500"/> Sample Calendar Events
              </h3>
              <div className="space-y-5">
                {[
                  { date: "Today", event: "Take prenatal vitamins", time: "9:00 AM", icon: Heart, iconColor: "text-red-500" },
                  { date: "Tomorrow", event: "Doctor appointment", time: "2:00 PM", icon: Stethoscope, iconColor: "text-blue-500" },
                  { date: "Wed", event: "Yoga class", time: "6:00 PM", icon: Dumbbell, iconColor: "text-purple-500" },
                  { date: "Thu", event: "Nutrition check-in", time: "10:00 AM", icon: Utensils, iconColor: "text-green-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-pink-100">
                    <div className={`p-3 rounded-full bg-opacity-20 ${item.iconColor.replace('text-','bg-').replace('-500','-100')}`}>
                      <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg text-gray-700">{item.event}</div>
                      <div className="text-gray-500">{item.time} - {item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {[
                { title: "Daily Health Reminders", desc: "Never miss important health activities.", icon: Bell, color: "pink" },
                { title: "Meal Plan Alerts", desc: "Timely nutrition guidance for you and baby.", icon: Utensils, color: "rose" },
                { title: "Event Sync", desc: "Seamlessly integrates with your phone calendar.", icon: Smartphone, color: "purple" }
              ].map((item, index) => (
                <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 border-${item.color}-400 hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                  <div className="flex items-center mb-3">
                    <item.icon className={`h-7 w-7 mr-4 text-${item.color}-500`} />
                    <h4 className={`font-bold text-xl text-${item.color}-700`}>{item.title}</h4>
                  </div>
                  <p className="text-gray-600 ml-11 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ask Amma Section */}
        <div id="ask-amma-section" className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Ask Amma - Your AI Companion</h2>
                <p className="text-xl md:text-2xl text-gray-600">Get instant, personalized answers to all your pregnancy questions</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 rounded-3xl p-8 shadow-xl border border-pink-200/50">
                        <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
                            <Bot className="mr-4 h-8 w-8 text-pink-600" /> 24/7 AI Assistant Features
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                            {[
                                "Instant responses to pregnancy concerns",
                                "Evidence-based medical information",
                                "Personalized advice based on your trimester",
                                "Cultural and regional pregnancy guidance"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4 p-3 hover:bg-white/50 rounded-xl transition-colors">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                                    <span className="text-lg">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-3xl blur-2xl transform rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
                        alt="AI chatbot interface"
                        className="relative w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white/50"
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/ffe4e6/db2777?text=Ask+Amma'; }}
                    />
                </div>
            </div>
        </div>

        {/* Join Our Community Section */}
        <div id="community-section" className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Join Our Mom-to-Mom Community</h2>
                <p className="text-xl md:text-2xl text-gray-600">Connect with real moms for support, advice, and friendships</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1">
                    <h3 className="text-3xl font-bold text-gray-700 mb-8">Real Connections, Real Support</h3>
                    <ul className="space-y-4 mb-10 text-gray-600">
                        {[
                            "Support forums with verified mothers",
                            "Private chats for personal support",
                            "Share experiences and tips",
                            "Long-term friendships beyond pregnancy"
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-4 p-3 hover:bg-pink-50/50 rounded-xl transition-colors">
                                <Users className="h-6 w-6 text-pink-500 mt-1 shrink-0" />
                                <span className="text-lg">{text}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="grid grid-cols-2 gap-5">
                        {[
                            "#PregnancySupport",
                            "#MomCommunity",
                            "#BumpBuddies",
                            "#MotherhoodJourney"
                        ].map((hashtag, index) => (
                            <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl text-center hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default border border-pink-200/50">
                                <div className="text-pink-600 font-bold text-lg">{hashtag}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative order-1 lg:order-2 group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-3xl blur-2xl transform -rotate-3 group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                        alt="Group of mothers supporting each other"
                        className="relative w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white/50"
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/ffe4e6/db2777?text=Community'; }}
                    />
                </div>
            </div>
        </div>

        {/* Smart Food Planning Section */}
        <div id="nutrition-section" className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Smart Food Planning & Nutrition</h2>
                <p className="text-xl md:text-2xl text-gray-600">AI-powered nutrition tracking for a healthy pregnancy</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 items-center">
                <div className="space-y-8 lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
                        <Camera className="mr-4 h-8 w-8 text-pink-500"/> Key Nutrition Features
                    </h3>
                    <ul className="space-y-4 text-gray-600">
                        {[
                            "Trimester-based meal plans",
                            "AI meal image recognition & analysis",
                            "Real-time food safety notifications",
                            "Personalized dietary recommendations"
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-4 p-3 hover:bg-pink-50/50 rounded-xl transition-colors">
                                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                                <span className="text-lg">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative lg:col-span-1 group">
                    <div className="absolute -inset-2 bg-gradient-to-br from-green-300/20 to-yellow-300/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-all duration-500"></div>
                    <img
                        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80"
                        alt="Healthy pregnancy nutrition"
                        className="relative w-full h-64 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white/50"
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/e6fff0/22c55e?text=Nutrition'; }}
                    />
                </div>
                <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-xl lg:col-span-1 border border-pink-200/50">
                    <h4 className="font-bold text-gray-700 mb-6 text-xl">Nutrition Analysis Sample</h4>
                    <div className="space-y-5">
                        {[
                            { nutrient: "Protein", level: "Excellent", value: 90 },
                            { nutrient: "Iron", level: "Good", value: 75 },
                            { nutrient: "Folate", level: "Optimal", value: 85 },
                            { nutrient: "Calcium", level: "Needs Improvement", value: 40 }
                        ].map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-700">{item.nutrient}</span>
                                    <span className="text-gray-500">{item.level}</span>
                                </div>
                                <Progress value={item.value} className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-pink-500 [&>div]:to-rose-500 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Baby Essentials Section */}
        <div id="baby-setup-section" className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Baby Essentials Checklist</h2>
                <p className="text-xl md:text-2xl text-gray-600">Comprehensive checklists for your baby's arrival, culturally considered</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-all duration-500"></div>
                    <img
                        src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80"
                        alt="Baby nursery essentials"
                        className="relative w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white/50"
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/ffe4e6/db2777?text=Baby+Essentials'; }}
                    />
                </div>
                <div className="flex flex-col items-start text-left">
                    <h3 className="text-3xl font-bold text-gray-700 mb-6">Everything You Need, Simplified</h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">From nursery setup to daily care items, our comprehensive checklists ensure you're prepared for your baby's arrival. We include cultural considerations to make it truly yours.</p>
                    <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 rounded-full text-lg shadow-xl hover:scale-105 hover:shadow-pink-300/50 transition-all">
                        <ShoppingCart className="mr-3 h-6 w-6" /> View Complete List
                    </Button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { category: "Nursery Setup", items: ["Crib", "Mattress", "Bedding", "Changing Table"], progress: 75 },
                    { category: "Baby Clothing", items: ["Onesies", "Sleepers", "Hats", "Socks"], progress: 90 },
                    { category: "Feeding Essentials", items: ["Bottles", "Burp cloths", "High chair", "Breast Pump"], progress: 60 },
                    { category: "Bathing & Diapering", items: ["Baby tub", "Towels", "Gentle soap", "Diapers"], progress: 45 },
                    { category: "Travel Gear", items: ["Car seat", "Stroller", "Baby Carrier", "Diaper Bag"], progress: 30 },
                    { category: "Health & Safety", items: ["Baby gates", "Outlet covers", "First-aid kit", "Thermometer"], progress: 50 }
                ].map((cat, index) => (
                    <Card key={index} className="hover:shadow-2xl hover:shadow-pink-200/50 hover:scale-105 transition-all duration-500 border-2 border-pink-100 hover:border-pink-300 bg-gradient-to-br from-white to-pink-50/30">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-xl font-bold text-pink-700">{cat.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-4 h-12 overflow-hidden leading-relaxed">{cat.items.join(", ")}...</p>
                            <Progress value={cat.progress} className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-pink-400 [&>div]:to-rose-400 rounded-full" />
                            <p className="text-sm text-gray-500 mt-2 text-right font-semibold">{cat.progress}% complete</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        {/* Kick Count Tracker Section */}
        <div id="kick-tracker-section" className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Kick Count Tracker</h2>
                <p className="text-xl md:text-2xl text-gray-600">Monitor baby's movements and analyze activity patterns with smart insights</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-indigo-200/50">
                        <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
                            <Target className="mr-4 h-8 w-8 text-indigo-600" /> Smart Tracking Features
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                            {[
                                "One-tap kick counting interface",
                                "Movement pattern recognition and alerts",
                                "Customizable session timers",
                                "Weekly movement summaries & history",
                                "Doctor-shareable PDF reports"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4 p-3 hover:bg-white/50 rounded-xl transition-colors">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                                    <span className="text-lg">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 to-purple-400/20 rounded-3xl blur-2xl transform rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                        alt="Pregnant woman tracking baby movements"
                        className="relative w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white/50"
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/e0f2fe/7c3aed?text=Kick+Tracker'; }}
                    />
                </div>
            </div>
        </div>

        {/* Monetary Health Section */}
        <div id="monetary-section" className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Monetary Health & Planning</h2>
                <p className="text-xl md:text-2xl text-gray-600">Smart budgeting and financial tools for your growing family</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl border border-emerald-200/50">
                        <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
                            <Calculator className="mr-4 h-8 w-8 text-emerald-600" /> Budget Planning Tools
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                            {[
                                "Pregnancy expense calculator",
                                "Baby cost estimator (first year, etc.)",
                                "Insurance coverage analyzer assistant",
                                "Savings goals for baby fund",
                                "Emergency fund recommendations"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4 p-3 hover:bg-white/50 rounded-xl transition-colors">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                                    <span className="text-lg">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                    <h4 className="font-bold text-gray-700 mb-6 text-xl">Sample Budget Breakdown</h4>
                    <div className="space-y-5">
                        {[
                            { category: "Medical Expenses", amount: "$2,500", percentage: 30 },
                            { category: "Baby Gear & Supplies", amount: "$1,800", percentage: 25 },
                            { category: "Nursery Setup", amount: "$1,200", percentage: 20 },
                            { category: "Emergency Fund Top-up", amount: "$1,000", percentage: 15 },
                            { category: "Miscellaneous Baby Costs", amount: "$500", percentage: 10 }
                        ].map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-600">{item.category}</span>
                                    <span className="text-gray-500">{item.amount}</span>
                                </div>
                                <Progress value={item.percentage} className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-pink-500 [&>div]:to-rose-500 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
        {/* Stay Connected Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Stay Connected & Informed</h2>
            <p className="text-xl md:text-2xl text-gray-600">Never miss important updates about your pregnancy journey</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Bell, title: "Real-time Notifications", desc: "Instant updates on important events & milestones." },
              { icon: Mail, title: "Weekly Email Digests", desc: "Comprehensive pregnancy summaries & tips." },
              { icon: Activity, title: "Baby Development", desc: "Track growth milestones week by week." },
              { icon: Bot, title: "24/7 Ask Amma", desc: "AI chatbot always available for your queries." }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500 border-2 border-pink-100 hover:border-pink-300 hover:scale-110 bg-gradient-to-br from-white to-pink-50/30">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <feature.icon className="h-10 w-10 text-pink-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-700">{feature.title}</h3>
                  <p className="text-gray-500 h-16 overflow-hidden leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">Weekly Baby Development Comparison</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { week: "Week 12", fruit: "🍋", name: "Lime" },
                { week: "Week 20", fruit: "🍌", name: "Banana" },
                { week: "Week 32", fruit: "🥥", name: "Coconut" },
                { week: "Week 40", fruit: "🍉", name: "Watermelon" }
              ].map((stage, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-pink-200/50">
                  <div className="text-5xl mb-4">{stage.fruit}</div>
                  <div className="text-lg font-bold text-pink-700">{stage.week}</div>
                  <div className="text-gray-500">~ {stage.name} size</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security & Privacy Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-500 border border-pink-100/50">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Security & Privacy First</h2>
            <p className="text-xl md:text-2xl text-gray-600">Your data and privacy are our top priorities</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "HIPAA Compliant", desc: "Adhering to healthcare data protection standards." },
              { icon: Lock, title: "Encrypted Messaging", desc: "End-to-end encrypted private communications." },
              { icon: CheckCircle, title: "Verified Answers", desc: "Information vetted by medical professionals." },
              { icon: User, title: "Data Ownership", desc: "You own and control your personal information." }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border-2 border-gray-200 hover:border-pink-300 hover:scale-110 bg-gradient-to-br from-white to-gray-50/30">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <feature.icon className="h-10 w-10 text-pink-500" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-700">{feature.title}</h3>
                  <p className="text-gray-500 h-16 overflow-hidden leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Download TummyTales Section */}
        <div id="download-section" className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl hover:shadow-pink-300/50 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-3xl"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300">Download TummyTales Today!</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 hover:opacity-100 transition-opacity duration-300 max-w-3xl mx-auto leading-relaxed">
              Get started with your personalized pregnancy journey and join our supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-pink-600 hover:bg-pink-50 px-10 py-4 rounded-full text-xl font-bold shadow-2xl hover:scale-110 hover:shadow-pink-200/50 transition-all duration-300">
                <Apple className="mr-3 h-7 w-7" /> App Store
              </Button>
              <Button className="bg-white text-rose-600 hover:bg-rose-50 px-10 py-4 rounded-full text-xl font-bold shadow-2xl hover:scale-110 hover:shadow-rose-200/50 transition-all duration-300">
                <Smartphone className="mr-3 h-7 w-7" /> Google Play
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Join TummyTales Community Today Section */}
        <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 rounded-3xl p-10 md:p-16 text-center shadow-2xl hover:shadow-pink-300/50 hover:scale-[1.02] transition-all duration-500 border border-pink-200/50">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:text-pink-600 transition-colors">Join the TummyTales Community!</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto hover:text-gray-700 transition-colors leading-relaxed">
                Experience comprehensive support and empowerment throughout your unique pregnancy journey.
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 transform hover:scale-110">
                Sign Up Free – No credit card required
            </Button>
        </div>

      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-16 mt-20 hover:from-gray-700 hover:to-gray-800 transition-all duration-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="font-bold text-xl text-white mb-6">TummyTales Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#ask-amma-section" className="hover:text-pink-300 transition-colors text-lg">Ask Amma AI Assistant</a></li>
                <li><a href="#community-section" className="hover:text-pink-300 transition-colors text-lg">Mom-to-Mom Community</a></li>
                <li><a href="#calendar-section" className="hover:text-pink-300 transition-colors text-lg">Pregnancy Tracking</a></li>
                <li><a href="#nutrition-section" className="hover:text-pink-300 transition-colors text-lg">Nutrition Planning</a></li>
                <li><a href="#kick-tracker-section" className="hover:text-pink-300 transition-colors text-lg">Kick Count Tracker</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-6">Resources</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#calendar-section" className="hover:text-pink-300 transition-colors text-lg">Activity Calendar</a></li>
                <li><a href="#" className="hover:text-pink-300 transition-colors text-lg">Blog (Coming Soon)</a></li>
                <li><a href="#nutrition-section" className="hover:text-pink-300 transition-colors text-lg">Nutrition Tips</a></li>
                <li><a href="#" className="hover:text-pink-300 transition-colors text-lg">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-6">Support & Legal</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#community-section" className="hover:text-pink-300 transition-colors text-lg">Support Forum</a></li>
                <li><a href="mailto:hello@tummytales.com" className="hover:text-pink-300 transition-colors text-lg">Contact Us</a></li>
                <li><a href="#" className="hover:text-pink-300 transition-colors text-lg">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-300 transition-colors text-lg">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-6">Get The App</h3>
              <div className="flex flex-col space-y-4">
                <Button variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white hover:border-pink-400 justify-start py-3" onClick={scrollToDownload}>
                  <Apple className="mr-3 h-6 w-6" /> App Store
                </Button>
                <Button variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white hover:border-pink-400 justify-start py-3" onClick={scrollToDownload}>
                  <Smartphone className="mr-3 h-6 w-6" /> Google Play
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-10 text-center">
            <p className="text-lg">hello@tummytales.com</p>
            <p className="text-gray-400 mt-3">© {new Date().getFullYear()} TummyTales. All rights reserved. Nurturing Motherhood, Together.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
