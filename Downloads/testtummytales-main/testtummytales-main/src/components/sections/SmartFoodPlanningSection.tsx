
import { Camera, Bell, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SmartFoodPlanningSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Smart Food Planning
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Get personalized nutrition guidance throughout your pregnancy with our AI-powered food analysis and trimester-based meal planning.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Trimester-Based Meal Plans</h3>
                  <p className="text-gray-600">Customized nutrition plans that adapt to your pregnancy stage and cultural preferences.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">AI Meal Image Recognition</h3>
                  <p className="text-gray-600">Snap a photo of your food for instant nutrition and safety analysis.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Real-Time Notifications</h3>
                  <p className="text-gray-600">Get push notifications about foods to eat or avoid during pregnancy.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold text-gray-800">Nutrition Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-800">Spinach Salad</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-green-700 text-sm">Rich in folate - Great for baby development!</p>
                    <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                      <div className="text-center">
                        <div className="font-bold text-green-800">85</div>
                        <div className="text-green-600">Calories</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-800">2.9g</div>
                        <div className="text-green-600">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-800">194mcg</div>
                        <div className="text-green-600">Folate</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-800">Salmon</span>
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-blue-700 text-sm">High in DHA - Supports brain development</p>
                    <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                      <div className="text-center">
                        <div className="font-bold text-blue-800">206</div>
                        <div className="text-blue-600">Calories</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-800">22g</div>
                        <div className="text-blue-600">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-800">1.8g</div>
                        <div className="text-blue-600">DHA</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-xl">
                  <Camera className="mr-2 h-4 w-4" />
                  Analyze Your Meal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFoodPlanningSection;
