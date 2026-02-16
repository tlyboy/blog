# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 开发命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # 构建生产版本
pnpm lint     # 运行 ESLint 检查
pnpm start    # 启动生产服务器
```

## 技术栈

- **框架**: Next.js 16 (App Router)
- **UI 组件**: shadcn/ui (new-york 风格)
- **样式**: Tailwind CSS 4
- **包管理器**: pnpm
- **Node 版本**: >=22

## 项目结构

```
app/           # Next.js App Router 页面和布局
components/    # React 组件
  ui/          # shadcn/ui 组件
lib/           # 工具函数 (cn 等)
```

## shadcn/ui 配置

- 风格: `new-york`
- 图标库: `lucide-react`
- 添加组件: `pnpm dlx shadcn@latest add <component>`
- 组件路径别名: `@/components/ui`
- 工具函数别名: `@/lib/utils`

## 主题系统

使用 `next-themes` 实现深色模式，配合 View Transitions API 实现平滑切换。主题变量定义在 `app/globals.css` 中，使用 OKLCH 色彩空间。

## 路径别名

`@/*` 映射到项目根目录。
