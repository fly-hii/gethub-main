
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const mentalHealthData = [
  { week: "W1", score: 12 },
  { week: "W2", score: 8 },
  { week: "W3", score: 10 },
  { week: "W4", score: 6 },
];

const chartConfig = {
  score: {
    label: "EPDS Score",
    color: "#3b82f6",
  },
};

export const MentalHealthChart = () => {
  return (
    <div className="h-32">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mentalHealthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" fontSize={12} />
            <YAxis domain={[0, 30]} fontSize={12} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="var(--color-score)" 
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">Latest Score: 6 (Good)</p>
      </div>
    </div>
  );
};
