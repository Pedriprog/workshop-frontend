import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui'
import { NAV_LINKS } from '@/constants'
import { NavLink } from './NavLink'
import { NavLogo } from './NavLogo'

export function NavMobile() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previousOverflowX = document.body.style.overflowX
    document.body.style.overflowX = 'hidden'
    const onScroll = () => {
      setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.body.style.overflowX = previousOverflowX
    }
  }, [open])

  return (
    <div className="px-4 py-3 lg:hidden">
      <div className="flex items-center justify-between"><NavLogo /><button aria-label="Apri menu" onClick={() => setOpen((v) => !v)} className="text-white">{open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}</button></div>
      {open
        ? createPortal(
            <>
              <button className="fixed inset-0 z-2147483646 bg-black/50" onClick={() => setOpen(false)} aria-label="Chiudi menu" />
              <div className="fixed inset-y-0 left-0 z-2147483647 w-72 bg-primary p-5 text-white shadow-xl">
                <div className="flex justify-end"><button aria-label="Chiudi menu" onClick={() => setOpen(false)} className="text-white"><XMarkIcon className="h-7 w-7" /></button></div>
                <nav className="mt-3 flex flex-col items-start gap-3" aria-label="Navigazione mobile">
                  {NAV_LINKS.map((link) => <NavLink key={link.href} link={link} onNavigate={() => setOpen(false)} />)}
                </nav>
                <Button className="mt-6 w-full">Accedi</Button>
              </div>
            </>,
            document.body,
          )
        : null}
    </div>
  )
}
