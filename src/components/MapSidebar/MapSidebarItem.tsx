import { StarRating } from '@/components/ui'
import type { Restaurant } from '@/types'

interface MapSidebarItemProps {
  restaurant: Restaurant
}

export function MapSidebarItem({ restaurant }: MapSidebarItemProps) {
  return (
    <article className="cursor-pointer rounded-lg border border-border/70 bg-white p-3 transition-[box-shadow,border-color] duration-200 hover:border-accent/60 hover:shadow-lg">
      <div className="flex gap-3">
      <img src={`${restaurant.imageUrl}?auto=format&fit=crop&w=300&q=80`} alt={restaurant.name} className="h-16 w-16 rounded object-cover" />
      <div>
        <h3 className="font-semibold text-textDark">{restaurant.name}</h3>
        <p className="text-xs text-textDark/70">{restaurant.address}</p>
        <StarRating rating={restaurant.rating} reviewCount={restaurant.reviewCount} />
      </div>
      </div>
    </article>
  )
}
