import { StarIcon } from '@heroicons/react/24/solid'
import type { RatingValue } from '@/types'

interface StarRatingProps {
  rating: RatingValue
  reviewCount: number
}

export function StarRating({ rating, reviewCount }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1 text-sm text-textDark">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} className={`h-4 w-4 ${star <= rating ? 'text-star' : 'text-border'}`} />
      ))}
      <span className="ml-1">({reviewCount})</span>
    </div>
  )
}
