const links = [
  { label: 'AIC', href: 'https://www.celiachia.it' },
  { label: 'RNA', href: 'https://www.salute.gov.it' },
  { label: 'Legge 501/2006', href: 'https://www.gazzettaufficiale.it' },
  { label: 'Ministero della Salute', href: 'https://www.salute.gov.it/portale/celiachia' },
]

export function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-accent">Link Utili</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex transition-all duration-200 hover:translate-x-1 hover:text-accent">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
