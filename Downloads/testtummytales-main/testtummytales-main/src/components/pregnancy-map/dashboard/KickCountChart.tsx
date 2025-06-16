
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const kickData = [
  { time: "6AM", kicks: 3 },
  { time: "9AM", kicks: 5 },
  { time: "12PM", kicks: 8 },
  { time: "3PM", kicks: 12 },
  { time: "6PM", kicks: 15 },
  { time: "9PM", kicks: 10 },
];

const chartConfig = {
  kicks: {
    label: "Kick Count",
    color: "#ec4899",
  },
};

export const KickCountChart = () => {
  return (
    <div className="h-32">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={kickData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" fontSize={12} />
            <YAxis fontSize={12} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area 
              type="monotone" 
              dataKey="kicks" 
              stroke="var(--color-kicks)" 
              fill="var(--color-kicks)" 
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">Today: 53 kicks</p>
      </div>
    </div>
  );
};
