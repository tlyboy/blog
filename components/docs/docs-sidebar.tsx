'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { docsConfig } from '@/lib/docs-config'

export function DocsSidebar() {
  const pathname = usePathname()
  const t = useTranslations('docs')

  return (
    <aside className="fixed top-24 hidden max-h-[calc(100vh-6rem)] w-64 overflow-y-auto lg:left-4 lg:block xl:left-[calc((100vw-80rem)/2+1rem)]">
      <nav className="space-y-6">
        {docsConfig.map((group) => (
          <div key={`sidebar-group-${group.titleKey}`}>
            <h4 className="mb-2 font-semibold">{t(group.titleKey)}</h4>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const href = `/docs/${item.slug}`
                const isActive = pathname === href

                return (
                  <li key={`sidebar-${item.slug}`}>
                    <Link
                      href={href}
                      className={cn(
                        'block rounded-md px-3 py-2 text-sm transition-colors',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                      )}
                    >
                      {t.has(item.titleKey) ? t(item.titleKey) : item.titleKey}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
