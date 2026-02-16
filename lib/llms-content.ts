import matter from 'gray-matter'
import { getDocBySlug } from '@/lib/mdx'
import { docsConfig } from '@/lib/docs-config'
import { getRepos, getRepoReadme } from '@/lib/github'

const i18n = {
  en: {
    blogTitle: "# Guany's Blog",
    fullDesc: '> Full text of all content below',
    shortDesc: '> Personal blog with projects, docs, and uses',
    docs: 'Docs',
    projects: 'Projects',
    uses: 'Uses',
    repo: 'Repo',
    homepage: 'Homepage',
    language: 'Language',
    usesLink: 'What I use',
    usesDesc: 'Hardware and tools I use daily',
  },
  'zh-cn': {
    blogTitle: '# Guany 的博客',
    fullDesc: '> 以下是所有内容的完整文本',
    shortDesc: '> 个人博客，包含项目、文档、使用等内容',
    docs: '文档',
    projects: '项目',
    uses: '使用',
    repo: '仓库',
    homepage: '主页',
    language: '语言',
    usesLink: '我在使用的东西',
    usesDesc: '日常使用的硬件设备清单',
  },
} as const

interface LlmsOptions {
  includeFullContent: boolean
  locale?: string
}

export async function buildLlmsContent({
  includeFullContent,
  locale = 'en',
}: LlmsOptions): Promise<string> {
  const t = locale === 'zh-cn' ? i18n['zh-cn'] : i18n.en
  const localePrefix = locale === 'zh-cn' ? '/zh-cn' : ''

  const lines: string[] = [
    t.blogTitle,
    '',
    includeFullContent ? t.fullDesc : t.shortDesc,
    '',
  ]

  // 文档部分
  lines.push(includeFullContent ? `# ${t.docs}` : `## ${t.docs}`, '')

  for (const group of docsConfig) {
    if (!includeFullContent) {
      lines.push(`### ${group.titleKey}`, '')
    }

    for (const item of group.items) {
      const doc = getDocBySlug(locale, 'docs', item.slug)
      if (!doc) continue

      if (includeFullContent) {
        const { content: rawContent } = matter(doc.content)
        lines.push(
          '---',
          '',
          `## ${doc.meta.title || item.titleKey}`,
          '',
          rawContent.trim(),
          '',
        )
      } else {
        const description = doc.meta.description || ''
        lines.push(
          `- [${item.titleKey}](${localePrefix}/docs/${item.slug})${description ? `: ${description}` : ''}`,
        )
      }
    }
    lines.push('')
  }

  // 项目部分
  const repos = await getRepos()
  if (repos.length > 0) {
    lines.push(includeFullContent ? `# ${t.projects}` : `## ${t.projects}`, '')

    for (const repo of repos) {
      if (includeFullContent) {
        lines.push('---', '', `## ${repo.name}`, '')
        if (repo.description) lines.push(`${repo.description}`, '')
        lines.push(`- ${t.repo}: ${repo.html_url}`)
        if (repo.homepage) lines.push(`- ${t.homepage}: ${repo.homepage}`)
        if (repo.language) lines.push(`- ${t.language}: ${repo.language}`)
        lines.push(`- Stars: ${repo.stargazers_count}`, '')

        const readme = await getRepoReadme(
          repo.full_name,
          repo.default_branch,
          locale,
        )
        if (readme) {
          lines.push('### README', '', readme.trim(), '')
        }
      } else {
        const description = repo.description || ''
        lines.push(
          `- [${repo.name}](${localePrefix}/projects/${repo.name})${description ? `: ${description}` : ''}`,
        )
      }
    }
    lines.push('')
  }

  // 使用部分
  const usesDoc = getDocBySlug(locale, 'pages', 'uses')
  if (usesDoc) {
    if (includeFullContent) {
      const { content: rawContent } = matter(usesDoc.content)
      lines.push(`# ${t.uses}`, '', '---', '', rawContent.trim(), '')
    } else {
      lines.push(
        `## ${t.uses}`,
        '',
        `- [${t.usesLink}](${localePrefix}/uses): ${usesDoc.meta.description || t.usesDesc}`,
      )
    }
  }

  return lines.join('\n')
}
