export function ProjectCardSkeleton() {
  return (
    <div className="border-border bg-card flex animate-pulse flex-col gap-3 rounded-xl border p-5">
      <div className="bg-muted mb-3 h-6 w-3/4 rounded" />
      <div className="bg-muted mb-2 h-4 w-full rounded" />
      <div className="bg-muted h-4 w-2/3 rounded" />
    </div>
  )
}
