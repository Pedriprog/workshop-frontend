import { RestaurantGrid } from '@/components/RestaurantGrid'
import { AnimateOnScroll, SectionHeader, SkeletonCard } from '@/components/ui'
import type { Restaurant } from '@/types'

interface FeaturedSectionProps {
  restaurants: Restaurant[]
  isLoading?: boolean
}

export function FeaturedSection({ restaurants, isLoading = false }: FeaturedSectionProps) {
  const featuredRestaurants = restaurants.filter((restaurant) => restaurant.isFeatured).slice(0, 4)
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
      <AnimateOnScroll animation="fade-up">
        <SectionHeader title="In evidenza" subtitle="I locali piu apprezzati dalla community." ctaLabel="Vedi tutti" />
      </AnimateOnScroll>
      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => <SkeletonCard key={item} />)}
        </div>
      ) : featuredRestaurants.length ? (
        <RestaurantGrid restaurants={featuredRestaurants} />
      ) : (
        <p className="rounded-xl border border-border p-6 text-center text-textDark/70">Nessun ristorante trovato</p>
      )}
      </div>
    </section>
  )
}
