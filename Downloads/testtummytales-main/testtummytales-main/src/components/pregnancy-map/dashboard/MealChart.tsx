
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const mealData = [
  { name: "Healthy", value: 65, color: "#10b981" },
  { name: "Moderate", value: 25, color: "#f59e0b" },
  { name: "Needs Improvement", value: 10, color: "#ef4444" },
];

const chartConfig = {
  value: {
    label: "Percentage",
  },
};

export const MealChart = () => {
  return (
    <div className="h-32">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mealData}
              cx="50%"
              cy="50%"
              innerRadius={20}
              outerRadius={50}
              dataKey="value"
            >
              {mealData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">Nutrition Score: 8.2/10</p>
      </div>
    </div>
  );
};
