
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const medicationData = [
  { day: "Mon", taken: 2, missed: 0 },
  { day: "Tue", taken: 2, missed: 0 },
  { day: "Wed", taken: 1, missed: 1 },
  { day: "Thu", taken: 2, missed: 0 },
  { day: "Fri", taken: 2, missed: 0 },
  { day: "Sat", taken: 2, missed: 0 },
  { day: "Sun", taken: 1, missed: 1 },
];

const chartConfig = {
  taken: {
    label: "Taken",
    color: "#10b981",
  },
  missed: {
    label: "Missed",
    color: "#ef4444",
  },
};

export const MedicationsChart = () => {
  return (
    <div className="h-32">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={medicationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" fontSize={12} />
            <YAxis fontSize={12} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="taken" fill="var(--color-taken)" radius={4} />
            <Bar dataKey="missed" fill="var(--color-missed)" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">Compliance: 85%</p>
      </div>
    </div>
  );
};
