import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"

// 这里是您可以设置模板的跳转链接
// 只需修改每个模板的 externalUrl 属性即可
const templates = [
  {
    id: "financial-dashboard",
    title: "财务分析仪表盘",
    description: "全面的财务分析工具，包含损益表、现金流量和财务比率分析。",
    price: 199,
    rating: 4.9,
    image: "/project/财务分析/1741595160537.jpg",
    badge: "热门",
    tags: ["财务", "分析", "仪表盘"],
    externalUrl:
      "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkMOcalRe0SyCEPLBnVv_st?scode=AAwA6QduAAo3ullz50AMEAdQYiAIw&tab=db_L9Phd0",
  },
  {
    id: "project-management",
    title: "项目管理跟踪器",
    description: "跟踪项目进度、任务分配和资源使用情况的综合解决方案。",
    price: 149,
    rating: 4.7,
    image: "/project/项目管理/1741594959397.jpg",
    badge: "新品",
    tags: ["项目管理", "任务跟踪", "团队协作"],
    externalUrl:
      "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkfZjyAOYdQP60DB7qfw_st?scode=AAwA6QduAAoplSLTDpAMEAdQYiAIw&tab=db_qj1WYl",
  },
  {
    id: "inventory-management",
    title: "库存管理系统",
    description: "自动化库存跟踪、订单管理和供应链优化的智能表格。",
    price: 179,
    rating: 4.8,
    image: "/project/库存管理/图片.jpg",
    badge: null,
    tags: ["库存", "订单管理", "供应链"],
    externalUrl:
      "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFk8JRbHw0aS2O6hXPrPk_st?scode=AAwA6QduAAob0CwK22AMEAdQYiAIw&tab=db_EExWlE",
  },
  {
    id: "business-analysis",
    title: "业务分析工具",
    description: "全面的业务数据分析和可视化工具，帮助您做出明智的商业决策。",
    price: 189,
    rating: 4.8,
    image: "/project/业务分析/图片.jpg",
    badge: "新品",
    tags: ["业务分析", "数据可视化", "决策支持"],
    externalUrl:
      "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkzh0AVdLJRfmJ2OLAWM_st?scode=AAwA6QduAAoHapm7fgAMEAdQYiAIw&tab=db_3IqvAE",
  },
  {
    id: "financial-management",
    title: "财务管理系统",
    description: "专业的财务管理工具，包含预算规划、费用控制和财务报表。",
    price: 209,
    rating: 4.9,
    image: "/project/财务管理/图片.jpg",
    badge: "推荐",
    tags: ["财务管理", "预算规划", "报表分析"],
    externalUrl:
      "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkoc7XzKDDT7a9qrEV78_st?scode=AAwA6QduAAoh2pWDxyAMEAdQYiAIw&tab=db_L9Phd0",
  },
  {
    id: "inventory-management-pro",
    title: "高级库存管理系统",
    description: "智能化库存管理解决方案，支持多仓库管理和库存预警。",
    price: 229,
    rating: 4.7,
    image: "/project/库存管理/图片.jpg",
    badge: "专业版",
    tags: ["库存管理", "多仓库", "智能预警"],
    externalUrl:
      "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFk8JRbHw0aS2O6hXPrPk_st?scode=AAwA6QduAAob0CwK22AMEAdQYiAIw&tab=db_EExWlE",
  },
  {
    id: "okr-management",
    title: "OKR 目标管理",
    description: "帮助团队设定、跟踪和实现目标的 OKR 管理工具。",
    price: 169,
    rating: 4.8,
    image: "/project/OKR/1741591985540.jpg",
    badge: "推荐",
    tags: ["OKR", "目标管理", "团队协作"],
    externalUrl: "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkGvfa4WptSTSQj1WOlD_st?scode=AAwA6QduAAoYRKRCu0AMEAdQYiAIw&tab=db_HxJH85",
  },
  {
    id: "work-plan",
    title: "工作计划管理",
    description: "高效的工作计划制定和执行跟踪工具。",
    price: 149,
    rating: 4.7,
    image: "/project/工作计划/1741591919319.jpg",
    badge: null,
    tags: ["工作计划", "任务管理", "进度跟踪"],
    externalUrl: "https://doc.weixin.qq.com/smartsheet/work-plan-template",
  },
  {
    id: "project-development",
    title: "项目研发管理",
    description: "专业的研发项目管理工具，支持敏捷开发和任务分配。",
    price: 199,
    rating: 4.8,
    image: "/project/项目研发/1741591545655.jpg",
    badge: "热门",
    tags: ["研发管理", "敏捷开发", "项目跟踪"],
    externalUrl: "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkSbeI6AYQSOuUx9Tf8w_st?scode=AAwA6QduAAoXJtEo70AMEAdQYiAIw&tab=db_tyP3y0",
  },
  {
    id: "customer-management",
    title: "客户管理系统",
    description: "全面的客户关系管理工具，助力提升客户满意度。",
    price: 189,
    rating: 4.7,
    image: "/project/客户管理/图片.jpg",
    badge: null,
    tags: ["客户管理", "CRM", "销售跟踪"],
    externalUrl: "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFk5tOGVRDTRl0kQXFvpa_st?scode=AAwA6QduAAoRjYevc8AMEAdQYiAIw&tab=q979lj",
  },
  {
    id: "daily-report",
    title: "团队日报系统",
    description: "简单高效的团队日报管理工具，实时掌握团队动态。",
    price: 129,
    rating: 4.6,
    image: "/project/团队日报/1741592258079.jpg",
    badge: "实用",
    tags: ["日报", "团队管理", "工作汇报"],
    externalUrl: "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkrYZjdkRmT4yMhI5Xbg_st?scode=AAwA6QduAAozUAcVUMAMEAdQYiAIw&tab=db_rSbiXJ",
  },
  {
    id: "weekly-report",
    title: "团队周报系统",
    description: "全面的团队周报管理工具，助力团队效率提升。",
    price: 139,
    rating: 4.7,
    image: "/project/团队周报/1741592376230.jpg",
    badge: null,
    tags: ["周报", "团队管理", "工作总结"],
    externalUrl: "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkoEeJygUlTBeAx1uwQ8_st?scode=AAwA6QduAAoqaE7nycAMEAdQYiAIw&tab=q979lj",
  },
  {
    id: "business-analysis-pro",
    title: "经营分析系统",
    description: "深入的经营数据分析工具，助力企业决策优化。",
    price: 259,
    rating: 4.9,
    image: "/project/经营分析/1741592461562.jpg",
    badge: "专业版",
    tags: ["经营分析", "数据分析", "决策支持"],
    externalUrl: "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkoc7XzKDDT7a9qrEV78_st?scode=AAwA6QduAAoh2pWDxyAMEAdQYiAIw&tab=db_L9Phd0",
  },
  {
    id: "store-task",
    title: "门店任务管理",
    description: "专业的门店任务进度跟踪和管理工具。",
    price: 179,
    rating: 4.7,
    image: "/project/门店任务进度管理/1741592762286.jpg",
    badge: "新品",
    tags: ["门店管理", "任务跟踪", "进度管理"],
    externalUrl: "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFk1lWm86WGTGyoE76S1E_st?scode=AAwA6QduAAooS8ztfIAMEAdQYiAIw&tab=te4JlD",
  },
  {
    id: "procurement",
    title: "企业采购管理",
    description: "全面的企业采购流程管理和供应商管理工具。",
    price: 219,
    rating: 4.8,
    image: "/project/企业采购管理/1741592981895.jpg",
    badge: "推荐",
    tags: ["采购管理", "供应商管理", "成本控制"],
    externalUrl: "https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkeicsEUxrTqaXLNVAtB_st?scode=AAwA6QduAAoie131DUAMEAdQYiAIw&tab=db_R1NQri",
  }
]

export default function TemplateGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template, index) => (
        <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="relative overflow-hidden aspect-video">
            <img
              src={template.image || "/placeholder.svg"}
              alt={template.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
              {/* 使用外部链接替代内部路由 */}
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

