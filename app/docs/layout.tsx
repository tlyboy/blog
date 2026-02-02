import { DocsSidebar } from '@/components/docs/docs-sidebar'
import { MobileNav } from '@/components/docs/mobile-nav'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-20">
      <div className="flex items-center justify-between border-b border-border py-4 lg:hidden">
        <h1 className="font-semibold">文档</h1>
        <MobileNav />
      </div>
      <DocsSidebar />
      <div className="py-8 lg:ml-72">{children}</div>
    </div>
  )
}
