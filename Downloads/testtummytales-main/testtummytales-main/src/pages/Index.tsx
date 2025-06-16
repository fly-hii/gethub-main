
import { Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Redirect to the About page as specified in requirements
  return <Navigate to="/about" replace />;
};

export default Index;
