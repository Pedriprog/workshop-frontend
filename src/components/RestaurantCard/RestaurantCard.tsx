import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { FavoriteButton, StarRating } from '@/components/ui'
import { useFavorite } from '@/hooks'
import type { Restaurant } from '@/types'

interface RestaurantCardProps {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { isFavorite, toggleFavorite } = useFavorite()

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <img src={`${restaurant.imageUrl}?auto=format&fit=crop&w=800&q=80`} alt={restaurant.name} className="aspect-video w-full object-cover transition duration-200 group-hover:scale-105" />
        <div className="absolute right-3 top-3">
          <FavoriteButton isFavorite={isFavorite(restaurant.id)} onToggle={() => toggleFavorite(restaurant.id)} />
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold text-textDark">{restaurant.name}</h3>
        <p className="flex items-center gap-2 text-sm text-textDark/75"><MapPinIcon className="h-4 w-4" />{restaurant.address}</p>
        <p className="flex items-center gap-2 text-sm text-textDark/75"><PhoneIcon className="h-4 w-4" />{restaurant.phone}</p>
        <StarRating rating={restaurant.rating} reviewCount={restaurant.reviewCount} />
      </div>
    </article>
  )
}
