
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Edit, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Journal = () => {
  const navigate = useNavigate();

  const journalEntries = [
    { date: "Today", content: "Feeling great today! Baby kicked for the first time and it was magical. Can't wait to meet our little one.", mood: "😊" },
    { date: "Yesterday", content: "Had my prenatal appointment. Everything looks good and baby is growing perfectly. Doctor says to keep up with the healthy eating.", mood: "😌" },
    { date: "2 days ago", content: "Started feeling the baby move more regularly. It's such an amazing feeling. Tom felt the kick too!", mood: "🥰" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent">
            Pregnancy Journal
          </h1>
        </div>

        <div className="grid gap-6">
          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Edit className="w-6 h-6 text-pink-600" />
                Write New Entry
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="How are you feeling today? What's on your mind about your pregnancy journey?"
                className="min-h-[120px] resize-none border-pink-200 focus:border-pink-400"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Mood:</span>
                  <div className="flex gap-2">
                    {['😊', '😌', '🥰', '😴', '😰'].map((emoji, index) => (
                      <button key={index} className="text-xl hover:scale-110 transition-transform">
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-pink-500 to-rose-500">
                  Save Entry
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-pink-600" />
                Recent Entries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {journalEntries.map((entry, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-pink-700">{entry.date}</span>
                    <span className="text-2xl">{entry.mood}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{entry.content}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Journal;
