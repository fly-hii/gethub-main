
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/sections/FooterSection";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-tummytales-cream">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using TummyTales, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fair Usage Policy</h2>
              <p>
                Users must follow fair usage guidelines when using our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service responsibly and in accordance with its intended purpose</li>
                <li>Do not attempt to disrupt, damage, or gain unauthorized access to our systems</li>
                <li>Respect other users and maintain appropriate conduct</li>
                <li>Do not use the service for any illegal or unauthorized purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
              <p>
                We only collect login data necessary for authentication:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and email address via Facebook login</li>
                <li>No additional personal data is collected beyond authentication requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Restrictions</h2>
              <p>
                We reserve the right to restrict or terminate access to our services if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Misuse of the platform is detected</li>
                <li>Violation of these terms of service occurs</li>
                <li>Suspicious or unauthorized activity is identified</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
              <p>
                TummyTales provides services "as is" and we disclaim all warranties. We shall not be liable for any damages arising from the use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p>
                For questions regarding these terms, please contact us at{" "}
                <a href="mailto:incirvelsoft@yahoo.com" className="text-blue-600 hover:underline">
                  fbgoindia@support.facebook.com
                </a>
              </p>
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

export default TermsOfService;
