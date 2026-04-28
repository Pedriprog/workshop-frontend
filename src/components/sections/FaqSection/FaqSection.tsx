import { AccordionItem } from '@/components/ui'
import { FAQ_ITEMS } from '@/data'
import { useAccordion } from '@/hooks'

export function FaqSection() {
  const { openId, toggle } = useAccordion(FAQ_ITEMS[0]?.id ?? null)
  return (
    <section id="faq" className="bg-bgLight py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-6 text-3xl font-semibold text-textDark">FAQ</h2>
        <div className="rounded-xl bg-white px-5">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => toggle(item.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}
