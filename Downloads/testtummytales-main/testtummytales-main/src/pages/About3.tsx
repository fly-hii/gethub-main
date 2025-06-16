import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Star, Download, Heart, Users, Baby, Shield, Calendar as CalendarIcon, BookOpen, MessageCircle, UserPlus, Settings, Mail, Camera, DollarSign, ShoppingCart, Utensils, Car, Waves, Shirt, Lock, CheckCircle, Eye, Award, Apple, Smartphone, Play, Bell, Zap, Globe, Phone, Bot, MapPin, ListChecks, HeartHandshake } from "lucide-react";
import { useState } from "react";
import AskAmmaSection from "@/components/sections/AskAmmaSection";
import MomToMomSection from "@/components/sections/MomToMomSection";
import PregnancyMapSection from "@/components/sections/PregnancyMapSection";
import BabySetupSection from "@/components/sections/BabySetupSection";

const About3 = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 via-purple-100/80 to-indigo-100/80"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300/30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-blue-300/20 rounded-full blur-2xl animate-ping"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <h1 className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text leading-tight animate-fade-in">
                  Welcome to <br />TummyTales
                </h1>
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60 animate-pulse"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-relaxed animate-fade-in animation-delay-300">
                Your Smart Pregnancy <span className="text-pink-600">Companion</span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl animate-fade-in animation-delay-500">
                From expert guidance to community support, food tracking to cultural care – experience a new journey of motherhood.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start animate-fade-in animation-delay-700">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                  <Star className="mr-3 h-6 w-6 animate-spin" />
                  Get Started
                </Button>
                <Button variant="outline" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-700 px-10 py-4 rounded-full text-lg font-bold hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <Download className="mr-3 h-6 w-6" />
                  Download App
                </Button>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200 hover:scale-105 transition-transform duration-300 animate-fade-in animation-delay-1000">
                <p className="text-xl text-pink-700 font-bold italic">
                  "Empowering Moms with Knowledge, Support & Love – One Kick at a Time."
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-3xl blur-2xl transform rotate-6 scale-110 animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                  alt="Pregnant woman using smartphone"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-xl animate-bounce">
                  <Smartphone className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Moved up */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full inline-block mb-6 text-sm font-bold animate-bounce">
              ✨ SIMPLE PROCESS ✨
            </div>
            <h2 className="text-5xl font-black text-gray-800 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with your personalized pregnancy journey in just a few simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: UserPlus, title: "Register", description: "Create your account and join our supportive community", gradient: "from-pink-500 to-rose-600", delay: "0s" },
              { icon: Settings, title: "Set Up Profile", description: "Add your due date, preferences, and cultural background", gradient: "from-blue-500 to-indigo-600", delay: "0.2s" },
              { icon: Users, title: "Choose Your Role", description: "Select whether you're pregnant or supporting a mom", gradient: "from-purple-500 to-pink-600", delay: "0.4s" },
              { icon: Mail, title: "Receive Login", description: "Get secure access credentials via email", gradient: "from-green-500 to-teal-600", delay: "0.6s" },
              { icon: Heart, title: "Start Your Journey", description: "Begin your personalized pregnancy experience", gradient: "from-red-500 to-pink-600", delay: "0.8s" }
            ].map((step, index) => (
              <div key={index} className="relative group" style={{ animationDelay: step.delay }}>
                <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg h-full group-hover:scale-105 group-hover:-translate-y-2 animate-fade-in">
                  <CardHeader>
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-sm font-bold text-gray-500 mb-3 bg-gray-100 rounded-full px-4 py-1 inline-block">Step {index + 1}</div>
                    <CardTitle className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 z-10 animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Tummytales Section with Clickable Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-rose-50 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
              CORE FEATURES
            </div>
            <h2 className="text-5xl font-black text-gray-800 mb-6">Why Tummytales?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover all the features designed to support you throughout your pregnancy journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Bot, 
                title: "Ask Amma", 
                description: "AI assistant available 24/7 for instant pregnancy guidance", 
                gradient: "from-emerald-500 to-teal-500", 
                bg: "from-emerald-50 to-teal-50",
                href: "#ask-amma",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: HeartHandshake, 
                title: "Mom to Mom", 
                description: "Peer support and private chats with expecting mothers", 
                gradient: "from-pink-500 to-rose-500", 
                bg: "from-pink-50 to-rose-50",
                href: "#mom-to-mom",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: MapPin, 
                title: "Pregnancy Map", 
                description: "Complete trimester roadmap with milestones", 
                gradient: "from-blue-500 to-indigo-500", 
                bg: "from-blue-50 to-indigo-50",
                href: "#pregnancy-map",
                image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: ListChecks, 
                title: "Baby Setup", 
                description: "Expert shopping lists for your little one", 
                gradient: "from-purple-500 to-pink-500", 
                bg: "from-purple-50 to-pink-50",
                href: "#baby-setup",
                image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: DollarSign, 
                title: "Monetary Health", 
                description: "Financial tools for growing families", 
                gradient: "from-green-500 to-emerald-500", 
                bg: "from-green-50 to-emerald-50",
                href: "#monetary-health",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: Users, 
                title: "Kick Count Tracker", 
                description: "Monitor baby movements and activity", 
                gradient: "from-yellow-500 to-orange-500", 
                bg: "from-yellow-50 to-orange-50",
                href: "#kick-tracker",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: Camera, 
                title: "Neuration", 
                description: "AI food detection via camera for nutrition tracking", 
                gradient: "from-cyan-500 to-blue-500", 
                bg: "from-cyan-50 to-blue-50",
                href: "#neuration",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
              },
              { 
                icon: CalendarIcon, 
                title: "Activity Calendar", 
                description: "Track appointments, reminders, and milestones", 
                gradient: "from-indigo-500 to-purple-500", 
                bg: "from-indigo-50 to-purple-50",
                href: "#activity-calendar",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              }
            ].map((feature, index) => (
              <a key={index} href={feature.href} className="group block">
                <Card className={`group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1 bg-gradient-to-br ${feature.bg} border-0 shadow-lg relative overflow-hidden h-full cursor-pointer transform hover:translate-y-2`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="text-center relative z-10 pb-2">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
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
      <AskAmmaSection />
      <MomToMomSection />
      <PregnancyMapSection />
      <BabySetupSection />

      {/* Activity Calendar Demo with Enhanced Layout */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full inline-block mb-6 text-sm font-bold">
              ✨ NEW FEATURE ✨
            </div>
            <h2 className="text-5xl font-black text-gray-800 mb-6">Activity Calendar Demo</h2>
            <p className="text-2xl text-purple-600 font-bold mb-8 italic">
              "Track, Plan, and Stay Ahead with our comprehensive pregnancy calendar"
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-xl border-0 mx-auto"
              />
            </div>
            
            <div className="space-y-8">
              {[
                { icon: Bell, title: "Daily Health Reminders", desc: "Prenatal vitamin at 9:00 AM, Water intake check", color: "emerald" },
                { icon: Utensils, title: "Meal Plan Alerts", desc: "Calcium-rich lunch suggestion, Avoid raw fish reminder", color: "blue" },
                { icon: Smartphone, title: "Event Sync", desc: "Automatically syncs with your phone calendar and reminders", color: "purple" }
              ].map((item, index) => (
                <div key={index} className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-l-6 border-${item.color}-500 hover:scale-105 transition-all duration-300`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-xl flex items-center justify-center mr-4`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* Smart Food Planning with Enhanced Visual Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Smart Food Planning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered nutrition tracking with trimester-based meal plans and real-time food safety analysis
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Camera className="h-8 w-8 text-emerald-600 mr-3" />
                    <CardTitle className="text-xl font-bold text-gray-800">AI Meal Recognition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Take a photo of your meal and get instant nutrition analysis</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Real-time safety analysis
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Nutritional breakdown
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Trimester-specific recommendations
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Bell className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-xl font-bold text-gray-800">Smart Notifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Get real-time push notifications about foods to eat or avoid based on your trimester</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Nutrition Analysis Panel</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-700">Safety Score</span>
                  <span className="text-green-600 font-bold">Safe ✓</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-700">Folic Acid</span>
                  <span className="text-blue-600 font-bold">25mcg</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-700">Iron</span>
                  <span className="text-purple-600 font-bold">8mg</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-gray-700">Calcium</span>
                  <span className="text-orange-600 font-bold">150mg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baby Essentials with Enhanced Card Design */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Baby Essentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated checklists with cultural sensitivity and expert recommendations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Baby, title: "Nursery", items: ["Crib", "Changing Table", "Rocking Chair", "Night Light"], gradient: "from-pink-400 to-rose-500" },
              { icon: Shirt, title: "Clothing", items: ["Onesies", "Sleep Suits", "Bibs", "Hats & Mittens"], gradient: "from-blue-400 to-indigo-500" },
              { icon: Utensils, title: "Feeding", items: ["Bottles", "Burp Cloths", "High Chair", "Breast Pump"], gradient: "from-green-400 to-teal-500" },
              { icon: Waves, title: "Bathing", items: ["Baby Tub", "Soft Towels", "Gentle Soap", "Bath Toys"], gradient: "from-cyan-400 to-blue-500" },
              { icon: Car, title: "Travel", items: ["Car Seat", "Stroller", "Diaper Bag", "Carrier"], gradient: "from-purple-400 to-pink-500" },
              { icon: Shield, title: "Safety", items: ["Baby Gates", "Cabinet Locks", "Outlet Covers", "Corner Guards"], gradient: "from-red-400 to-pink-500" }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-xl font-bold text-gray-800">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4 border-purple-300 text-purple-700 hover:bg-purple-50">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Culturally Sensitive Recommendations
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our expert team curates products that respect diverse cultural practices and traditions, with direct shopping links and educational content.
            </p>
          </div>
        </div>
      </section>

      {/* Stay Connected with Better Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Never miss important updates with our comprehensive notification system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Bell, title: "Real-time Notifications", description: "Instant alerts for important pregnancy updates", color: "from-red-400 to-pink-500" },
              { icon: Mail, title: "Weekly Email Digests", description: "Comprehensive weekly summaries in your inbox", color: "from-blue-400 to-indigo-500" },
              { icon: Baby, title: "Baby Development Updates", description: "Week 12: lime size, Week 20: banana size tracking", color: "from-green-400 to-emerald-500" },
              { icon: MessageCircle, title: "24/7 Ask Amma", description: "AI chatbot always available for your questions", color: "from-purple-400 to-pink-500" }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy with Enhanced Icons */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text text-transparent mb-4">
              Security & Privacy First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy and security are our top priorities with industry-leading protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, title: "HIPAA Compliant", description: "Your health data protected by healthcare standards" },
              { icon: Lock, title: "End-to-End Encrypted", description: "All conversations and data fully encrypted" },
              { icon: Award, title: "Expert Verified", description: "Answers reviewed by certified professionals" },
              { icon: Eye, title: "Your Data Ownership", description: "Complete control over your information" }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA with Improved Design */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Download TummyTales Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Available on iOS & Android. Free to download with community access and privacy-focused design.
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
                Community Access
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Privacy-Focused
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the TummyTales Community Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience support and empowerment like never before. Your pregnancy journey starts here.
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
            <Baby className="mr-2 h-5 w-5" />
            Sign Up Free – No credit card required
          </Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold">TummyTales</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Your trusted companion throughout pregnancy, offering personalized guidance and community support.
              </p>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@tummytales.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Features</h4>
              <ul className="space-y-3">
                {["Ask Amma", "Calendar", "Community", "Nutrition Tips"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-3">
                {["Blog", "FAQ", "Support Forum", "Pricing"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-3">
                {["Contact", "Privacy Policy", "Terms of Service", "Help Center"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 TummyTales. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Made with <Heart className="h-4 w-4 text-pink-400 inline mx-1" /> for expecting mothers worldwide
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About3;
