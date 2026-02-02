import type { GitHubRepo } from '@/types/github'

const token = process.env.GITHUB_TOKEN

// 缓存用户名，避免重复请求
let cachedUsername: string | null = null

async function getUsername(): Promise<string | null> {
  if (cachedUsername) return cachedUsername
  if (!token) return null

  const res = await fetch('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 3600 },
  })

  if (!res.ok) return null
  const user = await res.json()
  cachedUsername = user.login
  return cachedUsername
}

function mapRepo(repo: Record<string, unknown>): GitHubRepo {
  return {
    id: repo.id as number,
    name: repo.name as string,
    full_name: repo.full_name as string,
    html_url: repo.html_url as string,
    description: repo.description as string | null,
    homepage: repo.homepage as string | null,
    language: repo.language as string | null,
    stargazers_count: repo.stargazers_count as number,
    forks_count: repo.forks_count as number,
    updated_at: repo.updated_at as string,
    default_branch: (repo.default_branch as string) || 'main',
  }
}

export async function getRepos(): Promise<GitHubRepo[]> {
  if (!token) return []

  const res = await fetch(
    'https://api.github.com/user/repos?sort=pushed&per_page=100&affiliation=owner',
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 600 },
    },
  )

  if (!res.ok) return []

  const data = await res.json()

  return data
    .filter((repo: Record<string, unknown>) => !repo.fork && !repo.private)
    .map(mapRepo)
}

export async function getRepo(name: string): Promise<GitHubRepo | null> {
  if (!token) return null

  const username = await getUsername()
  if (!username) return null

  const res = await fetch(`https://api.github.com/repos/${username}/${name}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 600 },
  })

  if (!res.ok) return null

  const repo = await res.json()

  // 过滤 fork 和私有项目
  if (repo.fork || repo.private) return null

  return mapRepo(repo)
}

function resolveUrl(url: string, baseUrl: string): string {
  return url.startsWith('http') ? url : `${baseUrl}/${url.replace(/^\.\//, '')}`
}

function processReadmeContent(content: string, rawBaseUrl: string): string {
  return (
    content
      // 将 <a><picture>...</picture></a> 转换为两个 img（同时移除 a 标签避免 button 嵌套）
      .replace(/<a\s[^>]*>\s*<picture>([\s\S]*?)<\/picture>\s*<\/a>/gi, (_, inner) => {
        const darkMatch = inner.match(/srcset=["']([^"']+)["']/)
        const lightMatch = inner.match(/<img[\s\S]*?src=["']([^"']+)["']/)
        const altMatch = inner.match(/alt=["']([^"']*)["']/)
        if (!darkMatch || !lightMatch) return `<picture>${inner}</picture>`
        const dark = resolveUrl(darkMatch[1], rawBaseUrl)
        const light = resolveUrl(lightMatch[1], rawBaseUrl)
        const alt = altMatch?.[1] || ''
        return `<img class="block dark:hidden" alt="${alt}" src="${light}" />\n<img class="hidden dark:block" alt="${alt}" src="${dark}" />`
      })
      // 处理没有 a 标签包裹的 <picture>
      .replace(/<picture>([\s\S]*?)<\/picture>/gi, (_, inner) => {
        const darkMatch = inner.match(/srcset=["']([^"']+)["']/)
        const lightMatch = inner.match(/<img[\s\S]*?src=["']([^"']+)["']/)
        const altMatch = inner.match(/alt=["']([^"']*)["']/)
        if (!darkMatch || !lightMatch) return `<picture>${inner}</picture>`
        const dark = resolveUrl(darkMatch[1], rawBaseUrl)
        const light = resolveUrl(lightMatch[1], rawBaseUrl)
        const alt = altMatch?.[1] || ''
        return `<img class="block dark:hidden" alt="${alt}" src="${light}" />\n<img class="hidden dark:block" alt="${alt}" src="${dark}" />`
      })
      // 处理相对路径图片
      .replace(
        /(src=["'])(?!https?:\/\/)(\.\/)?([^"']+\.(png|jpg|jpeg|gif|svg|webp)["'])/gi,
        `$1${rawBaseUrl}/$3`,
      )
      .replace(
        /(\!\[.*?\]\()(?!https?:\/\/)(\.\/)?([^)]+\.(png|jpg|jpeg|gif|svg|webp)\))/gi,
        `$1${rawBaseUrl}/$3`,
      )
  )
}

export async function getRepoReadme(
  fullName: string,
  defaultBranch: string,
): Promise<string | null> {
  if (!token) return null

  const res = await fetch(`https://api.github.com/repos/${fullName}/readme`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.raw+json',
    },
    next: { revalidate: 600 },
  })

  if (!res.ok) return null

  const content = await res.text()
  const rawBaseUrl = `https://raw.githubusercontent.com/${fullName}/${defaultBranch}`

  return processReadmeContent(content, rawBaseUrl)
}
