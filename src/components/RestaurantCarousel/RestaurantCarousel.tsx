import { useRef } from 'react'
import { AnimateOnScroll, SectionHeader } from '@/components/ui'
import { RestaurantCard } from '@/components/RestaurantCard'
import type { Restaurant } from '@/types'

interface RestaurantCarouselProps {
  restaurants: Restaurant[]
  title: string
  subtitle?: string
}

export function RestaurantCarousel({ restaurants, title, subtitle }: RestaurantCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section>
      <AnimateOnScroll animation="fade-up">
        <SectionHeader title={title} subtitle={subtitle} />
      </AnimateOnScroll>
      <div ref={containerRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {restaurants.map((restaurant, index) => (
          <div key={restaurant.id} className="min-w-[84vw] snap-start sm:min-w-[45vw] lg:min-w-[31%]">
            <AnimateOnScroll animation="fade-up" delay={index * 80}>
              <RestaurantCard restaurant={restaurant} />
            </AnimateOnScroll>
          </div>
        ))}
      </div>
    </section>
  )
}
