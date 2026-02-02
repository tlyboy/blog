import matter from 'gray-matter'
import { getDocBySlug } from '@/lib/mdx'
import { docsConfig } from '@/lib/docs-config'
import { getRepos, getRepoReadme } from '@/lib/github'

interface LlmsOptions {
  includeFullContent: boolean
}

export async function buildLlmsContent({ includeFullContent }: LlmsOptions): Promise<string> {
  const lines: string[] = [
    '# Guany 的博客',
    '',
    includeFullContent
      ? '> 以下是所有内容的完整文本'
      : '> 个人博客，包含项目、文档、使用等内容',
    '',
  ]

  // 文档部分
  lines.push(includeFullContent ? '# 文档' : '## 文档', '')

  for (const group of docsConfig) {
    if (!includeFullContent) {
      lines.push(`### ${group.title}`, '')
    }

    for (const item of group.items) {
      const doc = getDocBySlug('docs', item.slug)
      if (!doc) continue

      if (includeFullContent) {
        const { content: rawContent } = matter(doc.content)
        lines.push('---', '', `## ${doc.meta.title || item.title}`, '', rawContent.trim(), '')
      } else {
        const description = doc.meta.description || ''
        lines.push(`- [${item.title}](/docs/${item.slug})${description ? `: ${description}` : ''}`)
      }
    }
    lines.push('')
  }

  // 项目部分
  const repos = await getRepos()
  if (repos.length > 0) {
    lines.push(includeFullContent ? '# 项目' : '## 项目', '')

    for (const repo of repos) {
      if (includeFullContent) {
        lines.push('---', '', `## ${repo.name}`, '')
        if (repo.description) lines.push(`${repo.description}`, '')
        lines.push(`- 仓库: ${repo.html_url}`)
        if (repo.homepage) lines.push(`- 主页: ${repo.homepage}`)
        if (repo.language) lines.push(`- 语言: ${repo.language}`)
        lines.push(`- Stars: ${repo.stargazers_count}`, '')

        const readme = await getRepoReadme(repo.full_name, repo.default_branch)
        if (readme) {
          lines.push('### README', '', readme.trim(), '')
        }
      } else {
        const description = repo.description || ''
        lines.push(`- [${repo.name}](/projects/${repo.name})${description ? `: ${description}` : ''}`)
      }
    }
    lines.push('')
  }

  // 使用部分
  const usesDoc = getDocBySlug('pages', 'uses')
  if (usesDoc) {
    if (includeFullContent) {
      const { content: rawContent } = matter(usesDoc.content)
      lines.push('# 使用', '', '---', '', rawContent.trim(), '')
    } else {
      lines.push('## 使用', '', `- [我在使用的东西](/uses): ${usesDoc.meta.description || '日常使用的硬件设备清单'}`)
    }
  }

  return lines.join('\n')
}
