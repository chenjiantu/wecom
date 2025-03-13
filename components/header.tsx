"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  // 关闭移动菜单当路径改变时
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
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
              className="text-primary"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <path d="M8 13h2"></path>
              <path d="M8 17h2"></path>
              <path d="M14 13h2"></path>
              <path d="M14 17h2"></path>
            </svg>
            <span>智能表格市场</span>
          </Link>
        </div>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/templates"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/templates" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            模板市场
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/about" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            关于我们
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/cart" className="relative mr-2">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
              <span className="sr-only">购物车</span>
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">用户菜单</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">登录</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">注册</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard">我的账户</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/orders">我的订单</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 移动菜单按钮 */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">菜单</span>
          </Button>
        </div>
      </div>

      {/* 移动导航 */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="/templates"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/templates" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              模板市场
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              关于我们
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

