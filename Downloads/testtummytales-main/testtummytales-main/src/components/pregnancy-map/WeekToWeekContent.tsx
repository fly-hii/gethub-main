
import React from "react";

interface WeekToWeekContentProps {
  weekNum: number;
}

interface WeekContent {
  size: string;
  development: string;
  changes: string;
  tips: string;
}

const WeekToWeekContent: React.FC<WeekToWeekContentProps> = ({ weekNum }) => {
  const getEnhancedWeekToWeekContent = (week: number): WeekContent => {
    const enhancedWeekContent: { [key: number]: WeekContent } = {
      1: {
        size: "smaller than a grain of rice",
        development: "Your journey begins! The embryo is just a cluster of rapidly dividing cells, forming the foundation of life.",
        changes: "Fertilization occurs and the blastocyst travels down the fallopian tube to implant in your uterus.",
        tips: "Start taking folic acid supplements (400-800 mcg daily) and maintain a healthy lifestyle. Avoid alcohol and smoking."
      },
      2: {
        size: "size of a poppy seed",
        development: "Cell division happening rapidly. The embryo implants into the uterine wall and begins developing layers.",
        changes: "Your body starts producing pregnancy hormones (hCG). You might not feel different yet.",
        tips: "Continue healthy habits even if you don't know you're pregnant yet. This is crucial development time."
      },
      3: {
        size: "size of a sesame seed",
        development: "The neural tube forms, which will become your baby's brain and spinal cord. Heart begins to develop.",
        changes: "Major organ systems begin to develop. Your body is working hard to support this growth.",
        tips: "Folic acid is especially important now to prevent neural tube defects. Stay hydrated and eat nutrient-rich foods."
      },
      4: {
        size: "size of an apple seed",
        development: "Heart begins to form distinct chambers and your baby's facial features start developing. Limb buds appear.",
        changes: "You might experience your first pregnancy symptoms like fatigue, breast tenderness, or nausea.",
        tips: "Schedule your first prenatal appointment. Start taking prenatal vitamins if you haven't already."
      },
      5: {
        size: "size of a peppercorn",
        development: "The heart starts beating around 100-160 beats per minute! Brain development accelerates rapidly.",
        changes: "Morning sickness might begin, and you may feel more tired than usual. Emotions may fluctuate.",
        tips: "Eat small, frequent meals to combat nausea. Stay hydrated and get plenty of rest. Listen to your body."
      },
      6: {
        size: "size of a lentil",
        development: "Facial features continue developing. Eyes, nose, and mouth are forming. Kidneys start functioning.",
        changes: "Breast tenderness increases and mood changes may occur due to hormonal shifts.",
        tips: "Consider prenatal yoga or gentle exercise. Start thinking about your birth preferences and healthcare team."
      },
      7: {
        size: "size of a blueberry",
        development: "Brain development is in overdrive! Kidneys start producing urine. Arms and legs are growing longer.",
        changes: "Your uterus begins to expand, though not visibly yet. You may notice increased urination.",
        tips: "Focus on protein-rich foods for optimal brain development. Consider omega-3 supplements if recommended."
      },
      8: {
        size: "size of a raspberry",
        development: "Fingers and toes begin to form, and the heart has four distinct chambers pumping blood efficiently.",
        changes: "You might start to show very slightly. Clothes may feel tighter around the waist.",
        tips: "Stay active with gentle, doctor-approved exercise. Start researching childbirth classes and pediatricians."
      },
      12: {
        size: "size of a lime",
        development: "All major organs are formed! Your baby can now make movements, though you can't feel them yet.",
        changes: "Morning sickness may start to ease. Energy levels often improve in the second trimester.",
        tips: "This is a great time to announce your pregnancy. Consider genetic screening tests if recommended."
      },
      16: {
        size: "size of an avocado",
        development: "Your baby can hear sounds and may respond to them. Facial expressions are developing.",
        changes: "You might start feeling the first flutters of movement. Your belly is becoming more noticeable.",
        tips: "Start talking and singing to your baby - they can hear your voice! Consider prenatal massage for comfort."
      },
      18: {
        size: "size of a bell pepper",
        development: "All major organs are formed, and your baby can hear sounds from outside. Movements become more coordinated.",
        changes: "You can feel more distinct movements, and the anatomy scan reveals detailed development progress.",
        tips: "Talk and sing to your baby - they can hear your voice! Start planning your nursery and baby registry."
      },
      20: {
        size: "size of a banana",
        development: "Halfway point! Your baby's movements are becoming stronger and more coordinated. Hair and nails are growing.",
        changes: "Your belly button may start to pop out, and you might feel Braxton Hicks contractions.",
        tips: "Start thinking seriously about baby names and nursery preparations. Consider taking maternity photos."
      },
      24: {
        size: "size of an ear of corn",
        development: "Your baby's hearing is fully developed. They're gaining weight rapidly and developing fat stores.",
        changes: "You may experience back pain as your center of gravity shifts. Sleep may become more challenging.",
        tips: "Practice good posture and consider a pregnancy pillow. Start glucose screening as recommended by your doctor."
      },
      28: {
        size: "size of an eggplant",
        development: "Your baby's eyes can open and close, and they're developing sleep-wake cycles similar to yours.",
        changes: "You may feel more tired again. Braxton Hicks contractions may become more noticeable.",
        tips: "Start preparing your hospital bag and birth plan. Consider taking childbirth preparation classes."
      },
      32: {
        size: "size of a squash",
        development: "Your baby's bones are hardening, and they're practicing breathing movements with amniotic fluid.",
        changes: "You may experience increased heartburn and shortness of breath as baby grows.",
        tips: "Start counting daily kicks and movements. Prepare for more frequent prenatal appointments."
      },
      36: {
        size: "size of a papaya",
        development: "Your baby is considered full-term soon! Lungs are maturing and preparing for first breath.",
        changes: "You may feel increased pelvic pressure as baby drops into birthing position.",
        tips: "Finalize your birth plan and hospital bag. Ensure car seat is properly installed and inspected."
      }
    };

    return enhancedWeekContent[week] || {
      size: "growing beautifully",
      development: "Your baby continues to develop and grow stronger each day, reaching important milestones.",
      changes: "Your body is adapting wonderfully to support your growing baby's needs.",
      tips: "Continue with regular prenatal care, healthy nutrition, and stay connected with your healthcare team."
    };
  };

  const content = getEnhancedWeekToWeekContent(weekNum);

  return (
    <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-sm">
      <h3 className="notebook-heading mb-4 text-lg flex items-center gap-2">
        <span className="text-2xl">🌱</span>
        Week to Week Changes
      </h3>
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-md border-l-4 border-blue-400">
          <p className="text-sm font-semibold text-blue-800 mb-2">Baby Size</p>
          <p className="text-sm text-blue-700">Your baby is now <strong>{content.size}</strong></p>
        </div>
        
        <div className="p-4 bg-green-50 rounded-md border-l-4 border-green-400">
          <p className="text-sm font-semibold text-green-800 mb-2">Development This Week</p>
          <p className="text-sm text-green-700">{content.development}</p>
        </div>
        
        <div className="p-4 bg-purple-50 rounded-md border-l-4 border-purple-400">
          <p className="text-sm font-semibold text-purple-800 mb-2">Your Body Changes</p>
          <p className="text-sm text-purple-700">{content.changes}</p>
        </div>
        
        <div className="p-4 bg-orange-50 rounded-md border-l-4 border-orange-400">
          <p className="text-sm font-semibold text-orange-800 mb-2">Week {weekNum} Tips</p>
          <p className="text-sm text-orange-700">{content.tips}</p>
        </div>
      </div>
    </div>
  );
};

export default WeekToWeekContent;
