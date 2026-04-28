import type { ReactNode } from 'react'
import { useInView } from '@/hooks'

type AnimationName = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: AnimationName
  delay?: number
}

export function AnimateOnScroll({ children, animation = 'fade-up', delay = 0 }: AnimateOnScrollProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={inView ? `animate-${animation}` : 'opacity-0'}
    >
      {children}
    </div>
  )
}
