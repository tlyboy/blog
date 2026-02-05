import { StreamdownRenderer } from '@/components/markdown/streamdown-renderer'

interface MdPageProps {
  searchParams: Promise<{ url?: string }>
}

async function fetchMarkdown(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) return null
    return res.text()
  } catch {
    return null
  }
}

// Shiki 支持的常见语言 + Streamdown 插件处理的语言
const supportedLanguages = new Set([
  'javascript', 'js', 'typescript', 'ts', 'jsx', 'tsx', 'json', 'html', 'css', 'scss', 'sass', 'less',
  'markdown', 'md', 'yaml', 'yml', 'xml', 'sql', 'graphql', 'regex', 'bash', 'sh', 'shell', 'zsh',
  'powershell', 'python', 'py', 'ruby', 'rb', 'java', 'kotlin', 'scala', 'go', 'rust', 'c', 'cpp',
  'csharp', 'cs', 'php', 'swift', 'objective-c', 'dart', 'lua', 'perl', 'r', 'julia', 'elixir',
  'erlang', 'haskell', 'clojure', 'lisp', 'scheme', 'ocaml', 'fsharp', 'vim', 'dockerfile', 'docker',
  'nginx', 'apache', 'toml', 'ini', 'properties', 'diff', 'git-commit', 'git-rebase', 'plaintext',
  'text', 'txt', 'vue', 'svelte', 'astro', 'prisma', 'proto', 'terraform', 'hcl',
  // Streamdown 插件
  'mermaid', 'math', 'latex', 'katex',
])

function normalizeCodeBlocks(content: string): string {
  return content.replace(/```(\w+)/g, (match, lang) => {
    if (supportedLanguages.has(lang.toLowerCase())) {
      return match
    }
    return '```text'
  })
}

function resolveRelativeUrls(content: string, sourceUrl: string): string {
  // 获取基础 URL（去掉文件名）
  const baseUrl = sourceUrl.substring(0, sourceUrl.lastIndexOf('/') + 1)

  // 匹配 markdown 链接和图片：[text](url) 或 ![alt](url)
  return content.replace(
    /(!?\[[^\]]*\]\()([^)]+)(\))/g,
    (match, prefix, url, suffix) => {
      // 图片链接（以 ! 开头）只转换为绝对路径
      if (prefix.startsWith('!')) {
        if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
          return match
        }
        return `${prefix}${new URL(url, baseUrl).href}${suffix}`
      }

      // 跳过锚点链接
      if (url.startsWith('#')) {
        return match
      }

      // 已经是绝对 URL
      if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
        // 如果是 .md 文件，通过 /md 页面打开
        if (url.endsWith('.md')) {
          return `${prefix}/md?url=${encodeURIComponent(url)}${suffix}`
        }
        return match
      }

      // 转换相对路径为绝对路径
      const absoluteUrl = new URL(url, baseUrl).href
      // 如果是 .md 文件，通过 /md 页面打开
      if (url.endsWith('.md')) {
        return `${prefix}/md?url=${encodeURIComponent(absoluteUrl)}${suffix}`
      }
      return `${prefix}${absoluteUrl}${suffix}`
    }
  )
}

export default async function MdPage({ searchParams }: MdPageProps) {
  const { url } = await searchParams

  if (!url) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24">
        <p className="text-muted-foreground">请提供 markdown 链接</p>
      </div>
    )
  }

  const rawContent = await fetchMarkdown(url)

  if (!rawContent) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24">
        <p className="text-muted-foreground">无法获取内容</p>
      </div>
    )
  }

  const content = normalizeCodeBlocks(resolveRelativeUrls(rawContent, url))

  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <StreamdownRenderer content={content} />
      </article>
    </div>
  )
}
