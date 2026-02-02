import { getDocBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import matter from 'gray-matter'
import { StreamdownRenderer } from '@/components/markdown/streamdown-renderer'
import { CopyMarkdownButton } from '@/components/copy-markdown-button'

export const metadata = {
  title: '使用',
  description: '我日常使用的硬件设备清单',
}

export default async function UsesPage() {
  const doc = getDocBySlug('pages', 'uses')

  if (!doc) {
    notFound()
  }

  const { content: rawContent } = matter(doc.content)

  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      <div className="mb-8 flex items-center justify-end">
        <CopyMarkdownButton content={rawContent} />
      </div>
      <article className="prose prose-neutral dark:prose-invert mx-auto">
        <StreamdownRenderer content={rawContent} />
      </article>
    </div>
  )
}
