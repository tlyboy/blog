'use client'

import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCopy } from '@/lib/use-copy'

interface CopyMarkdownButtonProps {
  content: string
}

export function CopyMarkdownButton({ content }: CopyMarkdownButtonProps) {
  const [copied, copy] = useCopy()

  return (
    <Button variant="outline" size="sm" onClick={() => copy(content)}>
      {copied ? <Check className="mr-1.5 size-4" /> : <Copy className="mr-1.5 size-4" />}
      {copied ? '已复制' : '复制 Markdown'}
    </Button>
  )
}
