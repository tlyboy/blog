import { visit } from 'unist-util-visit'
import type { Root, Element } from 'hast'

export function rehypeExternalLinkProxy() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'a') return
      const href = node.properties?.href
      if (typeof href !== 'string') return

      try {
        const parsed = new URL(href)
        if (['http:', 'https:'].includes(parsed.protocol)) {
          node.properties.href = `/api/to?url=${encodeURIComponent(href)}`
          node.properties.target = '_blank'
          node.properties.rel = 'noopener noreferrer'
        }
      } catch {
        // Not an absolute URL, leave as is
      }
    })
  }
}
