'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { useTheme } from 'next-themes'

const emptySubscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  )
}
import {
  Streamdown,
  type PluginConfig,
  type LinkSafetyModalProps,
} from 'streamdown'
import { createCodePlugin } from '@streamdown/code'
import { createMermaidPlugin } from '@streamdown/mermaid'
import { createMathPlugin } from '@streamdown/math'
import { createCjkPlugin } from '@streamdown/cjk'
import rehypeRaw from 'rehype-raw'
import { rehypeCustomSlug } from '@/lib/rehype-custom-slug'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import { useTranslations } from 'next-intl'
import { ExternalLink, X, Copy } from 'lucide-react'

const plugins: PluginConfig = {
  code: createCodePlugin({ themes: ['vitesse-light', 'vitesse-dark'] }),
  mermaid: createMermaidPlugin(),
  math: createMathPlugin(),
  cjk: createCjkPlugin(),
}

const rehypePlugins = [rehypeRaw, rehypeUnwrapImages, rehypeCustomSlug]

function LinkSafetyModal({
  url,
  isOpen,
  onClose,
  onConfirm,
}: LinkSafetyModalProps) {
  const t = useTranslations('linkSafety')
  if (!isOpen || typeof document === 'undefined') return null

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
  }

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background mx-4 w-full max-w-md rounded-lg border p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            <span className="text-lg font-semibold">{t('title')}</span>
          </div>
          <button onClick={onClose} className="hover:bg-muted rounded p-1">
            <X className="h-4 w-4" />
          </button>
        </div>
        <span className="text-muted-foreground mb-4 block">
          {t('description')}
        </span>
        <div className="bg-muted mb-4 rounded p-3 text-sm break-all">{url}</div>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="hover:bg-muted flex flex-1 items-center justify-center gap-2 rounded border px-4 py-2"
          >
            <Copy className="h-4 w-4" />
            {t('copyLink')}
          </button>
          <button
            onClick={onConfirm}
            className="bg-primary text-primary-foreground flex flex-1 items-center justify-center gap-2 rounded px-4 py-2 hover:opacity-90"
          >
            <ExternalLink className="h-4 w-4" />
            {t('openLink')}
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
  /** 渲染模式，默认 static，后续 AI 功能可传 streaming */
  mode?: 'streaming' | 'static'
  /** 渲染不可信内容时启用，使用 Streamdown 默认的安全 rehype 插件 */
  untrusted?: boolean
}

export function StreamdownRenderer({
  content,
  className,
  mode = 'static',
  untrusted = false,
}: StreamdownRendererProps) {
  const mounted = useMounted()
  const containerRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const trimmedContent = content.trim().replace(/\n{3,}/g, '\n\n')
  // SSR 时使用 'default'，客户端 mounted 后才使用实际主题
  const mermaidTheme = mounted && resolvedTheme === 'dark' ? 'dark' : 'default'

  // 根据 header 实际高度 + 标题 marginTop 动态设置 scroll-margin-top
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let hashHandled = false

    const applyScrollMargins = () => {
      const header = document.querySelector('header')
      const headerHeight = header?.offsetHeight ?? 64
      const headings = container.querySelectorAll<HTMLElement>(
        'h2[id], h3[id], h4[id], h5[id], h6[id]',
      )
      for (const h of headings) {
        if (h.style.scrollMarginTop) continue
        const marginTop = parseFloat(getComputedStyle(h).marginTop) || 0
        h.style.scrollMarginTop = `${headerHeight + marginTop}px`
      }
      // 补偿首次 hash 导航
      if (!hashHandled && headings.length > 0) {
        hashHandled = true
        const hash = decodeURIComponent(window.location.hash.slice(1))
        if (hash) {
          const target = document.getElementById(hash)
          if (target) target.scrollIntoView()
        }
      }
    }

    applyScrollMargins()
    // Streamdown 可能异步渲染或替换 DOM，持续监听
    const observer = new MutationObserver(applyScrollMargins)
    observer.observe(container, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [content])

  return (
    <div ref={containerRef} className={className}>
      <Streamdown
        mode={mode}
        key={mermaidTheme}
        plugins={plugins}
        mermaid={{ config: { theme: mermaidTheme } }}
        rehypePlugins={untrusted ? undefined : rehypePlugins}
        linkSafety={{
          enabled: true,
          onLinkCheck: (url) => {
            // 内部链接安全，不弹窗
            if (url.startsWith('/') || url.startsWith('#')) {
              return true
            }
            // 外部链接需要弹窗
            return false
          },
          renderModal: (props) => <LinkSafetyModal {...props} />,
        }}
      >
        {trimmedContent}
      </Streamdown>
    </div>
  )
}
