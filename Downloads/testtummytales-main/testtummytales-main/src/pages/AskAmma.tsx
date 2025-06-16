
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  text: string;
  sender: "user" | "amma";
  timestamp: Date;
}

const AskAmma = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Amma, your pregnancy companion. Ask me anything about your pregnancy journey, and I'll do my best to help you.",
      sender: "amma",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputMessage("");
    
    // Simulate Amma's response after a brief delay
    setTimeout(() => {
      const ammaResponse: Message = {
        id: messages.length + 2,
        text: getAmmaResponse(inputMessage),
        sender: "amma",
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, ammaResponse]);
    }, 1000);
  };
  
  const getAmmaResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("morning sickness") || lowerQuestion.includes("nausea")) {
      return "Morning sickness is common during the first trimester. Try eating small, frequent meals and staying hydrated. Ginger tea or crackers before getting out of bed can help. If it's severe, talk to your doctor about medication options.";
    } else if (lowerQuestion.includes("kick") || lowerQuestion.includes("movement")) {
      return "You should start feeling baby movements between 16-25 weeks. First-time moms often feel them later. These early movements feel like flutters, gas bubbles, or gentle taps. As your pregnancy progresses, they'll become stronger and more regular.";
    } else if (lowerQuestion.includes("diet") || lowerQuestion.includes("eat") || lowerQuestion.includes("food")) {
      return "Focus on a balanced diet with plenty of fruits, vegetables, lean proteins, and whole grains. Make sure to get enough folate, iron, calcium, and omega-3s. Avoid undercooked meats, high-mercury fish, unpasteurized dairy, and limit caffeine to 200mg per day.";
    } else if (lowerQuestion.includes("exercise") || lowerQuestion.includes("workout")) {
      return "Moderate exercise is beneficial during pregnancy. Walking, swimming, and prenatal yoga are excellent choices. Aim for 30 minutes of activity most days. Listen to your body, stay hydrated, and avoid exercises with a high risk of falling or abdominal trauma.";
    } else if (lowerQuestion.includes("hello") || lowerQuestion.includes("hi") || lowerQuestion.includes("hey")) {
      return "Hello! How are you feeling today? Is there something specific about your pregnancy journey that I can help you with?";
    } else {
      return "That's a great question about your pregnancy journey. I recommend discussing this with your healthcare provider at your next appointment for personalized advice. Would you like me to help you prepare questions for your doctor?";
    }
  };
  
  return (
    <div className="min-h-screen bg-tummytales-cream flex flex-col">
      <Navigation />
      
      <div className="container mx-auto p-4 flex-1 flex flex-col">
        <h1 className="notebook-title text-4xl mb-8 text-center">Ask Amma</h1>
        
        <Card className="flex-1 flex flex-col max-w-4xl mx-auto">
          <CardContent className="p-0 flex-1 flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex ${message.sender === "user" ? "flex-row-reverse" : "flex-row"} gap-2`}>
                    <Avatar className={message.sender === "user" ? "bg-tummytales-blue" : "bg-tummytales-purple"}>
                      <AvatarFallback>
                        {message.sender === "user" ? "You" : "AM"}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div 
                      className={`max-w-xs sm:max-w-md p-3 rounded-lg ${
                        message.sender === "user" 
                          ? "bg-tummytales-blue/90 text-gray-800" 
                          : "bg-tummytales-purple text-white"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 text-right mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Textarea 
                  placeholder="Type your question here..." 
                  className="flex-1"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage}>Send</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AskAmma;
