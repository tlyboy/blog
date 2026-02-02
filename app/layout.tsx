import type { Metadata } from 'next'
import 'katex/dist/katex.min.css'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/layout/site-header'
import type { GitHubUser } from '@/types/github'

export async function getUser(): Promise<GitHubUser | null> {
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

export async function generateMetadata(): Promise<Metadata> {
  const user = await getUser()
  const name = user?.name || 'Guany'

  return {
    title: {
      default: `${name} 的博客`,
      template: `%s | ${name} 的博客`,
    },
    description: user?.bio || `${name} 的个人博客`,
    icons: user?.avatar_url ? [{ url: user.avatar_url }] : undefined,
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  return (
    <html lang="zh-CN" suppressHydrationWarning data-scroll-behavior="smooth">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-full flex-col">
            <SiteHeader avatar={user?.avatar_url} name={user?.name || undefined} />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
