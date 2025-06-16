
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/sections/FooterSection";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const DataDeletion = () => {
  const handleEmailClick = () => {
    window.open('mailto:incirvelsoft@yahoo.com?subject=Data Deletion Request&body=Please delete my account data. My Facebook-registered email is: ');
  };

  return (
    <div className="min-h-screen bg-tummytales-cream">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Data Deletion Instructions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Request Data Deletion</h2>
              <p>
                If you would like to delete your account and all associated data from TummyTales, please follow these simple steps:
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">How to Request Deletion</h3>
              <ol className="list-decimal pl-6 space-y-2 text-blue-700">
                <li>Send an email to <strong>incirvelsoft@yahoo.com</strong></li>
                <li>Use the same email address that you registered with on Facebook</li>
                <li>Include "Data Deletion Request" in the subject line</li>
                <li>We will process your request within 30 days</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Will Be Deleted</h2>
              <p>
                When you request data deletion, we will permanently remove:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name and email address</li>
                <li>Your account information</li>
                <li>Any data associated with your TummyTales account</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Notes</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Irreversible:</strong> Data deletion is permanent and cannot be undone</li>
                <li><strong>Email Verification:</strong> Requests must come from your Facebook-registered email</li>
                <li><strong>Processing Time:</strong> Allow up to 30 days for complete deletion</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Mail className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ready to Delete Your Data?</h3>
              <p className="text-gray-600 mb-4">Click the button below to send a data deletion request email</p>
              <Button onClick={handleEmailClick} className="bg-red-600 hover:bg-red-700 text-white">
                <Mail className="h-4 w-4 mr-2" />
                Send Deletion Request
              </Button>
            </div>

            <div className="text-sm text-gray-500 mt-8 pt-4 border-t">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default DataDeletion;
