'use client'

import { useEffect, useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { useCopy } from '@/lib/use-copy'
import { Button } from '@/components/ui/button'

interface TocItem {
  level: number
  text: string
  id: string
}

interface DocsTocProps {
  toc: TocItem[]
  rawContent?: string
}

// 获取元素的绝对顶部位置（参考 VitePress 实现）
function getAbsoluteTop(element: HTMLElement): number {
  let offsetTop = 0
  let el: HTMLElement | null = element
  while (el && el !== document.body) {
    offsetTop += el.offsetTop
    el = el.offsetParent as HTMLElement | null
  }
  return offsetTop
}

export function DocsToc({ toc, rawContent }: DocsTocProps) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id || '')
  const [copied, copy] = useCopy()
  const t = useTranslations('docs')
  const tCopy = useTranslations('copy')

  useEffect(() => {
    // 标记是否刚点击了 TOC 链接
    let justClicked = false

    const handleScroll = () => {
      // 如果刚点击了链接，跳过这次滚动检测
      if (justClicked) {
        justClicked = false
        return
      }

      const headings = Array.from(
        document.querySelectorAll(
          'article h2[id], article h3[id], article h4[id]',
        ),
      ) as HTMLElement[]

      if (headings.length === 0) return

      const scrollY = window.scrollY
      const innerHeight = window.innerHeight
      const scrollHeight = document.documentElement.scrollHeight
      // 只有页面可滚动且滚动到底部时才高亮最后一个
      const canScroll = scrollHeight > innerHeight
      const isBottom = canScroll && scrollY + innerHeight >= scrollHeight - 10

      // 页面底部时高亮最后一个
      if (isBottom) {
        setActiveId(headings[headings.length - 1].id)
        return
      }

      // 找到当前滚动位置对应的标题
      const scrollOffset = 100
      let activeId = headings[0].id

      for (const heading of headings) {
        const top = getAbsoluteTop(heading)
        if (top > scrollY + scrollOffset + 4) {
          break
        }
        activeId = heading.id
      }

      setActiveId(activeId)
    }

    // hash 变化时（点击 TOC 链接）立即更新高亮
    const handleHashChange = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1))
      if (hash && toc.some((item) => item.id === hash)) {
        justClicked = true
        setActiveId(hash)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [toc])

  if (toc.length === 0 && !rawContent) {
    return null
  }

  return (
    <aside className="fixed top-24 right-4 hidden max-h-[calc(100vh-6rem)] w-56 overflow-y-auto xl:block 2xl:right-[calc((100vw-80rem)/2+1rem)]">
      {rawContent && (
        <div className="mb-4">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-full gap-2 text-xs"
            onClick={() => rawContent && copy(rawContent)}
          >
            {copied ? (
              <Check className="size-3.5" />
            ) : (
              <Copy className="size-3.5" />
            )}
            {copied ? tCopy('copied') : tCopy('copyMarkdown')}
          </Button>
        </div>
      )}
      {toc.length > 0 && (
        <>
          <h4 className="mb-3 font-semibold">{t('pageNav')}</h4>
          <nav>
            <ul className="space-y-2 text-sm">
              {toc.map((item, index) => (
                <li
                  key={`${item.id}-${index}`}
                  style={{ paddingLeft: `${(item.level - 2) * 0.75}rem` }}
                >
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      'block py-1 transition-colors',
                      activeId === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </aside>
  )
}
