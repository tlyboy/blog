import { setRequestLocale, getTranslations } from 'next-intl/server'
import { StreamdownRenderer } from '@/components/markdown/streamdown-renderer'

interface MdPageProps {
  params: Promise<{ locale: string }>
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

const supportedLanguages = new Set([
  'javascript',
  'js',
  'typescript',
  'ts',
  'jsx',
  'tsx',
  'json',
  'html',
  'css',
  'scss',
  'sass',
  'less',
  'markdown',
  'md',
  'yaml',
  'yml',
  'xml',
  'sql',
  'graphql',
  'regex',
  'bash',
  'sh',
  'shell',
  'zsh',
  'powershell',
  'python',
  'py',
  'ruby',
  'rb',
  'java',
  'kotlin',
  'scala',
  'go',
  'rust',
  'c',
  'cpp',
  'csharp',
  'cs',
  'php',
  'swift',
  'objective-c',
  'dart',
  'lua',
  'perl',
  'r',
  'julia',
  'elixir',
  'erlang',
  'haskell',
  'clojure',
  'lisp',
  'scheme',
  'ocaml',
  'fsharp',
  'vim',
  'dockerfile',
  'docker',
  'nginx',
  'apache',
  'toml',
  'ini',
  'properties',
  'diff',
  'git-commit',
  'git-rebase',
  'plaintext',
  'text',
  'txt',
  'vue',
  'svelte',
  'astro',
  'prisma',
  'proto',
  'terraform',
  'hcl',
  'mermaid',
  'math',
  'latex',
  'katex',
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
  const baseUrl = sourceUrl.substring(0, sourceUrl.lastIndexOf('/') + 1)

  return content.replace(
    /(!?\[[^\]]*\]\()([^)]+)(\))/g,
    (match, prefix, url, suffix) => {
      if (prefix.startsWith('!')) {
        if (
          url.startsWith('http://') ||
          url.startsWith('https://') ||
          url.startsWith('//')
        ) {
          return match
        }
        return `${prefix}${new URL(url, baseUrl).href}${suffix}`
      }

      if (url.startsWith('#')) {
        return match
      }

      if (
        url.startsWith('http://') ||
        url.startsWith('https://') ||
        url.startsWith('//')
      ) {
        if (url.endsWith('.md')) {
          return `${prefix}/md?url=${encodeURIComponent(url)}${suffix}`
        }
        return match
      }

      const absoluteUrl = new URL(url, baseUrl).href
      if (url.endsWith('.md')) {
        return `${prefix}/md?url=${encodeURIComponent(absoluteUrl)}${suffix}`
      }
      return `${prefix}${absoluteUrl}${suffix}`
    },
  )
}

export default async function MdPage({ params, searchParams }: MdPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('md')
  const { url } = await searchParams

  if (!url) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24">
        <p className="text-muted-foreground">{t('provideLink')}</p>
      </div>
    )
  }

  const rawContent = await fetchMarkdown(url)

  if (!rawContent) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24">
        <p className="text-muted-foreground">{t('fetchFailed')}</p>
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
