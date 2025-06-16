
import React from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

type CalendarView = "day" | "week" | "month" | "trimester" | "9month";

interface PregnancyMapNavProps {
  activeView: CalendarView;
  setActiveView: (view: CalendarView) => void;
}

const PregnancyMapNav: React.FC<PregnancyMapNavProps> = ({ 
  activeView, 
  setActiveView 
}) => {
  const location = useLocation();
  
  // Redirect to login if not logged in
  React.useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn && location.pathname === '/map') {
      // This would normally have a redirect, but we'll let the page handle authentication checking
    }
  }, [location]);
  
  return (
    <div className="w-full px-2 sm:px-4">
      <div className="flex justify-center">
        <nav className="flex flex-wrap sm:flex-nowrap bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-pink-200/40 border border-pink-200/40 p-1 sm:p-2 gap-1 sm:gap-0 max-w-full overflow-hidden">
          {[
            { label: "Day", value: "day", icon: "📅" },
            { label: "Week", value: "week", icon: "📊" },
            { label: "Month", value: "month", icon: "🗓️" },
            { label: "Trimester", value: "trimester", icon: "🌸" },
            { label: "9-Month", value: "9month", icon: "👶" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveView(item.value as CalendarView)}
              className={cn(
                "px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 min-w-[80px] sm:min-w-[100px] justify-center flex-1 sm:flex-none",
                activeView === item.value
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-300/50 transform scale-105"
                  : "text-gray-600 hover:text-pink-600 hover:bg-pink-50/80 hover:scale-102"
              )}
            >
              <span className="text-sm sm:text-base">{item.icon}</span>
              <span className="hidden xs:inline sm:inline">{item.label}</span>
              <span className="xs:hidden sm:hidden text-xs">{item.label.slice(0, 3)}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PregnancyMapNav;
