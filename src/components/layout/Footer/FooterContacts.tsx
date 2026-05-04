import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export function FooterContacts() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-accent">Contatti</h3>
      <p className="mt-3 flex items-center gap-2 text-sm text-white/75">
        <EnvelopeIcon className="h-4 w-4" />
        info@spigazero.it
      </p>
      <p className="mt-2 flex items-center gap-2 text-sm text-white/75">
        <PhoneIcon className="h-4 w-4" />
        +39 350 105 8360
      </p>
      <p className="mt-2 flex items-center gap-2 text-sm text-white/75">
        <PhoneIcon className="h-4 w-4" />
        +39 389 937 5967
      </p>
    </div>
  )
}
