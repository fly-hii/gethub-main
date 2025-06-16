import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const GeneralPreparation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedWeek, setSelectedWeek] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const week = params.get('week');
    if (week) {
      setSelectedWeek(parseInt(week));
    }
  }, [location]);

  const getWeekSpecificPreparation = (week: number) => {
    const preparationByWeek: { [key: number]: Array<{ title: string; image: string; description: string }> } = {
      1: [
        {
          title: "PRENATAL VITAMINS",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Start taking essential prenatal vitamins for early pregnancy"
        },
        {
          title: "HEALTHY LIFESTYLE",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Establish healthy eating and exercise routines"
        },
        {
          title: "BATH & SKINCARE",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Gentle skincare routine for pregnancy glow"
        }
      ],
      12: [
        {
          title: "NURSERY PLANNING",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Start planning the baby's room layout and design"
        },
        {
          title: "BUDGET PLANNING",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Create a comprehensive budget for baby expenses"
        },
        {
          title: "MATERNITY WARDROBE",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Essential maternity clothing for comfort"
        },
        {
          title: "BATH & SKINCARE",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Anti-stretch mark creams and moisturizers"
        }
      ],
      20: [
        {
          title: "SLEEP ESSENTIALS",
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
          description: "Choose and prepare safe sleep essentials for your baby"
        },
        {
          title: "DIAPERING ESSENTIALS",
          image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=800&q=80",
          description: "Stock up on diapers and changing station supplies"
        },
        {
          title: "FEEDING ESSENTIALS",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
          description: "Prepare bottles, sterilizers and feeding accessories"
        },
        {
          title: "CLOTHING ESSENTIALS",
          image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
          description: "Essential newborn clothing and accessories"
        },
        {
          title: "BATH & SKINCARE",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Baby bath essentials and gentle products"
        }
      ],
      22: [
        {
          title: "BABY CLOTHES SHOPPING",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Essential newborn clothing and accessories"
        },
        {
          title: "FEEDING SUPPLIES",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Bottles, sterilizers, and feeding essentials"
        },
        {
          title: "DIAPER PREPARATION",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Stock up on diapers and changing supplies"
        },
        {
          title: "BATH & SKINCARE",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Baby bath time essentials and skincare"
        }
      ],
      28: [
        {
          title: "HOSPITAL BAG PREP",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Start collecting essential items for hospital delivery"
        },
        {
          title: "PEDIATRICIAN SELECTION",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Choose your baby's first doctor and schedule meet"
        },
        {
          title: "BIRTH PLAN PREPARATION",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Discuss and finalize your birth preferences"
        },
        {
          title: "BATH & SKINCARE",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Post-delivery skincare and recovery products"
        }
      ],
      35: [
        {
          title: "SLEEP ESSENTIALS",
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
          description: "Install and prepare safe sleep environment for baby"
        },
        {
          title: "HOSPITAL REGISTRATION",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Complete hospital admission paperwork in advance"
        },
        {
          title: "FINAL PREPARATIONS",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Last-minute essentials and emergency contacts"
        },
        {
          title: "BATH & SKINCARE",
          image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
          description: "Newborn bath essentials and gentle care products"
        }
      ]
    };

    return preparationByWeek[week] || [
      {
        title: "GENERAL PREPARATION",
        image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
        description: "Essential preparations for your pregnancy journey"
      },
      {
        title: "BATH & SKINCARE",
        image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
        description: "Essential bathing and skincare items for your baby"
      },
      {
        title: "CLOTHING ESSENTIALS",
        image: "/lovable-uploads/30623f9e-7b5a-4cb8-b64a-328dc36182b3.png",
        description: "Must-have clothing items for newborns"
      }
    ];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/map')}
            className="mb-4 border-pink-300 text-pink-600 hover:bg-pink-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Map
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent mb-4">
            General Preparation - Week {selectedWeek}
          </h1>
          <p className="text-gray-600 text-lg">Essential preparations for week {selectedWeek} of your pregnancy journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getWeekSpecificPreparation(selectedWeek).map((item, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-200/50 overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">{item.description}</p>
                
                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                    Book now
                  </Button>
                  <Button variant="outline" className="flex-1 border-pink-300 text-pink-600 hover:bg-pink-50">
                    <Calendar className="w-4 h-4 mr-2" />
                    Add to Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralPreparation;
