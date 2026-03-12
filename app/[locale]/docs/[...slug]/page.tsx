import { notFound } from 'next/navigation'
import matter from 'gray-matter'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getDocBySlug, getAllDocs, extractToc } from '@/lib/mdx'
import { DocsToc } from '@/components/docs/docs-toc'
import { DocsFooter } from '@/components/docs/docs-footer'
import { StreamdownRenderer } from '@/components/markdown/streamdown-renderer'

interface DocsPageProps {
  params: Promise<{ locale: string; slug: string[] }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const docs = getAllDocs('en', 'docs')
  return docs.map((doc) => ({
    slug: doc.slug.split('/'),
  }))
}

export async function generateMetadata({ params }: DocsPageProps) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'docs' })
  const slugPath = slug.join('/')
  const doc = getDocBySlug(locale, 'docs', slugPath)

  if (!doc) {
    return { title: t('notFound') }
  }

  return {
    title: doc.meta.title || slugPath,
    description: doc.meta.description,
  }
}

export default async function DocsSlugPage({ params }: DocsPageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const slugPath = slug.join('/')
  const doc = getDocBySlug(locale, 'docs', slugPath)

  if (!doc) {
    notFound()
  }

  const { content: rawContent } = matter(doc.content)
  const toc = extractToc(doc.content)

  return (
    <>
      <article className="max-w-none min-w-0 xl:mr-64">
        <StreamdownRenderer content={rawContent} />
      </article>
      <DocsFooter slug={slugPath} locale={locale} />
      <DocsToc toc={toc} rawContent={rawContent} />
    </>
  )
}
