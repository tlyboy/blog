import { setRequestLocale } from 'next-intl/server'
import { HeroSection } from '@/components/home/hero-section'
import { ProjectsSection } from '@/components/home/projects-section'
import { SiteFooter } from '@/components/layout/site-footer'
import { getUser } from '@/lib/github'

const mktMap: Record<string, string> = {
  en: 'en-US',
  'zh-cn': 'zh-CN',
}

async function getWallpaper(locale: string): Promise<string | null> {
  const mkt = mktMap[locale] || 'en-US'
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const [user, wallpaper] = await Promise.all([getUser(), getWallpaper(locale)])

  return (
    <>
      <HeroSection user={user} backgroundUrl={wallpaper || undefined} />
      <ProjectsSection />
      <SiteFooter avatar={user?.avatar_url} name={user?.name || undefined} />
    </>
  )
}
