
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/sections/FooterSection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-tummytales-cream">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <p>
                We collect minimal information to provide our services. Specifically, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Name:</strong> Collected via Facebook login for user identification</li>
                <li><strong>Email Address:</strong> Collected via Facebook login for authentication purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
              <p>
                Your information is used exclusively for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>User authentication and account management</li>
                <li>Providing access to TummyTales services</li>
                <li>Ensuring account security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
              <p>
                <strong>We do not share your personal information with third parties.</strong> Your name and email address remain private and are used solely for authentication purposes within our platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:fbgoindia@support.facebook.com" className="text-blue-600 hover:underline">
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

export default PrivacyPolicy;
