
import { Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const footerLinks = {
    features: ["Ask Amma", "Mom Circle", "Pregnancy Map", "Baby Setup"],
    resources: ["Calendar", "Community", "Nutrition Tips", "FAQ"],
    support: ["Support Forum", "Blog", "Pricing", "Contact"]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-pink-400 mr-3" />
              <h3 className="text-2xl font-bold">Tummytales</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted companion throughout pregnancy, offering personalized guidance and community support.
            </p>
            <div className="flex items-center text-gray-300">
              <Mail className="h-4 w-4 mr-2" />
              <span>hello@tummytales.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Features</h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tummytales. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/data-deletion" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Data Deletion
              </Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              Made with <Heart className="h-4 w-4 text-pink-400 inline mx-1" /> for expecting mothers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
