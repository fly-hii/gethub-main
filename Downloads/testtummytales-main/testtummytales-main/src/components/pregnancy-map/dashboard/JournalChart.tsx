
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const journalData = [
  { day: "Mon", mood: 7, entries: 1 },
  { day: "Tue", mood: 8, entries: 2 },
  { day: "Wed", mood: 6, entries: 1 },
  { day: "Thu", mood: 9, entries: 1 },
  { day: "Fri", mood: 7, entries: 2 },
  { day: "Sat", mood: 8, entries: 1 },
  { day: "Sun", mood: 9, entries: 1 },
];

const chartConfig = {
  mood: {
    label: "Mood Score",
    color: "#8b5cf6",
  },
};

export const JournalChart = () => {
  return (
    <div className="h-32">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={journalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" fontSize={12} />
            <YAxis domain={[0, 10]} fontSize={12} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="mood" 
              stroke="var(--color-mood)" 
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">Average Mood: 7.7/10</p>
      </div>
    </div>
  );
};
