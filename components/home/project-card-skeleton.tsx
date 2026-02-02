export function ProjectCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-3 rounded-xl border border-border bg-card p-5">
      <div className="mb-3 h-6 w-3/4 rounded bg-muted" />
      <div className="mb-2 h-4 w-full rounded bg-muted" />
      <div className="h-4 w-2/3 rounded bg-muted" />
    </div>
  )
}
