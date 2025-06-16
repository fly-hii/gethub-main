
import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const moodQuestions = [
  {
    id: 'question1',
    question: "I have been able to laugh and see the funny side of things.",
    options: ["As much as I always could", "Not quite so much now", "Definitely not so much now", "Not at all"],
  },
  {
    id: 'question2',
    question: "I have looked forward with enjoyment to things.",
    options: ["As much as I ever did", "Rather less than I used to", "Definitely less than I used to", "Hardly at all"],
  },
  {
    id: 'question3',
    question: "I have blamed myself unnecessarily when things go wrong.",
    options: ["Yes, most of the time", "Yes, some of the time", "Not very often", "No, never"],
  },
  {
    id: 'question4',
    question: "I have felt anxious or worried for no good reason.",
    options: ["Yes, very often", "Yes, sometimes", "Hardly ever", "No, not at all"],
  },
  {
    id: 'question5',
    question: "I have felt scared or panicky for no very good reason.",
    options: ["Yes, quite a lot", "Yes, sometimes", "No, not much", "No, not at all"],
  },
  {
    id: 'question6',
    question: "I have felt overwhelmed or unable to cope.",
    options: ["Yes, most of the time", "Yes, sometimes", "Rarely", "No, not at all"],
  },
  {
    id: 'question7',
    question: "I have been so unhappy that I've had difficulty sleeping.",
    options: ["Yes, most of the time", "Yes, sometimes", "Not very often", "No, not at all"],
  },
  {
    id: 'question8',
    question: "I have felt sad or miserable.",
    options: ["Yes, most of the time", "Yes, quite often", "Not very often", "No, not at all"],
  },
  {
    id: 'question9',
    question: "I have been so unhappy that I have been crying.",
    options: ["Yes, most of the time", "Yes, quite often", "Only occasionally", "No, never"],
  },
  {
    id: 'question10',
    question: "I have thought of harming myself.",
    options: ["Yes, quite often", "Sometimes", "Hardly ever", "Never"],
  },
];

const lifestyleQuestions = [
  {
    id: 'support',
    question: "Do you feel that you have enough support from family or friends?",
    options: ["Yes, I do", "Not really", "Sometimes"],
  },
  {
    id: 'stress',
    question: "Are you currently experiencing financial or housing stress?",
    options: ["Yes, I am", "No, I am not", "Sometimes, I get worried"],
  },
  {
    id: 'safety',
    question: "Do you feel safe in your home and relationships?",
    options: ["Yes, I do", "No, I do not", "Sometimes"],
  },
  {
    id: 'history',
    question: "Do you have a history of anxiety, depression, or trauma?",
    options: ["Yes, I do", "No, I do not", "I am not sure"],
  },
  {
    id: 'support_need',
    question: "Would you like to speak to someone about how you're feeling?",
    options: ["Yes, I would like to", "No, not right now", "I am not sure"],
  },
];

const MentalHealth = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);
  const { toast } = useToast();

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const getCurrentQuestions = () => {
    return currentSection === 0 ? moodQuestions : lifestyleQuestions;
  };

  const getProgress = () => {
    const totalQuestions = moodQuestions.length + lifestyleQuestions.length;
    const answeredQuestions = Object.keys(answers).length;
    return (answeredQuestions / totalQuestions) * 100;
  };

  const canProceed = () => {
    const currentQuestions = getCurrentQuestions();
    return currentQuestions.every(q => answers[q.id]);
  };

  const handleNext = () => {
    if (currentSection === 0) {
      setCurrentSection(1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log("Mental Health Survey Answers:", answers);
    setShowModal(true);
    toast({
      title: "Survey Submitted",
      description: "Thank you for sharing with us. Your mental health matters.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🌼 Mental Health Questionnaire
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Because your emotional well-being matters as much as your baby's health.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card className="p-6">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2">Early Detection</h3>
              <p className="text-sm text-gray-600">Spot signs of depression, anxiety, or stress before they worsen</p>
            </Card>
            <Card className="p-6">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-semibold mb-2">Better Support</h3>
              <p className="text-sm text-gray-600">Get connected with counseling or therapy when needed</p>
            </Card>
            <Card className="p-6">
              <div className="text-2xl mb-2">🌈</div>
              <h3 className="font-semibold mb-2">Healthier Outcomes</h3>
              <p className="text-sm text-gray-600">A happy mother supports healthy baby development</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <Card className="p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 About This Assessment</h2>
            <p className="text-gray-600 mb-4">
              We use the <strong>Edinburgh Postnatal Depression Scale (EPDS)</strong> — a trusted tool to assess mood, emotions, and mental well-being during pregnancy.
            </p>
            <p className="text-gray-600">
              Your answers help us understand your emotional state and offer personalized support if needed.
            </p>
          </div>
        </Card>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Section {currentSection + 1} of 2
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(getProgress())}% Complete
            </span>
          </div>
          <Progress value={getProgress()} className="h-2" />
        </div>

        {/* Question Section */}
        <Card className="p-8">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-800">
              {currentSection === 0 ? "🧭 Mood & Emotions (Past 7 Days)" : "🤝 Lifestyle & Support"}
            </CardTitle>
            <p className="text-gray-600">
              {currentSection === 0 
                ? "Please select one answer per question based on how you've felt in the past 7 days."
                : "These questions help us understand your support system and overall well-being."}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {getCurrentQuestions().map((question, index) => (
              <div key={question.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  {index + 1}. {question.question}
                </h3>
                <RadioGroup
                  value={answers[question.id] || ""}
                  onValueChange={(value) => handleAnswerChange(question.id, value)}
                  className="space-y-3"
                >
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value={option} id={`${question.id}-${optionIndex}`} />
                      <Label 
                        htmlFor={`${question.id}-${optionIndex}`}
                        className="flex-1 cursor-pointer text-gray-700"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentSection(0)}
            disabled={currentSection === 0}
            className="px-8"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="px-8 bg-pink-600 hover:bg-pink-700"
          >
            {currentSection === 0 ? "Next Section" : "Submit Survey"}
          </Button>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-md">
          <DialogHeader className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <DialogTitle className="text-xl">Thank you for sharing with us</DialogTitle>
            <DialogDescription className="text-center space-y-3">
              <p>Your mental health matters. Our care team will review your answers and reach out if any follow-up is needed.</p>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-pink-800">
                  Need to talk sooner?
                </p>
                <p className="text-sm text-pink-700">
                  Call our mental wellness line at <strong>1-800-XXX-XXX</strong>
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <Button 
            onClick={() => setShowModal(false)}
            className="w-full bg-pink-600 hover:bg-pink-700"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MentalHealth;
