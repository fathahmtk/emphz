
"use client"

import * as React from "react"
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

const statusColors: { [key: string]: string } = {
  "New": "hsl(var(--chart-1))",
  "In Progress": "hsl(var(--chart-2))",
  "Contacted": "hsl(var(--chart-3))",
  "Quoted": "hsl(var(--chart-4))",
  "Closed": "hsl(var(--chart-5))",
};


type InquiriesByStatusProps = {
  data: { status: string, count: number }[];
}

export default function InquiriesByStatus({ data }: InquiriesByStatusProps) {
  const chartData = data.filter(item => item.count > 0);

  const chartConfig = chartData.reduce((acc, item) => {
    acc[item.status.toLowerCase().replace(' ', '')] = {
      label: item.status,
      color: statusColors[item.status]
    }
    return acc;
  }, {} as ChartConfig);

  const totalInquiries = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.count, 0)
  }, [data])


  if (totalInquiries === 0) {
    return (
       <Card>
        <CardHeader>
          <CardTitle>Inquiries by Status</CardTitle>
          <CardDescription>Distribution of all inquiries.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-[250px]">
            <p className="text-sm text-muted-foreground">No inquiry data available.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inquiries by Status</CardTitle>
        <CardDescription>Distribution of all {totalInquiries} inquiries.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="status" />}
              />
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="status"
                innerRadius={60}
                strokeWidth={5}
              >
                 {chartData.map((entry) => (
                  <Cell key={`cell-${entry.status}`} fill={statusColors[entry.status]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
