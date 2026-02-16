'use client'

import { Copy, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { useCopy } from '@/lib/use-copy'

interface CopyCloneButtonProps {
  fullName: string
}

export function CopyCloneButton({ fullName }: CopyCloneButtonProps) {
  const [copied, copy] = useCopy()
  const t = useTranslations('projects')
  const cloneUrl = `https://github.com/${fullName}.git`

  return (
    <Button variant="outline" size="sm" onClick={() => copy(cloneUrl)}>
      {copied ? (
        <Check className="mr-1.5 size-4" />
      ) : (
        <Copy className="mr-1.5 size-4" />
      )}
      {copied ? t('copied') : t('copyCloneUrl')}
    </Button>
  )
}
