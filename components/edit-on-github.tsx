import { SquarePen } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

interface EditOnGitHubProps {
  url: string
  locale: string
}

export async function EditOnGitHub({ url, locale }: EditOnGitHubProps) {
  const t = await getTranslations({ locale, namespace: 'common' })

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
    >
      <SquarePen className="size-3.5" />
      {t('editOnGitHub')}
    </a>
  )
}
