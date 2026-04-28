import { NavDesktop } from './NavDesktop'
import { NavMobile } from './NavMobile'
import { useScrolled } from '@/hooks'

export function Navbar() {
  const { isScrolled } = useScrolled()
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 shadow-lg backdrop-blur-md' : 'bg-primary shadow'}`}>
      <NavDesktop />
      <NavMobile />
    </header>
  )
}
