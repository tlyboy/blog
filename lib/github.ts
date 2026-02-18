import type { GitHubRepo, GitHubUser } from '@/types/github'

const token = process.env.GITHUB_TOKEN

export async function getUser(): Promise<GitHubUser | null> {
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
      next: { revalidate: 1800 },
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
    next: { revalidate: 1800 },
  })

  if (!res.ok) return null

  const repo = await res.json()

  // 过滤 fork 和私有项目
  if (repo.fork || repo.private) return null

  return mapRepo(repo)
}

// 可在 GitHub blob 页面查看的文件类型
const VIEWABLE_EXTENSIONS = new Set([
  'md',
  'txt',
  'rst',
  'js',
  'ts',
  'jsx',
  'tsx',
  'py',
  'go',
  'rs',
  'java',
  'c',
  'cpp',
  'h',
  'hpp',
  'css',
  'html',
  'vue',
  'svelte',
  'json',
  'yaml',
  'yml',
  'toml',
  'xml',
  'sh',
  'bash',
  'zsh',
  'fish',
  'rb',
  'php',
  'swift',
  'kt',
  'scala',
  'clj',
  'ex',
  'exs',
  'erl',
  'hs',
  'ml',
  'r',
  'sql',
  'graphql',
])

// 判断是否为相对路径
function isRelativePath(url: string): boolean {
  return !/^(https?:\/\/|#|mailto:|tel:|data:)/i.test(url)
}

// 获取文件扩展名
function getExtension(path: string): string {
  const match = path.match(/\.([^./?#]+)(?:[?#]|$)/)
  return match ? match[1].toLowerCase() : ''
}

// 生成 raw URL（用于嵌入资源）
function getRawUrl(fullName: string, branch: string, path: string): string {
  const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '')
  return `https://raw.githubusercontent.com/${fullName}/${branch}/${cleanPath}`
}

// 生成 blob URL（用于可查看文件的链接）
function getBlobUrl(fullName: string, branch: string, path: string): string {
  const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '')
  return `https://github.com/${fullName}/blob/${branch}/${cleanPath}`
}

// 解析相对路径为完整 URL
function resolveUrl(
  url: string,
  fullName: string,
  branch: string,
  forEmbed: boolean,
): string {
  if (!isRelativePath(url)) return url

  if (forEmbed) {
    // 嵌入资源始终使用 raw URL
    return getRawUrl(fullName, branch, url)
  }

  // 链接：可查看文件用 blob URL，其他用 raw URL
  const ext = getExtension(url)
  if (VIEWABLE_EXTENSIONS.has(ext)) {
    return getBlobUrl(fullName, branch, url)
  }
  return getRawUrl(fullName, branch, url)
}

function processReadmeContent(
  content: string,
  fullName: string,
  branch: string,
): string {
  // 处理 <picture> 标签（dark/light 模式图片）
  const result = content
    .replace(
      /<a\s[^>]*>\s*<picture>([\s\S]*?)<\/picture>\s*<\/a>/gi,
      (_, inner) => {
        const darkMatch = inner.match(/srcset=["']([^"']+)["']/)
        const lightMatch = inner.match(/<img[\s\S]*?src=["']([^"']+)["']/)
        const altMatch = inner.match(/alt=["']([^"']*)["']/)
        if (!darkMatch || !lightMatch) return `<picture>${inner}</picture>`
        const dark = resolveUrl(darkMatch[1], fullName, branch, true)
        const light = resolveUrl(lightMatch[1], fullName, branch, true)
        const alt = altMatch?.[1] || ''
        return `<img class="block dark:hidden" alt="${alt}" src="${light}" />\n<img class="hidden dark:block" alt="${alt}" src="${dark}" />`
      },
    )
    .replace(/<picture>([\s\S]*?)<\/picture>/gi, (_, inner) => {
      const darkMatch = inner.match(/srcset=["']([^"']+)["']/)
      const lightMatch = inner.match(/<img[\s\S]*?src=["']([^"']+)["']/)
      const altMatch = inner.match(/alt=["']([^"']*)["']/)
      if (!darkMatch || !lightMatch) return `<picture>${inner}</picture>`
      const dark = resolveUrl(darkMatch[1], fullName, branch, true)
      const light = resolveUrl(lightMatch[1], fullName, branch, true)
      const alt = altMatch?.[1] || ''
      return `<img class="block dark:hidden" alt="${alt}" src="${light}" />\n<img class="hidden dark:block" alt="${alt}" src="${dark}" />`
    })

  // 统一处理：代码块原样返回，其他内容替换相对路径
  return result.replace(
    /(```[\s\S]*?```|`[^`]+`)|(src=["'])([^"']+)(["'])|(href=["'])([^"']+)(["'])|(\!\[[^\]]*\]\()([^)]+)(\))|(?<!\!)(\[[^\]]*\]\()([^)]+)(\))/g,
    (
      match,
      code,
      srcPre,
      srcUrl,
      srcSuf,
      hrefPre,
      hrefUrl,
      hrefSuf,
      imgPre,
      imgUrl,
      imgSuf,
      linkPre,
      linkUrl,
      linkSuf,
    ) => {
      if (code) return code // 代码块原样返回
      if (srcUrl && isRelativePath(srcUrl))
        return `${srcPre}${getRawUrl(fullName, branch, srcUrl)}${srcSuf}`
      if (hrefUrl && isRelativePath(hrefUrl))
        return `${hrefPre}${resolveUrl(hrefUrl, fullName, branch, false)}${hrefSuf}`
      if (imgUrl && isRelativePath(imgUrl))
        return `${imgPre}${getRawUrl(fullName, branch, imgUrl)}${imgSuf}`
      if (linkUrl && isRelativePath(linkUrl))
        return `${linkPre}${resolveUrl(linkUrl, fullName, branch, false)}${linkSuf}`
      return match
    },
  )
}

async function fetchReadmeByName(
  fullName: string,
  filename: string,
): Promise<string | null> {
  if (!token) return null
  const res = await fetch(
    `https://api.github.com/repos/${fullName}/contents/${filename}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.raw+json',
      },
      next: { revalidate: 3600 },
    },
  )
  if (!res.ok) return null
  return res.text()
}

export async function getRepoReadme(
  fullName: string,
  defaultBranch: string,
  locale?: string,
): Promise<string | null> {
  if (!token) return null

  // 非默认 locale 优先获取对应语言的 README
  // Intl.Locale 自动标准化大小写: zh-cn → zh-CN
  if (locale && locale !== 'en') {
    const readmeLocale = new Intl.Locale(locale).toString()
    const localizedContent = await fetchReadmeByName(
      fullName,
      `README.${readmeLocale}.md`,
    )
    if (localizedContent) {
      return processReadmeContent(localizedContent, fullName, defaultBranch)
    }
  }

  // 回退到默认 README
  const res = await fetch(`https://api.github.com/repos/${fullName}/readme`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.raw+json',
    },
    next: { revalidate: 3600 },
  })
  if (!res.ok) return null
  const content = await res.text()
  return processReadmeContent(content, fullName, defaultBranch)
}
