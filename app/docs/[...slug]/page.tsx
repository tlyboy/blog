import { notFound } from 'next/navigation'
import matter from 'gray-matter'
import { getDocBySlug, getAllDocs, extractToc } from '@/lib/mdx'
import { DocsToc } from '@/components/docs/docs-toc'
import { StreamdownRenderer } from '@/components/markdown/streamdown-renderer'

interface DocsPageProps {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  const docs = getAllDocs('docs')
  return docs.map((doc) => ({
    slug: doc.slug.split('/'),
  }))
}

export async function generateMetadata({ params }: DocsPageProps) {
  const { slug } = await params
  const slugPath = slug.join('/')
  const doc = getDocBySlug('docs', slugPath)

  if (!doc) {
    return { title: '文档未找到' }
  }

  return {
    title: doc.meta.title || slugPath,
    description: doc.meta.description,
  }
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params
  const slugPath = slug.join('/')
  const doc = getDocBySlug('docs', slugPath)

  if (!doc) {
    notFound()
  }

  // 提取纯内容（去除 frontmatter）
  const { content: rawContent } = matter(doc.content)
  const toc = extractToc(doc.content)

  return (
    <>
      <article className="prose prose-neutral dark:prose-invert min-w-0 max-w-none xl:mr-64">
        <StreamdownRenderer content={rawContent} />
      </article>
      <DocsToc toc={toc} rawContent={rawContent} />
    </>
  )
}
