
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would handle authentication with a service
    // For now, let's simulate login by setting a value in sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
    navigate('/map');
    
    // Force a reload to update all components with the new login state
    window.location.reload();
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-tummytales-cream">
      <div className="mx-auto max-w-md w-full p-6 bg-white rounded-xl shadow-md">
        <div className="text-center mb-6">
          <Link to="/">
            <h1 className="notebook-title text-pink-500 text-3xl">TummyTales</h1>
          </Link>
          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Username</Label>
            <Input id="email" placeholder="Enter user name" type="email" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          <div className="mt-6">
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.55V20.46H19.28C21.36 18.53 22.56 15.66 22.56 12.25Z" fill="#4285F4"/>
                <path d="M12 23C14.97 23 17.46 21.97 19.28 20.46L15.71 17.55C14.74 18.19 13.48 18.57 12 18.57C9.16 18.57 6.77 16.61 5.86 13.94H2.19V16.94C4 20.45 7.7 23 12 23Z" fill="#34A853"/>
                <path d="M5.86 13.94C5.63 13.28 5.5 12.57 5.5 11.84C5.5 11.11 5.63 10.4 5.86 9.74V6.74H2.19C1.42 8.28 1 10.01 1 11.84C1 13.67 1.42 15.4 2.19 16.94L5.86 13.94Z" fill="#FBBC04"/>
                <path d="M12 5.11C13.61 5.11 15.04 5.64 16.14 6.71L19.31 3.54C17.46 1.84 14.97 0.776 12 0.776C7.7 0.776 4 3.33 2.19 6.84L5.86 9.84C6.77 7.17 9.16 5.11 12 5.11Z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm">
          <p>
            Don't have an account?{" "}
            <Link to="/role-selection" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
