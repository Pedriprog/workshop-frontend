import type { Restaurant } from '@/types'

export const MOCK_RESTAURANTS: Restaurant[] = [
  { id: '1', name: 'Le Zie Trattoria', address: 'Via Trinchese 21, Lecce', phone: '+39 0832 000101', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', rating: 5, reviewCount: 132, isFeatured: true, cuisineType: 'pizza', distanceKm: 1.2 },
  { id: '2', name: 'Masseria Verde', address: 'SP 364, Cavallino', phone: '+39 0832 000102', imageUrl: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f', rating: 4, reviewCount: 88, isFeatured: true, cuisineType: 'trattoria', distanceKm: 6.8 },
  { id: '3', name: 'Porta Napoli Bistrot', address: 'Piazzetta Arco 4, Lecce', phone: '+39 0832 000103', imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0', rating: 5, reviewCount: 104, isFeatured: true, cuisineType: 'bistrot', distanceKm: 1.5 },
  { id: '4', name: 'Salento Mare', address: 'Lungomare 12, Otranto', phone: '+39 0836 100204', imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de', rating: 4, reviewCount: 77, isFeatured: true, cuisineType: 'pesce', distanceKm: 22.1 },
  { id: '5', name: 'Puglia Lab', address: 'Via Roma 77, Maglie', phone: '+39 0836 100205', imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0', rating: 4, reviewCount: 61, isFeatured: false, cuisineType: 'pizza', distanceKm: 18.3 },
  { id: '6', name: 'La Corte del Gusto', address: 'Via Libertini 39, Lecce', phone: '+39 0832 000106', imageUrl: 'https://images.unsplash.com/photo-1481833761820-0509d3217039', rating: 5, reviewCount: 96, isFeatured: false, cuisineType: 'trattoria', distanceKm: 2.3 },
]
