import { useCountUp, useInView } from '@/hooks'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
}

export function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const count = useCountUp(value, 1200, inView)
  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-bold text-accent">{count}{suffix}</p>
      <p className="mt-2 text-sm text-textDark/60">{label}</p>
    </div>
  )
}
