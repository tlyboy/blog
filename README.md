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

| Variable           | Required | Description                                                    |
| ------------------ | -------- | -------------------------------------------------------------- |
| `GITHUB_TOKEN`     | Yes      | GitHub personal access token                                   |
| `S3_PUBLIC_DOMAIN` | No       | S3-compatible storage public domain for Hero background config |

### Hero Background Config

When `S3_PUBLIC_DOMAIN` is set, the app reads `config/blog.json` from the storage to determine the Hero background. Falls back to Bing daily wallpaper if not configured.

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

| Field                  | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `hero.mode`            | `"bing"` or `"custom"`                              |
| `hero.custom.url`      | Relative path to storage root or absolute URL       |
| `hero.custom.position` | CSS `background-position` value, default `"center"` |

## License

[MIT](https://opensource.org/licenses/MIT) © Guany
