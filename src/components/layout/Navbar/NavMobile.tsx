import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Button } from '@/components/ui'
import { NAV_LINKS } from '@/constants'
import { NavLink } from './NavLink'
import { NavLogo } from './NavLogo'

export function NavMobile() {
  const [open, setOpen] = useState(false)
  return (
    <div className="px-4 py-3 lg:hidden">
      <div className="flex items-center justify-between"><NavLogo /><button aria-label="Apri menu" onClick={() => setOpen((v) => !v)}>{open ? <XMarkIcon className="h-7 w-7 text-white" /> : <Bars3Icon className="h-7 w-7 text-white" />}</button></div>
      {open ? (
        <>
          <button className="fixed inset-0 z-40 bg-black/50" onClick={() => setOpen(false)} aria-label="Chiudi menu" />
          <div className="fixed inset-y-0 left-0 z-50 w-72 space-y-4 bg-primary p-5 shadow-xl">
            <div className="flex justify-end"><button aria-label="Chiudi menu" onClick={() => setOpen(false)}><XMarkIcon className="h-7 w-7 text-white" /></button></div>
            {NAV_LINKS.map((link) => <NavLink key={link.href} link={link} onNavigate={() => setOpen(false)} />)}
            <Button className="w-full">Accedi</Button>
          </div>
        </>
      ) : null}
    </div>
  )
}
