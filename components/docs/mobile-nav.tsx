'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { docsConfig } from '@/lib/docs-config'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('docs')

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="size-9"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {isOpen && (
        <div className="border-border bg-background fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] overflow-y-auto border-t p-4">
          <nav className="space-y-6">
            {docsConfig.map((group) => (
              <div key={`mobile-group-${group.titleKey}`}>
                <h4 className="mb-2 font-semibold">{t(group.titleKey)}</h4>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const href = `/docs/${item.slug}`
                    const isActive = pathname === href

                    return (
                      <li key={`mobile-${item.slug}`}>
                        <Link
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'block rounded-md px-3 py-2 text-sm transition-colors',
                            isActive
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                          )}
                        >
                          {t.has(item.titleKey)
                            ? t(item.titleKey)
                            : item.titleKey}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
