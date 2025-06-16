
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with thousands of mothers sharing experiences, support, and celebrating milestones together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Community Stats */}
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-black text-gray-800 mb-2">45,000+</div>
            <p className="text-gray-600 font-medium">Active Mothers</p>
          </div>
          
          {/* Community Features */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Popular Topics</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { tag: "#FirstTimePregnancy", posts: "12.5k posts" },
                { tag: "#BabyNames", posts: "8.2k discussions" },
                { tag: "#PregnancyTips", posts: "15.1k tips" },
                { tag: "#MomSupport", posts: "9.8k stories" }
              ].map((topic, index) => (
                <div key={index} className="bg-purple-50 rounded-2xl p-4 text-center">
                  <div className="font-bold text-purple-700 mb-1">{topic.tag}</div>
                  <div className="text-sm text-gray-600">{topic.posts}</div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-2xl py-3">
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
