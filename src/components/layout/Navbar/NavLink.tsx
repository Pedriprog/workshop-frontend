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
      className={`relative inline-block py-1 font-medium transition hover:text-accent focus-visible:ring-2 focus-visible:ring-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-accent after:w-full' : 'text-textLight'}`}
    >
      {link.label}
    </a>
  )
}
