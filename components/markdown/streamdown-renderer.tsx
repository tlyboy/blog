'use client'

import { useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { useTheme } from 'next-themes'

const emptySubscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

function useMounted() {
  return useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot)
}
import {
  Streamdown,
  type PluginConfig,
  type LinkSafetyModalProps,
} from 'streamdown'
import { createCodePlugin } from '@streamdown/code'
import { createMermaidPlugin } from '@streamdown/mermaid'
import { createMathPlugin } from '@streamdown/math'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { ExternalLink, X, Copy } from 'lucide-react'

const plugins: PluginConfig = {
  code: createCodePlugin({ themes: ['vitesse-light', 'vitesse-dark'] }),
  mermaid: createMermaidPlugin(),
  math: createMathPlugin(),
}

const rehypePlugins = [rehypeRaw, rehypeSlug]

function LinkSafetyModal({ url, isOpen, onClose, onConfirm }: LinkSafetyModalProps) {
  if (!isOpen || typeof document === 'undefined') return null

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
  }

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background border rounded-lg p-6 max-w-md w-full mx-4 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            <span className="text-lg font-semibold">打开外部链接？</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded">
            <X className="h-4 w-4" />
          </button>
        </div>
        <span className="text-muted-foreground mb-4 block">即将访问外部网站</span>
        <div className="bg-muted rounded p-3 mb-4 break-all text-sm">{url}</div>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border rounded hover:bg-muted"
          >
            <Copy className="h-4 w-4" />
            复制链接
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90"
          >
            <ExternalLink className="h-4 w-4" />
            打开链接
          </button>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

interface StreamdownRendererProps {
  content: string
  className?: string
}

export function StreamdownRenderer({ content, className }: StreamdownRendererProps) {
  const mounted = useMounted()
  const { resolvedTheme } = useTheme()
  const trimmedContent = content.trim().replace(/\n{3,}/g, '\n\n')
  // SSR 时使用 'default'，客户端 mounted 后才使用实际主题
  const mermaidTheme = mounted && resolvedTheme === 'dark' ? 'dark' : 'default'

  return (
    <div className={className}>
      <Streamdown
        key={mermaidTheme}
        plugins={plugins}
        mermaid={{ config: { theme: mermaidTheme } }}
        rehypePlugins={rehypePlugins}
        linkSafety={{
          enabled: true,
          renderModal: (props) => <LinkSafetyModal {...props} />,
        }}
      >
        {trimmedContent}
      </Streamdown>
    </div>
  )
}
