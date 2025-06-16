
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import About1 from "./pages/About1";
import About2 from "./pages/About2";
import About3 from "./pages/About3";
import About4 from "./pages/About4";
import Map from "./pages/Map";
import Month from "./pages/Month";
import Resources from "./pages/Resources";
import AskAmma from "./pages/AskAmma";
import Network from "./pages/Network";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoleSelection from "./pages/RoleSelection";
import OtpVerification from "./pages/OtpVerification";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import MentalHealth from "./pages/MentalHealth";
import Exercise from "./pages/Exercise";
import MealMap from "./pages/MealMap";
import Journal from "./pages/Journal";
import Medications from "./pages/Medications";
import KickCount from "./pages/KickCount";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DataDeletion from "./pages/DataDeletion";
import GeneralPreparation from "./pages/GeneralPreparation";
import FamilyTraditions from "./pages/FamilyTraditions";
import AskAmmaChat from "./components/ask-amma/AskAmmaChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about1" element={<About1 />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/about3" element={<About3 />} />
          <Route path="/about4" element={<About4 />} />
          <Route path="/map" element={<Map />} />
          <Route path="/month/:monthNumber" element={<Month />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ask-amma" element={<AskAmma />} />
          <Route path="/network" element={<Network />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/meal-map" element={<MealMap />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/kick-count" element={<KickCount />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/general-preparation" element={<GeneralPreparation />} />
          <Route path="/family-traditions" element={<FamilyTraditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AskAmmaChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
