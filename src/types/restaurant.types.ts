export type RatingValue = 1 | 2 | 3 | 4 | 5

export interface Restaurant {
  id: string
  name: string
  address: string
  phone: string
  imageUrl: string
  rating: RatingValue
  reviewCount: number
  isFeatured: boolean
  cuisineType: string
  distanceKm: number
}
