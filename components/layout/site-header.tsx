'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ModeToggle } from '@/components/mode-toggle'
import { LocaleSwitcher } from '@/components/locale-switcher'
import { Button } from '@/components/ui/button'
import { Github, Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface SiteHeaderProps {
  avatar?: string
  name?: string
}

export function SiteHeader({ avatar, name }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 h-16 px-5 backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border bg-background/85 shadow-md'
          : 'bg-background/85'
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          {avatar && (
            <Image
              className="size-9 rounded-full ring-2 ring-border transition-all group-hover:ring-primary"
              src={avatar}
              alt="avatar"
              width={36}
              height={36}
            />
          )}
          <span className="font-semibold">{t('metadata.blogTitle', { name: name || 'Guany' })}</span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/projects"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            {t('nav.projects')}
          </Link>
          <Link
            href="/docs"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            {t('nav.docs')}
          </Link>
          <Link
            href="/uses"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            {t('nav.uses')}
          </Link>

          <div className="flex items-center gap-1">
            {/* 移动端菜单 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8 sm:hidden">
                  <Menu className="size-4.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/projects">{t('nav.projects')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/docs">{t('nav.docs')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/uses">{t('nav.uses')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="size-8" asChild>
              <a
                href="https://github.com/tlyboy"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github className="size-4.5" />
              </a>
            </Button>
            <LocaleSwitcher />
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
