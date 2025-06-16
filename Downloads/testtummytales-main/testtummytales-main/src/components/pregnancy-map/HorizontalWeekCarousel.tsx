
import React, { useState } from "react";
import HorizontalWeekCarouselPart1 from "./HorizontalWeekCarouselPart1";
import HorizontalWeekCarouselPart2 from "./HorizontalWeekCarouselPart2";

const HorizontalWeekCarousel = () => {
  const [selectedWeek, setSelectedWeek] = useState<number>(18);

  const handleWeekSelect = (weekNum: number) => {
    setSelectedWeek(weekNum);
  };

  return (
    <div>
      <HorizontalWeekCarouselPart1 
        selectedWeek={selectedWeek} 
        onWeekSelect={handleWeekSelect} 
      />
      <HorizontalWeekCarouselPart2 
        selectedWeek={selectedWeek} 
      />
    </div>
  );
};

export default HorizontalWeekCarousel;
