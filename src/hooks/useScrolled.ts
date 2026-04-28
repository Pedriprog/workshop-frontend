import { useEffect, useState } from 'react'

export function useScrolled(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return { isScrolled }
}
