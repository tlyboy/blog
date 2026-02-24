# blog

▲ Guany 的博客

- **框架** — Next.js 16 (App Router)
- **UI** — shadcn/ui + Tailwind CSS 4
- **内容** — Streamdown
- **国际化** — next-intl
- **部署** — Vercel

## 安装

```bash
git clone https://github.com/tlyboy/blog.git
```

## 使用说明

```bash
pnpm install
pnpm dev
pnpm build
```

### 环境变量

```bash
cp .env.example .env.local
```

| 变量               | 必需 | 说明                                         |
| ------------------ | ---- | -------------------------------------------- |
| `GITHUB_TOKEN`     | 是   | GitHub 个人访问令牌                          |
| `R2_PUBLIC_DOMAIN` | 否   | Cloudflare R2 公共域名，用于 Hero 背景图配置 |

## 使用许可

[MIT](https://opensource.org/licenses/MIT) © Guany
