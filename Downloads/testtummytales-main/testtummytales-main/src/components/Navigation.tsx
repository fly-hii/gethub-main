import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Calendar, Home, Info, Book, MessageCircle, Users, Menu, LogIn, LogOut, Map, User } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

// Define navigation items in a single array to avoid duplication
const navigationItems = [
  {
    title: "About",
    path: "/about",
    icon: Info
  },
  {
    title: "Map",
    path: "/map",
    icon: Map
  },
  {
    title: "Resources",
    path: "/resources",
    icon: Book
  },
  {
    title: "Network",
    path: "/network",
    icon: Users
  }
];

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check login status when component mounts
  useEffect(() => {
    const loginStatus = sessionStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);
  
  const handleLogin = () => {
    navigate("/login");
  };
  
  const handleLogout = () => {
    // Clear login status
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate("/");
  };

  // Navigation item component to avoid duplication
  const NavItem = ({ item, onClick }) => (
    <Link 
      to={item.path} 
      className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'}`}
      onClick={onClick}
    >
      <item.icon className="h-4 w-4" />
      {item.title}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to={isLoggedIn ? "/dashboard" : "/"} className="flex items-center">
            <span className="notebook-title text-pink-500">TummyTales</span>
          </Link>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden ml-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {isLoggedIn && (
                  <Link 
                    to="/dashboard" 
                    className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${location.pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground'}`}
                  >
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Link>
                )}
                
                {navigationItems.map(item => (
                  <NavItem key={item.path} item={item} onClick={() => {}} />
                ))}
                
                {isLoggedIn ? (
                  <>
                    <Link 
                      to="/profile" 
                      className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${location.pathname === '/profile' ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 py-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 py-2">
                    <LogIn className="h-4 w-4" />
                    Sign In / Sign Up
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Desktop navigation */}
        <div className="mx-6 hidden md:flex items-center space-x-4 lg:space-x-6">
          {isLoggedIn && (
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${location.pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
          )}
          
          {navigationItems.map(item => (
            <NavItem key={item.path} item={item} onClick={() => {}} />
          ))}
        </div>
        
        <div className="ml-auto flex items-center">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link to="/profile" className="text-sm font-medium transition-colors hover:text-primary">
                <div className="h-8 w-8 rounded-full bg-tummytales-purple flex items-center justify-center text-white">
                  JD
                </div>
              </Link>
              <Button onClick={handleLogout} variant="outline" size="sm" className="flex items-center gap-1">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <Button onClick={handleLogin} variant="outline" size="sm" className="flex items-center gap-1">
              <LogIn className="h-4 w-4" />
              Sign In / Sign Up
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
