# blog

▲ Guany 的博客

- **框架** — Next.js 16 (App Router)
- **UI** — shadcn/ui + Tailwind CSS 4
- **内容** — Streamdown
- **国际化** — next-intl
- **部署** — Vercel / Netlify / Docker

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

| 变量               | 必需 | 说明                                        |
| ------------------ | ---- | ------------------------------------------- |
| `GITHUB_TOKEN`     | 是   | GitHub 个人访问令牌                         |
| `S3_PUBLIC_DOMAIN` | 否   | S3 兼容存储的公共域名，用于 Hero 背景图配置 |

### Hero 背景图配置

设置 `S3_PUBLIC_DOMAIN` 后，应用会从存储读取 `config/blog.json` 来决定 Hero 背景图来源。未配置时回退到 Bing 每日壁纸。

```json
{
  "hero": {
    "mode": "bing"
  }
}
```

```json
{
  "hero": {
    "mode": "custom",
    "custom": {
      "url": "img/background.webp",
      "position": "top"
    }
  }
}
```

| 字段                   | 说明                                          |
| ---------------------- | --------------------------------------------- |
| `hero.mode`            | `"bing"` 或 `"custom"`                        |
| `hero.custom.url`      | 相对于存储根的路径或绝对 URL                  |
| `hero.custom.position` | CSS `background-position` 值，默认 `"center"` |

## 使用许可

[MIT](https://opensource.org/licenses/MIT) © Guany
