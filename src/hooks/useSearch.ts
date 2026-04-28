import { useEffect, useMemo, useState } from 'react'
import type { RatingValue, Restaurant } from '@/types'

export interface FilterState {
  maxDistance: number | null
  minRating: RatingValue | null
  cuisineType: string | null
}

const DEFAULT_FILTERS: FilterState = { maxDistance: null, minRating: null, cuisineType: null }

export function useSearch(restaurants: Restaurant[]) {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const updateQuery = (value: string) => {
    setIsLoading(true)
    setQuery(value)
  }

  const updateFilters = (value: FilterState) => {
    setIsLoading(true)
    setFilters(value)
  }

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedQuery(query)
      setIsLoading(false)
    }, 300)
    return () => window.clearTimeout(timeoutId)
  }, [query, filters])

  const activeFiltersCount = useMemo(
    () => [filters.maxDistance, filters.minRating, filters.cuisineType].filter(Boolean).length,
    [filters],
  )

  const results = useMemo(() => {
    const text = debouncedQuery.trim().toLowerCase()
    return restaurants.filter((restaurant) => {
      const queryMatch =
        !text ||
        [restaurant.name, restaurant.address, restaurant.cuisineType].join(' ').toLowerCase().includes(text)
      const ratingMatch = !filters.minRating || restaurant.rating >= filters.minRating
      const distanceMatch = !filters.maxDistance || restaurant.distanceKm <= filters.maxDistance
      const cuisineMatch = !filters.cuisineType || restaurant.cuisineType === filters.cuisineType
      return queryMatch && ratingMatch && distanceMatch && cuisineMatch
    })
  }, [debouncedQuery, filters, restaurants])

  return { query, setQuery: updateQuery, filters, setFilters: updateFilters, isLoading, results, activeFiltersCount }
}
