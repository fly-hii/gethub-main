
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Medications = () => {
  const navigate = useNavigate();

  const medications = [
    { name: "Prenatal Vitamins", dosage: "1 tablet", time: "8:00 AM", taken: true },
    { name: "Folic Acid", dosage: "400 mcg", time: "8:00 AM", taken: true },
    { name: "Iron Supplement", dosage: "65 mg", time: "2:00 PM", taken: false },
    { name: "Calcium", dosage: "500 mg", time: "8:00 PM", taken: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent">
            Medications
          </h1>
        </div>

        <div className="grid gap-6">
          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💊</span>
                  Today's Medications
                </div>
                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-rose-500">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Medication
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {medications.map((med, index) => (
                <div key={index} className={`bg-gradient-to-r ${med.taken ? 'from-green-50 to-green-100' : 'from-pink-50 to-rose-50'} rounded-2xl p-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{med.name}</h3>
                        {med.taken && <CheckCircle className="w-5 h-5 text-green-600" />}
                      </div>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span>Dosage: {med.dosage}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{med.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant={med.taken ? "secondary" : "default"}
                      className={med.taken ? "" : "bg-gradient-to-r from-pink-500 to-rose-500"}
                    >
                      {med.taken ? "Taken" : "Mark as Taken"}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-pink-100/60 shadow-xl">
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-sm text-gray-600 mb-2">{day}</div>
                    <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-sm ${
                      index < 5 ? 'bg-green-500 text-white' : 'bg-gray-200'
                    }`}>
                      {index < 5 ? '✓' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Medications;
