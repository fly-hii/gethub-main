import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, X, Minimize, Maximize } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "amma";
  timestamp: Date;
}

const AskAmmaChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Amma, your pregnancy companion. Ask me anything about your pregnancy journey.",
      sender: "amma",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized]);

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
      return "Morning sickness is common during the first trimester. Try eating small, frequent meals and staying hydrated. Ginger tea or crackers before getting out of bed can help.";
    } else if (lowerQuestion.includes("kick") || lowerQuestion.includes("movement")) {
      return "You should start feeling baby movements between 16-25 weeks. First-time moms often feel them later. These early movements feel like flutters or gentle taps.";
    } else if (lowerQuestion.includes("diet") || lowerQuestion.includes("eat") || lowerQuestion.includes("food")) {
      return "Focus on a balanced diet with plenty of fruits, vegetables, lean proteins, and whole grains. Make sure to get enough folate, iron, calcium, and omega-3s.";
    } else if (lowerQuestion.includes("exercise") || lowerQuestion.includes("workout")) {
      return "Moderate exercise is beneficial during pregnancy. Walking, swimming, and prenatal yoga are excellent choices. Aim for 30 minutes of activity most days.";
    } else if (lowerQuestion.includes("hello") || lowerQuestion.includes("hi") || lowerQuestion.includes("hey")) {
      return "Hello! How are you feeling today? Is there something specific about your pregnancy journey that I can help you with?";
    } else {
      return "That's a great question about your pregnancy journey. I recommend discussing this with your healthcare provider at your next appointment for personalized advice.";
    }
  };

  const toggleChatWindow = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const minimizeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(true);
  };

  const closeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {!isOpen && (
        <Button
          onClick={toggleChatWindow}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg text-white"
        >
          <MessageCircle size={24} />
        </Button>
      )}
      
      {isOpen && (
        <Card className={`w-[350px] sm:w-[400px] ${isMinimized ? 'h-14' : 'h-[500px]'} shadow-xl transition-all duration-200 flex flex-col border border-gray-200`}>
          <div 
            className="bg-blue-600 text-white p-3 flex justify-between items-center cursor-pointer rounded-t-lg"
            onClick={isMinimized ? toggleChatWindow : undefined}
          >
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 bg-white">
                <AvatarFallback className="text-blue-600 font-semibold text-sm">AM</AvatarFallback>
              </Avatar>
              <span className="font-medium">Ask Amma</span>
            </div>
            <div className="flex gap-1">
              {!isMinimized ? (
                <>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-blue-700" onClick={minimizeChat}>
                    <Minimize size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-blue-700" onClick={closeChat}>
                    <X size={16} />
                  </Button>
                </>
              ) : (
                <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-blue-700" onClick={toggleChatWindow}>
                  <Maximize size={16} />
                </Button>
              )}
            </div>
          </div>
          
          {!isMinimized && (
            <CardContent className="p-0 flex-1 flex flex-col overflow-hidden bg-white">
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex ${message.sender === "user" ? "flex-row-reverse" : "flex-row"} gap-2`}>
                      <Avatar className={message.sender === "user" ? "bg-gray-600" : "bg-blue-600"}>
                        <AvatarFallback className="text-white font-semibold text-xs">
                          {message.sender === "user" ? "You" : "AM"}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div 
                        className={`max-w-xs p-3 rounded-lg shadow-sm ${
                          message.sender === "user" 
                            ? "bg-gray-600 text-white" 
                            : "bg-white text-gray-800 border border-gray-200"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-1 text-right ${
                          message.sender === "user" ? "text-gray-300" : "text-gray-500"
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="flex gap-2">
                  <Textarea 
                    placeholder="Type your question here..." 
                    className="flex-1 text-sm min-h-[40px] max-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button onClick={handleSendMessage} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </div>
  );
};

export default AskAmmaChat;
