import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TemplateGrid from "@/components/template-grid"

export default function TemplatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">返回首页</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">智能表格模板</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* Filters */}
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">搜索</h3>
              <Input placeholder="搜索模板..." />
            </div>

            <div>
              <h3 className="font-medium mb-3">分类</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${index}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`category-${index}`} className="ml-2 text-sm">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">价格范围</h3>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="最低" type="number" />
                <Input placeholder="最高" type="number" />
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">评分</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`rating-${rating}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`rating-${rating}`} className="ml-2 text-sm">
                      {rating}星及以上
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">应用筛选</Button>
          </div>

          {/* Templates Grid */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">显示 24 个模板中的 1-12 个</p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">排序方式:</span>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="排序方式" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">最受欢迎</SelectItem>
                    <SelectItem value="newest">最新上架</SelectItem>
                    <SelectItem value="price-low">价格从低到高</SelectItem>
                    <SelectItem value="price-high">价格从高到低</SelectItem>
                    <SelectItem value="rating">评分最高</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TemplateGrid />

            <div className="flex justify-center mt-8">
              <div className="flex space-x-1">
                {[1, 2, 3].map((page) => (
                  <Button key={page} variant={page === 1 ? "default" : "outline"} size="icon" className="w-10 h-10">
                    {page}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const categories = [
  "财务管理",
  "项目管理",
  "库存管理",
  "人力资源",
  "销售跟踪",
  "市场营销",
  "客户关系管理",
  "数据分析",
  "预算规划",
]

