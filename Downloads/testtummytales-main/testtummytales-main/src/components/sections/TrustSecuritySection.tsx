
import { Shield, Lock, CheckCircle, User } from "lucide-react";

const TrustSecuritySection = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-gray-700 to-slate-600 bg-clip-text text-transparent">
        Trusted & Secure
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {[
          { title: "HIPAA Compliant", icon: Shield, desc: "Your health data is protected" },
          { title: "End-to-End Encrypted", icon: Lock, desc: "Private conversations stay private" },
          { title: "Expert Verified", icon: CheckCircle, desc: "Medical professional oversight" },
          { title: "Your Data Ownership", icon: User, desc: "Complete control over your information" }
        ].map((feature, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 text-center max-w-xs">
            <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-slate-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <feature.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSecuritySection;
