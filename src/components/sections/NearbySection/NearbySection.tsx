import { RestaurantCarousel } from '@/components/RestaurantCarousel'
import { SkeletonCard } from '@/components/ui'
import type { Restaurant } from '@/types'

interface NearbySectionProps {
  restaurants: Restaurant[]
  isLoading?: boolean
}

export function NearbySection({ restaurants, isLoading = false }: NearbySectionProps) {
  return (
    <section className="bg-bgLight py-8 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => <SkeletonCard key={item} />)}
          </div>
        ) : restaurants.length ? (
          <>
            <div className="mb-3 flex items-center gap-1 text-xs text-textDark/60">
              <span className="animate-bounce-x">→</span>
              <span>scorri per vedere altri</span>
            </div>
            <div className="relative">
              <RestaurantCarousel
                restaurants={restaurants}
                title="Altri ristoranti in zona"
                subtitle="Nuove opzioni gluten-free vicino a te."
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bgLight to-transparent" />
            </div>
          </>
        ) : (
          <p className="rounded-xl border border-border p-6 text-center text-textDark/70">Nessun ristorante trovato</p>
        )}
      </div>
    </section>
  )
}