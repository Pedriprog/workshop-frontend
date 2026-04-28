import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      aria-label="Torna in alto"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-accent p-3 text-textDark shadow-lg transition-transform hover:scale-110"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  )
}
