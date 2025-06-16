
import Navigation from "@/components/Navigation";
import PregnancyMap from "@/components/pregnancy-map/PregnancyMap";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Map = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check login status when component mounts
  useEffect(() => {
    const loginStatus = sessionStorage.getItem('isLoggedIn');
    if (loginStatus !== 'true' && location.pathname === '/map') {
      navigate('/login', { state: { from: location.pathname } });
    }
  }, [navigate, location]);
  
  return (
    <div className="min-h-screen bg-tummytales-cream">
      <Navigation />
      <PregnancyMap />
    </div>
  );
};

export default Map;
