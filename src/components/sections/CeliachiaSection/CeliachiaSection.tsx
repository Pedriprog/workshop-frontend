import { AnimateOnScroll } from '@/components/ui'
import { ExclamationTriangleIcon, ShieldExclamationIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { CeliachiaInfoCard } from './CeliachiaInfoCard'

const cards = [
  { title: "Cos'e", body: 'La celiachia e una malattia autoimmune scatenata dal glutine.', icon: <SparklesIcon className="h-6 w-6" /> },
  { title: 'Sintomi', body: 'I sintomi possono essere intestinali, cutanei o sistemici.', icon: <ShieldExclamationIcon className="h-6 w-6" /> },
  { title: 'Cosa evitare', body: 'Frumento, orzo e segale, oltre a contaminazioni crociate.', icon: <ExclamationTriangleIcon className="h-6 w-6" /> },
]

export function CeliachiaSection() {
  return (
    <section id="celiaci" className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_1fr]">
      <AnimateOnScroll animation="slide-left">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-bgLight p-8">
        <h2 className="text-3xl font-semibold text-textDark">CHE SIGNIFICA ESSERE CELIACI?</h2>
        <div className="mt-6 h-72 rounded-xl border border-border bg-white p-6 text-sm text-textDark/75">Infografica celiachia: digestione, reazione autoimmune e alimenti da evitare.</div>
        <p className="absolute bottom-4 left-4 rounded-md bg-red-600 px-3 py-2 text-xs font-semibold text-white">
          NON UNA SCELTA ALIMENTARE: E UNA MALATTIA
        </p>
      </div>
      </AnimateOnScroll>
      <div className="space-y-4">{cards.map((card, index) => <AnimateOnScroll key={card.title} animation="fade-up" delay={index * 80}><CeliachiaInfoCard icon={card.icon} title={card.title} body={card.body} /></AnimateOnScroll>)}</div>
    </section>
  )
}
