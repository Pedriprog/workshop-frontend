import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
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
  const scroll = (delta: number) => containerRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  return (
    <section>
      <AnimateOnScroll animation="fade-up">
        <SectionHeader title={title} subtitle={subtitle} />
      </AnimateOnScroll>
      <div className="mb-4 flex justify-end gap-2">
        <button aria-label="Scorri indietro" onClick={() => scroll(-320)} className="rounded-full border p-2"><ChevronLeftIcon className="h-5 w-5" /></button>
        <button aria-label="Scorri avanti" onClick={() => scroll(320)} className="rounded-full border p-2"><ChevronRightIcon className="h-5 w-5" /></button>
      </div>
      <div ref={containerRef} className="flex snap-x gap-4 overflow-x-auto pb-2">
        {restaurants.map((restaurant, index) => (
          <AnimateOnScroll key={restaurant.id} animation="fade-up" delay={index * 80}>
            <div className="min-w-[84vw] snap-start sm:min-w-[45vw] lg:min-w-[32%]"><RestaurantCard restaurant={restaurant} /></div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
