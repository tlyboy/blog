import { getTranslations } from 'next-intl/server'
import { ContentFooter } from '@/components/content-footer'
import { getDocNavigation } from '@/lib/docs-config'
import { getDocLastUpdated } from '@/lib/mdx'

interface DocsFooterProps {
  slug: string
  locale: string
}

export async function DocsFooter({ slug, locale }: DocsFooterProps) {
  const t = await getTranslations({ locale, namespace: 'docs' })
  const { prev, next } = getDocNavigation(slug)
  const lastUpdated = getDocLastUpdated(locale, slug)
  const editUrl = `https://github.com/tlyboy/blog/edit/main/content/${locale}/docs/${slug}.md`

  return (
    <footer className="mt-16 border-t pt-6 xl:mr-64">
      <ContentFooter
        editUrl={editUrl}
        locale={locale}
        lastUpdated={lastUpdated}
        prev={
          prev
            ? {
                title: t.has(prev.titleKey) ? t(prev.titleKey) : prev.titleKey,
                href: `/docs/${prev.slug}`,
              }
            : null
        }
        next={
          next
            ? {
                title: t.has(next.titleKey) ? t(next.titleKey) : next.titleKey,
                href: `/docs/${next.slug}`,
              }
            : null
        }
      />
    </footer>
  )
}
