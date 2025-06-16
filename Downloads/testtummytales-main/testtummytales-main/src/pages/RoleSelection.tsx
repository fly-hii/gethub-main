import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RoleSelection = () => {
  const navigate = useNavigate();
  
  const handleManualRegistration = () => {
    navigate('/register');
  };
  
  const handleGoogleSignup = () => {
    // Handle Google signup logic here
    console.log('Google signup clicked');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="mx-auto max-w-md w-full p-8">
        <div className="text-center mb-8">
          {/* <h1 className="text-3xl font-bold text-gray-900 mb-2">Select Your Role</h1> */}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center mb-6">
            <div className="w-full h-48 mb-4 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/13db21c8-5711-44b6-aa6b-8c6224a389ab.png" 
                alt="Pregnant woman illustration" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Mom!</h2>
            <p className="text-gray-600 mb-6">Sign up as a mother</p>
          </div>
          
          <div className="space-y-3">
            <Button 
              onClick={handleManualRegistration}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full text-lg font-medium"
            >
              Manual Registration
            </Button>
            
            <Button 
              onClick={handleGoogleSignup}
              variant="outline" 
              className="w-full border-gray-300 py-3 rounded-full text-lg font-medium flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.55V20.46H19.28C21.36 18.53 22.56 15.66 22.56 12.25Z" fill="#4285F4"/>
                <path d="M12 23C14.97 23 17.46 21.97 19.28 20.46L15.71 17.55C14.74 18.19 13.48 18.57 12 18.57C9.16 18.57 6.77 16.61 5.86 13.94H2.19V16.94C4 20.45 7.7 23 12 23Z" fill="#34A853"/>
                <path d="M5.86 13.94C5.63 13.28 5.5 12.57 5.5 11.84C5.5 11.11 5.63 10.4 5.86 9.74V6.74H2.19C1.42 8.28 1 10.01 1 11.84C1 13.67 1.42 15.4 2.19 16.94L5.86 13.94Z" fill="#FBBC04"/>
                <path d="M12 5.11C13.61 5.11 15.04 5.64 16.14 6.71L19.31 3.54C17.46 1.84 14.97 0.776 12 0.776C7.7 0.776 4 3.33 2.19 6.84L5.86 9.84C6.77 7.17 9.16 5.11 12 5.11Z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </Button>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
