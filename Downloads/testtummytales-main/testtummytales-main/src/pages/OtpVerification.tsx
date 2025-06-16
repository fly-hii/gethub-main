
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would verify the OTP with a service
    // For now, let's simulate verification and proceed to onboarding
    sessionStorage.setItem('isLoggedIn', 'true');
    navigate('/onboarding');
    
    // Force a reload to update all components with the new login state
    window.location.reload();
  };
  
  const handleResendOtp = () => {
    // Handle resend OTP logic here
    console.log('Resend OTP clicked');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-tummytales-cream">
      <div className="mx-auto max-w-md w-full p-6 bg-white rounded-xl shadow-md">
        <div className="text-center mb-6">
          <p className="text-gray-500 mt-2">
            Enter verification code
          </p>
          <p className="text-sm text-gray-400 mt-2">
            We've sent a 6-digit code to your email
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Verification Code</Label>
            <div className="flex justify-center">
              <InputOTP 
                maxLength={6} 
                value={otp} 
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup className="gap-4">
                  <InputOTPSlot 
                    index={0} 
                    className="w-12 h-12 text-lg font-semibold border-2 border-pink-300 bg-pink-50 focus:border-pink-500 focus:bg-white shadow-md"
                  />
                  <InputOTPSlot 
                    index={1} 
                    className="w-12 h-12 text-lg font-semibold border-2 border-pink-300 bg-pink-50 focus:border-pink-500 focus:bg-white shadow-md"
                  />
                  <InputOTPSlot 
                    index={2} 
                    className="w-12 h-12 text-lg font-semibold border-2 border-pink-300 bg-pink-50 focus:border-pink-500 focus:bg-white shadow-md"
                  />
                  <InputOTPSlot 
                    index={3} 
                    className="w-12 h-12 text-lg font-semibold border-2 border-pink-300 bg-pink-50 focus:border-pink-500 focus:bg-white shadow-md"
                  />
                  <InputOTPSlot 
                    index={4} 
                    className="w-12 h-12 text-lg font-semibold border-2 border-pink-300 bg-pink-50 focus:border-pink-500 focus:bg-white shadow-md"
                  />
                  <InputOTPSlot 
                    index={5} 
                    className="w-12 h-12 text-lg font-semibold border-2 border-pink-300 bg-pink-50 focus:border-pink-500 focus:bg-white shadow-md"
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
            Verify
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button 
              onClick={handleResendOtp}
              className="text-pink-600 hover:underline font-medium"
            >
              Resend OTP
            </button>
          </p>
        </div>
        
        <div className="mt-4 text-center text-sm">
          <Link to="/register" className="text-gray-500 hover:underline">
            Back to Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
