import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface SiteFooterProps {
  avatar?: string
  name?: string
}

export function SiteFooter({ avatar, name }: SiteFooterProps) {
  const t = useTranslations('footer')

  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            {avatar && (
              <Image src={avatar} alt="logo" width={24} height={24} className="size-6 rounded-full" />
            )}
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {name || 'Guany'}
            </span>
          </div>

          <div className="text-sm text-muted-foreground">
            {t('license')}
          </div>
        </div>
      </div>
    </footer>
  )
}
