import {
  AboutSection,
  CeliachiaSection,
  FaqSection,
  FeaturedSection,
  HeroSection,
  MapSection,
  NearbySection,
} from '@/components/sections'
import { MOCK_RESTAURANTS } from '@/data'
import { useSearch } from '@/hooks'

export function HomePage() {
  const { query, setQuery, filters, setFilters, isLoading, results } = useSearch(MOCK_RESTAURANTS)
  return (
    <>
      <HeroSection query={query} onQueryChange={setQuery} filters={filters} onFilterChange={setFilters} />
      <FeaturedSection restaurants={results} isLoading={isLoading} />
      <NearbySection restaurants={results} isLoading={isLoading} />
      <AboutSection />
      <CeliachiaSection />
      <MapSection />
      <FaqSection />
    </>
  )
}
