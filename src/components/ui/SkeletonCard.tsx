export function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-border bg-white">
      <div className="aspect-video bg-border/70" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-2/3 rounded bg-border/80" />
        <div className="h-3 w-1/2 rounded bg-border/70" />
        <div className="h-3 w-1/3 rounded bg-border/70" />
      </div>
    </div>
  )
}
