import { RestaurantCard } from '@/components/RestaurantCard'
import type { Restaurant } from '@/types'

interface RestaurantGridProps {
  restaurants: Restaurant[]
}

export function RestaurantGrid({ restaurants }: RestaurantGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}
