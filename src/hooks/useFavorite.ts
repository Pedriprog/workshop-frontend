import { useMemo, useState } from 'react'

export function useFavorite() {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set())

  const isFavorite = useMemo(
    () => (restaurantId: string) => favoriteIds.has(restaurantId),
    [favoriteIds],
  )

  const toggleFavorite = (restaurantId: string) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev)
      if (next.has(restaurantId)) next.delete(restaurantId)
      else next.add(restaurantId)
      return next
    })
  }

  return { isFavorite, toggleFavorite }
}
