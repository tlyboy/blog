'use client'

import { Copy, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { useCopy } from '@/lib/use-copy'

interface CopyMarkdownButtonProps {
  content: string
}

export function CopyMarkdownButton({ content }: CopyMarkdownButtonProps) {
  const [copied, copy] = useCopy()
  const t = useTranslations('copy')

  return (
    <Button variant="outline" size="sm" onClick={() => copy(content)}>
      {copied ? (
        <Check className="mr-1.5 size-4" />
      ) : (
        <Copy className="mr-1.5 size-4" />
      )}
      {copied ? t('copied') : t('copyMarkdown')}
    </Button>
  )
}
