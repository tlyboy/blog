import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export interface DocMeta {
  title?: string
  description?: string
  date?: string
  draft?: boolean
  [key: string]: unknown
}

export interface Doc {
  slug: string
  meta: DocMeta
  content: string
}

// 获取所有文档
export function getAllDocs(subDir: string): Doc[] {
  const docsDir = path.join(contentDir, subDir)

  if (!fs.existsSync(docsDir)) {
    return []
  }

  const files = getAllMdxFiles(docsDir)

  return files.map((filePath) => {
    const relativePath = path.relative(docsDir, filePath)
    const slug = relativePath.replace(/\.mdx?$/, '').replace(/\\/g, '/')
    const content = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(content)

    return {
      slug,
      meta: data,
      content,
    }
  })
}

// 递归获取所有 MDX 文件
function getAllMdxFiles(dir: string): string[] {
  const files: string[] = []

  if (!fs.existsSync(dir)) {
    return files
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getAllMdxFiles(fullPath))
    } else if (entry.name.match(/\.mdx?$/)) {
      files.push(fullPath)
    }
  }

  return files
}

// 从内容中提取第一个 h1 标题作为标题
function extractTitleFromContent(content: string): string | undefined {
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : undefined
}

// 根据 slug 获取单个文档
export function getDocBySlug(subDir: string, slug: string): Doc | null {
  const docsDir = path.join(contentDir, subDir)
  const mdxPath = path.join(docsDir, `${slug}.mdx`)
  const mdPath = path.join(docsDir, `${slug}.md`)

  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null

  if (!filePath) {
    return null
  }

  const content = fs.readFileSync(filePath, 'utf8')
  const { data, content: rawContent } = matter(content)

  // 如果没有 frontmatter 中的标题，从内容中提取
  const title = data.title || extractTitleFromContent(rawContent)

  return {
    slug,
    meta: { ...data, title },
    content,
  }
}

// 从文档内容提取目录
// ID 生成需要匹配 rehype-slug (github-slugger) 的行为
export function extractToc(content: string) {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm
  const toc: { level: number; text: string; id: string }[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    // 匹配 github-slugger 的行为：移除非字母数字和中文，空格转连字符
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fa5\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '')

    toc.push({ level, text, id })
  }

  return toc
}
