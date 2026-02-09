import { visit } from 'unist-util-visit'
import type { Root, Element } from 'hast'

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// 解析 {#custom-id} 语法，返回 [显示文本, 自定义ID | null]
export const customIdRegex = /\s*\{#([^}]+)\}\s*$/

function getTextContent(node: Element): string {
  let text = ''
  visit(node, 'text', (textNode: { value: string }) => {
    text += textNode.value
  })
  return text.trim()
}

// 从节点中移除 {#id} 文本
function removeCustomIdText(node: Element) {
  visit(node, 'text', (textNode: { value: string }) => {
    textNode.value = textNode.value.replace(customIdRegex, '')
  })
}

export function rehypeCustomSlug() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      const match = node.tagName.match(/^h([2-6])$/)
      if (!match) return

      const text = getTextContent(node)

      // 检查是否有自定义 ID
      const customMatch = text.match(customIdRegex)
      let id: string
      if (customMatch) {
        id = customMatch[1]
        removeCustomIdText(node)
      } else {
        id = slugify(text)
      }

      node.properties = node.properties || {}
      node.properties.id = id
    })
  }
}
