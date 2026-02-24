import type { BlogConfig, HeroBackground } from '@/types/hero'
import { toMkt } from '@/lib/locale'
import { getR2PublicUrl } from '@/lib/r2'

async function fetchBlogConfig(): Promise<BlogConfig | null> {
  const domain = process.env.R2_PUBLIC_DOMAIN
  if (!domain) return null
  try {
    const res = await fetch(`https://${domain}/config/blog.json`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) return null
    return (await res.json()) as BlogConfig
  } catch {
    return null
  }
}

async function getBingWallpaper(locale: string): Promise<string | null> {
  const mkt = toMkt(locale)
  try {
    const res = await fetch(
      `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=${mkt}`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) return null
    const data = await res.json()
    return `https://www.bing.com${data.images[0].url}`
  } catch {
    return null
  }
}

export async function getHeroBackground(
  locale: string,
): Promise<HeroBackground | null> {
  const config = await fetchBlogConfig()

  if (config?.hero?.mode === 'custom' && config.hero.custom?.url) {
    const rawUrl = config.hero.custom.url
    const url =
      rawUrl.startsWith('https://') || rawUrl.startsWith('http://')
        ? rawUrl
        : getR2PublicUrl(rawUrl)
    return { url, position: config.hero.custom.position || 'center' }
  }

  const url = await getBingWallpaper(locale)
  if (!url) return null
  return { url, position: 'center' }
}
