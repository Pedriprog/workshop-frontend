import type { NavLink as NavLinkType } from '@/types'

interface NavLinkProps {
  link: NavLinkType
  isActive?: boolean
  onNavigate?: () => void
}

export function NavLink({ link, isActive = false, onNavigate }: NavLinkProps) {
  return (
    <a
      href={link.href}
      onClick={onNavigate}
      className={`block py-1 font-medium transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent ${isActive ? 'text-accent' : 'text-textLight'}`}
    >
      {link.label}
    </a>
  )
}
