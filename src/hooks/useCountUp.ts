import { useEffect, useState } from 'react'

export function useCountUp(target: number, duration: number, enabled: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!enabled) return
    let frame = 0
    const start = performance.now()
    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [duration, enabled, target])
  return value
}
