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
    <section id="celiaci" className="bg-bgLight py-16">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="mb-8 rounded-2xl border border-border bg-white p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Educazione alimentare</p>
            <h2 className="mt-2 text-3xl font-semibold text-textDark md:text-4xl">Cosa significa essere celiaci</h2>
            <p className="mt-3 max-w-3xl text-textDark/75">
              La celiachia non è una preferenza: è una condizione autoimmune che richiede attenzione quotidiana, conoscenza degli ingredienti e prevenzione della contaminazione.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
      <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <AnimateOnScroll key={card.title} animation="fade-up" delay={index * 80}>
            <CeliachiaInfoCard icon={card.icon} title={card.title} body={card.body} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
