"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// 示例数据
const salesData = [
  { month: "1月", sales: 4000, target: 2400 },
  { month: "2月", sales: 3000, target: 2500 },
  { month: "3月", sales: 5000, target: 2600 },
  { month: "4月", sales: 2780, target: 2700 },
  { month: "5月", sales: 1890, target: 2800 },
  { month: "6月", sales: 2390, target: 2900 },
]

export default function HeroAnimation() {
  const [activeTab, setActiveTab] = useState("table")

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
        <div className="flex justify-between items-center border-b px-4">
          <TabsList className="h-12">
            <TabsTrigger value="table">数据表格</TabsTrigger>
            <TabsTrigger value="charts">数据分析</TabsTrigger>
          </TabsList>
          <div className="text-xs text-muted-foreground">智能表格示例</div>
        </div>

        <TabsContent value="table" className="h-[calc(100%-48px)] overflow-auto p-0">
          <Table>
            <TableHeader className="sticky top-0 bg-white dark:bg-gray-950">
              <TableRow>
                <TableHead className="w-[100px]">月份</TableHead>
                <TableHead>销售额</TableHead>
                <TableHead>目标</TableHead>
                <TableHead>差额</TableHead>
                <TableHead className="text-right">完成率</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.map((row) => (
                <TableRow key={row.month}>
                  <TableCell className="font-medium">{row.month}</TableCell>
                  <TableCell>¥{row.sales.toLocaleString()}</TableCell>
                  <TableCell>¥{row.target.toLocaleString()}</TableCell>
                  <TableCell className={row.sales >= row.target ? "text-green-600" : "text-red-600"}>
                    {row.sales >= row.target ? "+" : ""}
                    {(row.sales - row.target).toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">{Math.round((row.sales / row.target) * 100)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="charts" className="h-[calc(100%-48px)] p-2">
          <div className="flex justify-center items-center h-full">
            <Card className="w-full max-w-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">销售业绩分析</CardTitle>
              </CardHeader>
              <CardContent className="h-[calc(100%-48px)]">
                <ChartContainer
                  config={{
                    sales: {
                      label: "销售额",
                      color: "hsl(var(--chart-1))",
                    },
                    target: {
                      label: "目标",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-full flex items-center justify-center"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }} barSize={20}>
                      <XAxis dataKey="month" scale="band" fontSize={12} />
                      <YAxis fontSize={12} width={40} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="target" fill="var(--color-target)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

