import type { ReactNode } from 'react'

interface CeliachiaCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function CeliachiaCard({ icon, title, description }: CeliachiaCardProps) {
  return (
    <article className="rounded-xl bg-accent/25 p-5">
      <div className="mb-3 text-green">{icon}</div>
      <h3 className="text-lg font-semibold text-textDark">{title}</h3>
      <p className="mt-2 text-sm text-textDark/80">{description}</p>
    </article>
  )
}
