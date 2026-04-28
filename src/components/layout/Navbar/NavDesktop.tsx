import { Button } from '@/components/ui'
import { NAV_LINKS } from '@/constants'
import { NavLink } from './NavLink'
import { NavLogo } from './NavLogo'

export function NavDesktop() {
  return (
    <div className="mx-auto hidden max-w-7xl items-center justify-between px-6 py-4 lg:flex">
      <NavLogo />
      <nav className="flex items-center gap-6" aria-label="Navigazione principale desktop">
        {NAV_LINKS.map((link) => <NavLink key={link.href} link={link} />)}
      </nav>
      <Button aria-label="Accedi al profilo">Accedi</Button>
    </div>
  )
}
