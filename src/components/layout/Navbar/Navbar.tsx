import { NavDesktop } from './NavDesktop'
import { NavMobile } from './NavMobile'
import { useScrolled } from '@/hooks'

export function Navbar() {
  const { isScrolled } = useScrolled()
  return (
    <header className={`sticky top-0 z-50 bg-primary transition-all duration-300 ${isScrolled ? 'shadow lg:bg-primary/95 lg:shadow-lg lg:backdrop-blur-md' : 'shadow'}`}>
      <NavDesktop />
      <NavMobile />
    </header>
  )
}
