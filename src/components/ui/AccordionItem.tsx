import { ChevronRightIcon } from '@heroicons/react/24/outline'
import type { FaqItem } from '@/types'

interface AccordionItemProps {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}

export function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-colors duration-150 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-accent"
      >
        {item.question}
        <ChevronRightIcon aria-hidden className={`h-5 w-5 transition ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
        <p className="overflow-hidden text-textDark/80">{item.answer}</p>
      </div>
    </div>
  )
}
