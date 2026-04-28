interface SectionHeaderProps {
  title: string
  subtitle?: string
  ctaLabel?: string
  onCtaClick?: () => void
}

export function SectionHeader({ title, subtitle, ctaLabel, onCtaClick }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-semibold text-textDark">{title}</h2>
        {subtitle ? <p className="mt-2 text-textDark/75">{subtitle}</p> : null}
      </div>
      {ctaLabel ? (
        <button
          onClick={onCtaClick}
          className="font-semibold text-primary hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
        >
          {ctaLabel}
        </button>
      ) : null}
    </div>
  )
}
