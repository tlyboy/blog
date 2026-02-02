import { HeroSection } from '@/components/home/hero-section'
import { ProjectsSection } from '@/components/home/projects-section'
import { SiteFooter } from '@/components/layout/site-footer'
import type { GitHubUser } from '@/types/github'

async function getUser(): Promise<GitHubUser | null> {
  const token = process.env.GITHUB_TOKEN
  if (!token) return null

  try {
    const res = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

async function getWallpaper(): Promise<string | null> {
  try {
    const res = await fetch(
      'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    const data = await res.json()
    return `https://www.bing.com${data.images[0].url}`
  } catch {
    return null
  }
}

export default async function Home() {
  const [user, wallpaper] = await Promise.all([getUser(), getWallpaper()])

  return (
    <>
      <HeroSection user={user} backgroundUrl={wallpaper || undefined} />
      <ProjectsSection />
      <SiteFooter avatar={user?.avatar_url} name={user?.name || undefined} />
    </>
  )
}
