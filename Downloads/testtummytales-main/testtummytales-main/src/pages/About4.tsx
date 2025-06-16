
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Star, Download, CalendarIcon, Clock, Apple, Smartphone, CheckCircle, Sparkles, Heart, Baby, Bot, HeartHandshake, MapPin, ListChecks, DollarSign, Users, Camera } from "lucide-react";
import CanvasParticleText from "@/components/canvas/CanvasParticleText";
import WhyTummytalesSection from "@/components/sections/WhyTummytalesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SmartFoodPlanningSection from "@/components/sections/SmartFoodPlanningSection";
import BabyEssentialsSection from "@/components/sections/BabyEssentialsSection";
import StayConnectedSection from "@/components/sections/StayConnectedSection";
import SecurityPrivacySection from "@/components/sections/SecurityPrivacySection";
import FooterSection from "@/components/sections/FooterSection";
import AskAmmaSection from "@/components/sections/AskAmmaSection";
import MomToMomSection from "@/components/sections/MomToMomSection";
import PregnancyMapSection from "@/components/sections/PregnancyMapSection";
import BabySetupSection from "@/components/sections/BabySetupSection";
import { useState, useEffect } from "react";

const About4 = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to Tummytales – Your Smart Pregnancy Companion";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      <Navigation />
      
      {/* Enhanced Hero Section with Optimized Canvas Particle Text */}
      <section className="py-20 bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
        {/* Background Images with Parallax Effect */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
            alt="Pregnancy journey background" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="h-[800px] w-full relative z-10">
          <CanvasParticleText />
        </div>
        
        <div className="container mx-auto px-4 text-center mt-8 relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 min-h-[2.5rem]">
            <span className="inline-block">
              {displayText}
              <span className="animate-pulse text-blue-500">|</span>
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
            From expert guidance to community support, food tracking to cultural care – experience a new journey of motherhood.
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-8 italic">
            Empowering Moms with Knowledge, Support & Love – One Kick at a Time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Star className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-8 py-3 rounded-full text-lg hover:scale-105 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works - Moved up right after hero */}
      <HowItWorksSection />

      {/* Enhanced Why Tummytales Section with Clickable Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-rose-50 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
              DISCOVER FEATURES
            </div>
            <h2 className="text-5xl font-black text-gray-800 mb-6">Why Tummytales?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive features designed to support every moment of your pregnancy journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Bot, 
                title: "Ask Amma", 
                description: "24/7 AI assistant for instant pregnancy guidance and personalized support", 
                gradient: "from-emerald-500 to-teal-500", 
                bg: "from-emerald-50 to-teal-50",
                href: "#ask-amma",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: HeartHandshake, 
                title: "Mom to Mom", 
                description: "Connect with fellow mothers for peer support and shared experiences", 
                gradient: "from-pink-500 to-rose-500", 
                bg: "from-pink-50 to-rose-50",
                href: "#mom-to-mom",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: MapPin, 
                title: "Pregnancy Map", 
                description: "Week-by-week journey guide with milestones and development tracking", 
                gradient: "from-blue-500 to-indigo-500", 
                bg: "from-blue-50 to-indigo-50",
                href: "#pregnancy-map",
                image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: ListChecks, 
                title: "Baby Setup", 
                description: "Complete checklists and preparation guides for your baby's arrival", 
                gradient: "from-purple-500 to-pink-500", 
                bg: "from-purple-50 to-pink-50",
                href: "#baby-setup",
                image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: DollarSign, 
                title: "Monetary Health", 
                description: "Smart financial planning tools for your growing family's future", 
                gradient: "from-green-500 to-emerald-500", 
                bg: "from-green-50 to-emerald-50",
                href: "#monetary-health",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: Users, 
                title: "Kick Count Tracker", 
                description: "Monitor and track your baby's movements and activity patterns", 
                gradient: "from-yellow-500 to-orange-500", 
                bg: "from-yellow-50 to-orange-50",
                href: "#kick-tracker",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: Camera, 
                title: "Neuration", 
                description: "AI-powered food recognition and nutrition analysis through camera", 
                gradient: "from-cyan-500 to-blue-500", 
                bg: "from-cyan-50 to-blue-50",
                href: "#neuration",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: CalendarIcon, 
                title: "Activity Calendar", 
                description: "Smart scheduling with appointments, reminders, and milestone tracking", 
                gradient: "from-indigo-500 to-purple-500", 
                bg: "from-indigo-50 to-purple-50",
                href: "#activity-calendar",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              }
            ].map((feature, index) => (
              <a key={index} href={feature.href} className="group block transform hover:scale-105 transition-all duration-300">
                <Card className={`group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${feature.bg} border-0 shadow-lg relative overflow-hidden h-full cursor-pointer transform hover:-translate-y-1`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="text-center relative z-10 pb-2">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-gray-700 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Feature Sections */}
      <section id="ask-amma">
        <AskAmmaSection />
      </section>
      
      <section id="mom-to-mom">
        <MomToMomSection />
      </section>
      
      <section id="pregnancy-map">
        <PregnancyMapSection />
      </section>
      
      <section id="baby-setup">
        <BabySetupSection />
      </section>

      {/* Enhanced Activity Calendar Demo Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold mb-6 hover:scale-105 transition-transform duration-300 shadow-lg">
              <Sparkles className="mr-2 h-4 w-4" />
              Smart Calendar Feature
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
              Your Pregnancy Journey,<br />Beautifully Organized
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience our intelligent pregnancy calendar that adapts to your journey. Track milestones, schedule appointments, and never miss important moments with seamless phone calendar integration.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Main Calendar - Takes up 3 columns */}
            <div className="lg:col-span-3">
              <Card className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 backdrop-blur-xl shadow-2xl border-0 hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] group">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10 pb-2">
                  <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 transition-transform duration-300 group-hover:scale-110">
                      <CalendarIcon className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Pregnancy Calendar
                    </span>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg mt-2">
                    Track your beautiful journey with our intelligent calendar system
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 p-8">
                  <div className="flex justify-center">
                    <div className="relative">
                      {/* Glow effect behind calendar */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-blue-200/50 rounded-3xl blur-xl transform scale-110 opacity-50"></div>
                      
                      <Calendar 
                        className="relative rounded-3xl border-2 border-gradient-to-br from-purple-200 to-blue-200 bg-white/90 backdrop-blur-sm shadow-xl scale-110 hover:scale-[1.15] transition-all duration-500 hover:shadow-2xl" 
                        classNames={{
                          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                          month: "space-y-4",
                          caption: "flex justify-center pt-1 relative items-center text-purple-700 font-bold text-lg",
                          nav_button: "h-8 w-8 bg-gradient-to-br from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 border-0 text-purple-600 hover:text-purple-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300",
                          head_cell: "text-purple-600 font-semibold text-sm",
                          day: "h-10 w-10 text-gray-700 hover:bg-gradient-to-br hover:from-purple-100 hover:to-blue-100 hover:text-purple-700 rounded-xl transition-all duration-200 font-medium",
                          day_selected: "bg-gradient-to-br from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 shadow-lg",
                          day_today: "bg-gradient-to-br from-pink-100 to-purple-100 text-purple-700 font-bold border-2 border-purple-300"
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Calendar stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-purple-600">24</div>
                      <div className="text-sm text-gray-600">Weeks</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-blue-600">5</div>
                      <div className="text-sm text-gray-600">Appointments</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-pink-600">12</div>
                      <div className="text-sm text-gray-600">Milestones</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar - Takes up 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Events Card */}
              <Card className="bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 backdrop-blur-xl shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3 text-xl font-bold">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md hover:rotate-12 transition-transform duration-300">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Upcoming Events
                    </span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    {[
                      { date: "Jan 15", event: "Doctor Appointment", time: "10:00 AM", type: "medical", color: "from-red-100 to-pink-100", icon: "🏥" },
                      { date: "Jan 18", event: "Prenatal Vitamin Reminder", time: "8:00 AM", type: "health", color: "from-green-100 to-emerald-100", icon: "💊" },
                      { date: "Jan 20", event: "Ultrasound Scan", time: "2:30 PM", type: "medical", color: "from-blue-100 to-cyan-100", icon: "👶" },
                      { date: "Jan 22", event: "Meal Plan: Week 20", time: "All Day", type: "nutrition", color: "from-orange-100 to-yellow-100", icon: "🥗" },
                      { date: "Jan 25", event: "Prenatal Class", time: "6:00 PM", type: "education", color: "from-purple-100 to-indigo-100", icon: "📚" }
                    ].map((item, index) => (
                      <div key={index} className={`flex items-center space-x-4 p-4 bg-gradient-to-r ${item.color} rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border border-white/50 group/item`}>
                        <div className="text-2xl group-hover/item:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-bold text-purple-600 bg-white/70 px-3 py-1 rounded-full">
                              {item.date}
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              {item.time}
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-gray-800 mt-2">{item.event}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-3 font-semibold">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Add New Event
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions Card */}
              <Card className="bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 backdrop-blur-xl shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: "📝", label: "Add Note", color: "from-blue-400 to-blue-600" },
                      { icon: "📸", label: "Bump Photo", color: "from-pink-400 to-pink-600" },
                      { icon: "🍎", label: "Log Meal", color: "from-green-400 to-green-600" },
                      { icon: "💤", label: "Sleep Log", color: "from-purple-400 to-purple-600" }
                    ].map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`h-16 bg-gradient-to-r ${action.color} hover:shadow-lg border-0 text-white hover:scale-105 transition-all duration-300 rounded-xl font-medium group/btn`}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-lg group-hover/btn:scale-110 transition-transform duration-300">{action.icon}</span>
                          <span className="text-xs">{action.label}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Calendar Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔄",
                title: "Smart Sync",
                description: "Automatically syncs with your phone calendar and reminds you of important dates",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🎯",
                title: "Milestone Tracking",
                description: "Never miss important pregnancy milestones and baby development markers",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "📱",
                title: "Mobile Optimized",
                description: "Access your calendar anywhere with our responsive mobile-first design",
                color: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Enhanced Community Section with Hashtag Campaign */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-3xl blur-xl transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80" 
                alt="Group of pregnant women in support group" 
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer"
              />
              {/* Overlay text on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <p className="text-white font-semibold p-6 text-center">Join our supportive community</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
                Connect with Real Moms
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Join our supportive community of expecting mothers worldwide. Share experiences, get advice, and build lasting friendships in our safe, moderated environment.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="font-bold text-gray-800 mb-4">Join the Conversation</h3>
                <div className="flex flex-wrap gap-2">
                  {["#PregnancySupport", "#MomCommunity", "#BumpBuddies", "#MotherhoodJourney"].map((hashtag, index) => (
                    <span key={index} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer">
                      {hashtag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">50K+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Heart className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Food Planning Section */}
      <SmartFoodPlanningSection />

      {/* Baby Essentials Section */}
      <BabyEssentialsSection />

      {/* Stay Connected Features Section */}
      <StayConnectedSection />

      {/* Enhanced Download CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 gap-8 h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col gap-8">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&q=80" 
                  alt="" 
                  className="w-full h-32 object-cover rounded-lg hover:scale-110 transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80" 
                  alt="" 
                  className="w-full h-32 object-cover rounded-lg hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Download Tummytales Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Available on iOS & Android. Join thousands of expecting mothers who trust Tummytales for their pregnancy journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                <Smartphone className="mr-2 h-5 w-5" />
                Get on Android
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 mr-2" />
                100% Free to Start
              </div>
              <div className="flex items-center hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 mr-2" />
                Community Access
              </div>
              <div className="flex items-center hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 mr-2" />
                Privacy-Focused
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <SecurityPrivacySection />

      {/* Enhanced Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 text-white relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`absolute w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse hover:scale-150 transition-all duration-1000`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 hover:scale-105 transition-transform duration-300">Join the Tummytales Community Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the support, guidance, and empowerment you deserve throughout your beautiful pregnancy journey.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-bold group">
              <Sparkles className="mr-2 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
              Sign Up Free – No Credit Card Required
            </Button>
            <p className="text-purple-100 mt-4 text-sm hover:text-white transition-colors duration-300">
              Join over 50,000 mothers who trust Tummytales
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default About4;
