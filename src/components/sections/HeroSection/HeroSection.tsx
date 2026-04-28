import { SearchBar } from '@/components/ui'
import type { FilterState } from '@/hooks/useSearch'

interface HeroSectionProps {
  query: string
  onQueryChange: (value: string) => void
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
}

export function HeroSection({ query, onQueryChange, filters, onFilterChange }: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center py-24 md:min-h-screen">
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">Trova Ristoranti senza glutine, vicino a te</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/90">Scopri locali affidabili a Lecce e provincia con recensioni reali della community gluten-free.</p>
        <div className="mt-8 flex justify-center">
          <SearchBar
            value={query}
            onChange={onQueryChange}
            filters={filters}
            onFilterChange={onFilterChange}
          />
        </div>
      </div>
    </section>
  )
}
