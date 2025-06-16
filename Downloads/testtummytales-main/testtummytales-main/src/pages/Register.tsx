
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios"; 
import { toast } from "sonner"; 

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
// ✅ Step 1: Store form data in state
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

 // ✅ Step 2: Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //  // ✅ Step 3: Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Optional basic validation
    if (formData.password !== formData.confirmPassword) {
       toast.error("Passwords do not match"); 
      return;
    }

    try {
      // ✅ Send data to your backend API
      //const response = await axios.post("http://localhost:5001/user/users/register-user", {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register-user`, {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
        confirm_password: formData.confirmPassword,
        role: "mom",
      });
      if (response.status === 201) {
  localStorage.setItem("userId", response.data.user.userId);
  localStorage.setItem("email", response.data.user.email);
  localStorage.setItem("role", response.data.user.role);
  localStorage.setItem("status", response.data.user.status);
  
  // toast.success("Registration successful!"); 
  toast.success(response.data.message || "Registration successful!");

     navigate('/otp-verification'); // Or show success message
      console.log("Registration Success:", response.data);
      }
    
    } catch (error: any) {
      const errorMessage =
      error.response?.data?.message || "Registration failed. Please try again.";
    toast.error(errorMessage); 
      console.error("Registration Failed:", error.response?.data || error.message);
      
    }
  };


return (
    <div className="min-h-screen flex items-center justify-center bg-tummytales-cream px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
        <div className="text-center mb-6">
          <Link to="/">
            <h1 className="notebook-title text-pink-500 text-3xl">TummyTales</h1>
          </Link>
          <p className="text-gray-500 mt-2">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={handleChange} // ✅
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter user name"
              type="text"
              value={formData.username}
              onChange={handleChange} // ✅
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange} // ✅
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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange} // ✅
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                {/* Google Icon */}
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
