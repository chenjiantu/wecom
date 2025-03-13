import Link from "next/link"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedTemplates from "@/components/featured-templates"
import HeroAnimation from "@/components/hero-animation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 lg:space-y-6 lg:w-1/2">
            <div className="inline-flex items-center border-l-4 border-primary pl-3 py-1 text-sm font-medium mb-2">
              <span className="text-primary">智能表格新体验</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              让数据管理变得简单而强大
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              发现专业设计的智能表格模板，提升您的工作效率，简化复杂数据处理，实现业务增长。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="font-medium">
                <Link href="/templates">
                  浏览模板
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>30天无条件退款保证</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center border-l-4 border-primary pl-3 py-1 text-sm font-medium">
                <span className="text-primary">核心优势</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">为什么选择我们的智能表格</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                我们的智能表格解决方案为您提供卓越的数据管理体验
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-full bg-primary/10">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center border-l-4 border-primary pl-3 py-1 text-sm font-medium">
                <span className="text-primary">精选模板</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">热门智能表格模板</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                浏览我们精心设计的模板，满足各种业务需求
              </p>
            </div>
          </div>
          <div className="mt-12">
            <FeaturedTemplates />
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/templates">查看全部模板</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center border-l-4 border-primary pl-3 py-1 text-sm font-medium">
                <span className="text-primary">用户评价</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">客户如何评价我们</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                看看我们的客户如何使用智能表格提升他们的业务
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="flex-1 text-gray-500 dark:text-gray-400 italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                准备好提升您的数据管理体验了吗？
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                立即开始使用我们的智能表格解决方案，体验数据管理的全新方式
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" variant="secondary" className="font-medium">
                <Link href="/templates">
                  开始使用
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "智能数据分析",
    description: "自动分析您的数据，提供有价值的见解和可视化报表，帮助您做出更明智的决策。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
      >
        <path d="M3 3v18h18"></path>
        <path d="m19 9-5 5-4-4-3 3"></path>
      </svg>
    ),
  },
  {
    title: "自动化工作流",
    description: "通过自动化重复性任务，减少手动操作，提高工作效率，让您专注于更重要的事务。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
      >
        <path d="M12 2H2v10h10V2Z"></path>
        <path d="M22 12h-4v4h4v-4Z"></path>
        <path d="M12 8h4v4"></path>
        <path d="M17 16v4"></path>
        <path d="M22 22H2v-6h4"></path>
        <path d="M22 8h-5"></path>
        <path d="M8 12v4"></path>
        <path d="M12 22v-6"></path>
      </svg>
    ),
  },
  {
    title: "协作与共享",
    description: "轻松与团队成员共享表格，实时协作编辑，确保所有人都能访问最新的数据和信息。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: "张明",
    title: "财务总监",
    rating: 5,
    text: "这些智能表格模板彻底改变了我们的财务报告流程。现在我们可以在几分钟内生成以前需要几天才能完成的报告。",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "李娜",
    title: "项目经理",
    rating: 5,
    text: "作为项目经理，我需要跟踪多个项目的进度和资源分配。这个平台的项目管理模板让我的工作变得轻松许多。",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "王强",
    title: "小型企业主",
    rating: 4,
    text: "作为一个小企业主，我没有大量资源来投资复杂的软件。这些智能表格提供了我所需的所有功能，价格也很合理。",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

