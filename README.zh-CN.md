# blog

▲ Guany 的博客

| 分类   | 技术栈                     |
| ------ | -------------------------- |
| 框架   | Next.js 16 (App Router)    |
| UI     | shadcn/ui + Tailwind CSS 4 |
| 内容   | Streamdown                 |
| 国际化 | next-intl                  |
| 部署   | Vercel / Netlify / Docker  |

### Vercel 环境变量

| 变量                 | 值     | 描述                                   |
| -------------------- | ------ | -------------------------------------- |
| `VERCEL_DEEP_CLONE`  | `true` | 启用完整 git 历史，用于最后更新时间显示 |

## 安装

```bash
git clone https://github.com/tlyboy/blog.git
cd blog
pnpm install
```

### 环境变量

```bash
cp .env.example .env.local
```

| 变量               | 必需 | 描述                                        |
| ------------------ | ---- | ------------------------------------------- |
| `GITHUB_TOKEN`     | 是   | GitHub 个人访问令牌                         |
| `S3_PUBLIC_DOMAIN` | 否   | S3 兼容存储的公开域名，用于 Hero 背景图配置 |
| `TO_API_URL`       | 否   | to 短链服务 API 地址                        |
| `TO_API_KEY`       | 否   | to API 密钥，用于外链点击追踪               |

## 使用说明

### 开发

```bash
pnpm dev
```

### 构建

```bash
pnpm build
```

### 外链追踪

配置 `TO_API_URL` 和 `TO_API_KEY` 后，文章中的外链会通过 to 短链服务进行点击追踪。API 密钥在 to 工作区设置中创建。未配置时直接跳转。

### Hero 背景图配置

配置 `S3_PUBLIC_DOMAIN` 后，应用会从存储中读取 `config/blog.json` 来决定 Hero 背景图。未配置时使用必应每日壁纸。

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

| 字段                   | 描述                                          |
| ---------------------- | --------------------------------------------- |
| `hero.mode`            | `"bing"` 或 `"custom"`                        |
| `hero.custom.url`      | 相对于存储根目录的路径或绝对 URL              |
| `hero.custom.position` | CSS `background-position` 值，默认 `"center"` |

## 使用许可

[MIT](https://opensource.org/licenses/MIT) © Guany
