import type { ReactNode } from 'react'

interface CeliachiaInfoCardProps {
  icon: ReactNode
  title: string
  body: string
  className?: string
}

export function CeliachiaInfoCard({ icon, title, body, className }: CeliachiaInfoCardProps) {
  return (
    <article className={`rounded-xl border border-border bg-white p-5 transition-shadow duration-200 hover:shadow-md ${className ?? ''}`}>
      <div className="inline-flex rounded-full bg-accent/25 p-2 text-primary">{icon}</div>
      <h3 className="mt-2 text-lg font-semibold text-textDark">{title}</h3>
      <p className="mt-2 text-sm text-textDark/80">{body}</p>
    </article>
  )
}