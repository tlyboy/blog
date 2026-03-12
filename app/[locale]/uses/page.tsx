import { setRequestLocale, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import matter from 'gray-matter'
import { getDocBySlug } from '@/lib/mdx'
import { StreamdownRenderer } from '@/components/markdown/streamdown-renderer'
import { CopyMarkdownButton } from '@/components/copy-markdown-button'
import { ContentFooter } from '@/components/content-footer'
import { getDocLastUpdated } from '@/lib/mdx'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'uses' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function UsesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const doc = getDocBySlug(locale, 'pages', 'uses')

  if (!doc) {
    notFound()
  }

  const { content: rawContent } = matter(doc.content)

  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      <div className="mb-8 flex items-center justify-end">
        <CopyMarkdownButton content={rawContent} />
      </div>
      <article className="mx-auto">
        <StreamdownRenderer content={rawContent} />
      </article>
      <div className="mt-16 border-t pt-6">
        <ContentFooter
          editUrl={`https://github.com/tlyboy/blog/edit/main/content/${locale}/pages/uses.md`}
          locale={locale}
          lastUpdated={getDocLastUpdated(locale, 'uses', 'pages')}
        />
      </div>
    </div>
  )
}
