# blog

▲ Guany's blog

| Category  | Stack                      |
| --------- | -------------------------- |
| Framework | Next.js 16 (App Router)    |
| UI        | shadcn/ui + Tailwind CSS 4 |
| Content   | Streamdown                 |
| I18n      | next-intl                  |
| Deploy    | Vercel / Netlify / Docker  |

## Install

```bash
git clone https://github.com/tlyboy/blog.git
cd blog
pnpm install
```

### Environment Variables

```bash
cp .env.example .env.local
```

| Variable           | Required | Description                                                    |
| ------------------ | -------- | -------------------------------------------------------------- |
| `GITHUB_TOKEN`     | Yes      | GitHub personal access token                                   |
| `S3_PUBLIC_DOMAIN` | No       | S3-compatible storage public domain for Hero background config |
| `TO_API_URL`       | No       | to short link service API base URL                             |
| `TO_API_KEY`       | No       | to API key for external link tracking                          |

## Usage

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### External Link Tracking

When `TO_API_URL` and `TO_API_KEY` are set, external links in articles are redirected through the to short link service for click tracking. Create an API key in the to workspace settings. Falls back to direct link if not configured.

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
