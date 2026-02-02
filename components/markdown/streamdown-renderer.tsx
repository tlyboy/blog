'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Streamdown, type PluginConfig } from 'streamdown'
import { createCodePlugin } from '@streamdown/code'
import { createMermaidPlugin } from '@streamdown/mermaid'
import { createMathPlugin } from '@streamdown/math'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'

const plugins: PluginConfig = {
  code: createCodePlugin({ themes: ['vitesse-light', 'vitesse-dark'] }),
  mermaid: createMermaidPlugin(),
  math: createMathPlugin(),
}

const rehypePlugins = [rehypeRaw, rehypeSlug]

interface StreamdownRendererProps {
  content: string
  className?: string
}

export function StreamdownRenderer({ content, className }: StreamdownRendererProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const trimmedContent = content.trim().replace(/\n{3,}/g, '\n\n')
  // SSR 时使用 'default'，客户端 mounted 后才使用实际主题
  const mermaidTheme = mounted && resolvedTheme === 'dark' ? 'dark' : 'default'

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={className}>
      <Streamdown
        key={mermaidTheme}
        plugins={plugins}
        mermaid={{ config: { theme: mermaidTheme } }}
        rehypePlugins={rehypePlugins}
      >
        {trimmedContent}
      </Streamdown>
    </div>
  )
}
