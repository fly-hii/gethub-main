
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const exerciseData = [
  { day: "Mon", minutes: 30 },
  { day: "Tue", minutes: 45 },
  { day: "Wed", minutes: 20 },
  { day: "Thu", minutes: 35 },
  { day: "Fri", minutes: 40 },
  { day: "Sat", minutes: 25 },
  { day: "Sun", minutes: 30 },
];

const chartConfig = {
  minutes: {
    label: "Exercise Minutes",
    color: "#3b82f6",
  },
};

export const ExerciseChart = () => {
  return (
    <div className="h-32">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={exerciseData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" fontSize={12} />
            <YAxis fontSize={12} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="minutes" fill="var(--color-minutes)" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">Weekly Average: 32 min</p>
      </div>
    </div>
  );
};
