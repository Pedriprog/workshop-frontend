import { AnimateOnScroll, StatCounter } from '@/components/ui'

export function AboutSection() {
  return (
    <section id="chi-siamo" className="bg-accent/15 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-2xl font-semibold text-textDark">Chi siamo?</h2>

        <AnimateOnScroll animation="slide-left">
          <div className="rounded-2xl bg-bgLight p-8 shadow-sm ring-1 ring-border">
            <p className="text-6xl font-bold leading-none text-accent md:text-8xl">“</p>
            <p className="mt-2 text-xl font-medium text-textDark">
              Siamo due ragazzi salentini con una missione chiara: rendere la nostra terra inclusiva per chi vive la celiachia.
            </p>
            <p className="mt-2 text-right text-6xl font-bold leading-none text-accent md:text-8xl">”</p>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 grid gap-6 border-t border-border pt-8 md:grid-cols-3">
          <StatCounter value={50} suffix="+" label="Ristoranti certificati" />
          <StatCounter value={1200} suffix="+" label="Recensioni" />
          <StatCounter value={8} suffix="/10" label="Rating medio" />
        </div>
      </div>
    </section>
  )
}