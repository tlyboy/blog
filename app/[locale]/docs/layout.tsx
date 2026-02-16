import { setRequestLocale } from 'next-intl/server'
import { DocsSidebar } from '@/components/docs/docs-sidebar'
import { MobileNav } from '@/components/docs/mobile-nav'

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="mx-auto max-w-7xl px-4 pt-20">
      <div className="border-border flex items-center justify-between border-b py-4 lg:hidden">
        <DocsTitle />
        <MobileNav />
      </div>
      <DocsSidebar />
      <div className="py-8 lg:ml-72">{children}</div>
    </div>
  )
}

async function DocsTitle() {
  const { getTranslations } = await import('next-intl/server')
  const t = await getTranslations('docs')
  return <h1 className="font-semibold">{t('title')}</h1>
}
