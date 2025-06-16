
import { Shield, Lock, CheckCircle, Users, Award, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SecurityPrivacySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your health data is protected according to healthcare industry standards"
    },
    {
      icon: Lock,
      title: "End-to-End Encrypted",
      description: "All your conversations and personal data are fully encrypted"
    },
    {
      icon: Award,
      title: "Expert Verified",
      description: "All medical information is reviewed by certified healthcare professionals"
    },
    {
      icon: Eye,
      title: "Your Data Ownership",
      description: "You have complete control over your personal information and privacy settings"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text text-transparent mb-4">
            Security & Privacy First
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy and security are our top priorities. We use industry-leading technology to protect your sensitive information.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Verified & Trusted</h3>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            All medical advice and information provided through Tummytales is reviewed and verified by licensed healthcare professionals. 
            Your data remains yours, and you can export or delete it at any time.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Shield className="h-4 w-4 mr-1 text-green-600" />
              SOC 2 Certified
            </span>
            <span className="flex items-center">
              <Lock className="h-4 w-4 mr-1 text-blue-600" />
              256-bit Encryption
            </span>
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-purple-600" />
              Privacy by Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityPrivacySection;
