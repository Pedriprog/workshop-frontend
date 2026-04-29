import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'

interface FavoriteButtonProps {
  isFavorite: boolean
  onToggle: () => void
}

export function FavoriteButton({ isFavorite, onToggle }: FavoriteButtonProps) {
  return (
    <button
      aria-label={isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
      onClick={onToggle}
      className="rounded-full bg-white/90 p-2 shadow transition-transform duration-150 hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-red-500"
    >
      {isFavorite ? <HeartSolid className="h-5 w-5 animate-heart-pop text-red-500" /> : <HeartOutline className="h-5 w-5 text-primary" />}
    </button>
  )
}
