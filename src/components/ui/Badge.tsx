interface BadgeProps {
  label: string
  variant?: 'green' | 'accent'
}

export function Badge({ label, variant = 'green' }: BadgeProps) {
  const color = variant === 'green' ? 'bg-green/15 text-green' : 'bg-accent/20 text-textDark'
  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${color}`}>{label}</span>
}
