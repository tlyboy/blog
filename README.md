# blog

▲ Guany's blog

- **Framework** — Next.js 16 (App Router)
- **UI** — shadcn/ui + Tailwind CSS 4
- **Content** — Streamdown
- **I18n** — next-intl
- **Deploy** — Vercel

## Install

```bash
git clone https://github.com/tlyboy/blog.git
```

## Usage

```bash
pnpm install
pnpm dev
pnpm build
```

### Environment Variables

```bash
cp .env.example .env.local
```

| Variable           | Required | Description                                            |
| ------------------ | -------- | ------------------------------------------------------ |
| `GITHUB_TOKEN`     | Yes      | GitHub personal access token                           |
| `R2_PUBLIC_DOMAIN` | No       | Cloudflare R2 public domain for Hero background config |

## License

[MIT](https://opensource.org/licenses/MIT) © Guany
