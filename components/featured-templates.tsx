"use client"

import { useState } from "react"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedTemplates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template, index) => (
        <Card
          key={index}
          className="overflow-hidden transition-all duration-300 hover:shadow-lg"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative overflow-hidden aspect-video">
            <img
              src={template.image || "/placeholder.svg"}
              alt={template.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
              }}
            />
            {template.badge && <Badge className="absolute top-3 right-3">{template.badge}</Badge>}
          </div>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{template.title}</CardTitle>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="text-sm font-medium">{template.rating}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 dark:text-gray-400">{template.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {template.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="outline" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="font-bold text-lg">¥{template.price}</div>
            <Button asChild size="sm">
              <a href={template.externalUrl} target="_blank" rel="noopener noreferrer">
                查看详情
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

const templates = [
  {
    id: "financial-dashboard",
    title: "财务分析仪表盘",
    description: "全面的财务分析工具，包含损益表、现金流量和财务比率分析。",
    price: 199,
    rating: 4.9,
    image: "/financial-dashboard.jpg",
    badge: "热门",
    tags: ["财务", "分析", "仪表盘"],
    // 在这里设置外部跳转链接
    externalUrl:
      "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkMOcalRe0SyCEPLBnVv_st?scode=AAwA6QduAAo3ullz50AMEAdQYiAIw&tab=db_L9Phd0",
  },
  {
    id: "project-management",
    title: "项目管理跟踪器",
    description: "跟踪项目进度、任务分配和资源使用情况的综合解决方案。",
    price: 149,
    rating: 4.7,
    image: "/project-management.jpg",
    badge: "新品",
    tags: ["项目管理", "任务跟踪", "团队协作"],
    // 在这里设置外部跳转链接
    externalUrl:
      "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkfZjyAOYdQP60DB7qfw_st?scode=AAwA6QduAAoplSLTDpAMEAdQYiAIw&tab=db_qj1WYl",
  },
  {
    id: "inventory-management",
    title: "库存管理系统",
    description: "自动化库存跟踪、订单管理和供应链优化的智能表格。",
    price: 179,
    rating: 4.8,
    image: "/inventory-management.jpg",
    badge: null,
    tags: ["库存", "订单管理", "供应链"],
    // 在这里设置外部跳转链接
    externalUrl:
      "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFk8JRbHw0aS2O6hXPrPk_st?scode=AAwA6QduAAob0CwK22AMEAdQYiAIw&tab=db_EExWlE",
  },
]

