import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { EditOnGitHub } from '@/components/edit-on-github'

export interface NavItem {
  title: string
  href: string
}

interface ContentFooterProps {
  editUrl: string
  locale: string
  lastUpdated?: string | null
  prev?: NavItem | null
  next?: NavItem | null
}

export async function ContentFooter({
  editUrl,
  locale,
  lastUpdated,
  prev,
  next,
}: ContentFooterProps) {
  const t = await getTranslations({ locale, namespace: 'common' })

  return (
    <>
      <div className="flex items-center justify-between text-sm">
        <EditOnGitHub url={editUrl} locale={locale} />
        {lastUpdated && (
          <span className="text-muted-foreground">
            {t('lastUpdated')}:{' '}
            <time dateTime={lastUpdated}>
              {new Date(lastUpdated).toLocaleDateString(
                locale === 'zh-cn' ? 'zh-CN' : 'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' },
              )}
            </time>
          </span>
        )}
      </div>

      {(prev || next) && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          <NavLink item={prev} direction="prev" label={t('prevPage')} />
          <NavLink item={next} direction="next" label={t('nextPage')} />
        </div>
      )}
    </>
  )
}

function NavLink({
  item,
  direction,
  label,
}: {
  item?: NavItem | null
  direction: 'prev' | 'next'
  label: string
}) {
  if (!item) return <div />

  return (
    <Link
      href={item.href}
      className={cn(
        'group flex flex-col gap-1 rounded-md border p-3 transition-colors',
        'hover:border-foreground/20',
        direction === 'next' && 'col-start-2 items-end text-right',
      )}
    >
      <span className="text-muted-foreground text-xs">{label}</span>
      <span className="text-primary flex items-center gap-1 text-sm font-medium">
        {direction === 'prev' && <ChevronLeft className="size-4 shrink-0" />}
        {item.title}
        {direction === 'next' && <ChevronRight className="size-4 shrink-0" />}
      </span>
    </Link>
  )
}
