import { FooterBrand } from './FooterBrand'
import { FooterContacts } from './FooterContacts'
import { FooterLinks } from './FooterLinks'

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3">
        <FooterBrand />
        <FooterLinks />
        <FooterContacts />
      </div>
      <p className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/40">
        © 2026 SpigaZero Inc. — All rights reserved
      </p>
    </footer>
  )
}
