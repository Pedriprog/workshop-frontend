import { GlobeAltIcon } from '@heroicons/react/24/outline'

const socials = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']

export function FooterBrand() {
  return (
    <div>
      <div className="flex items-center gap-2 text-xl font-bold">
        <span aria-hidden className="text-accent">🌾</span>
        <span>SpigaZero</span>
      </div>
      <p className="mt-3 max-w-xs text-sm text-white/75">
        Rendiamo la celiachia un modo sereno di vivere buon cibo e convivialità nel Salento.
      </p>
      <div className="mt-4 flex gap-3" aria-label="Social links">
        {socials.map((label) => (
          <a key={label} href="#" aria-label={label} className="text-white/70 transition-colors duration-200 hover:text-accent">
            <GlobeAltIcon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  )
}
