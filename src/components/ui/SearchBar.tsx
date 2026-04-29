import { useState } from 'react'
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { FilterPanel } from '@/components/ui/FilterPanel/FilterPanel'
import type { FilterState } from '@/hooks/useSearch'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
}

export function SearchBar({ value, onChange, filters, onFilterChange }: SearchBarProps) {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false)
  const activeFilters = [filters.maxDistance, filters.minRating, filters.cuisineType].filter(Boolean).length

  return (
    <div className="relative w-[90vw] max-w-2xl">
      <div className="flex w-full items-center rounded-full border border-border bg-white p-2 shadow transition focus-within:ring-2 focus-within:ring-accent">
        <MagnifyingGlassIcon aria-hidden className="ml-3 h-5 w-5 text-primary" />
        <input
          aria-label="Cerca ristorante"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Dove vuoi mangiare?"
          className="w-full bg-transparent px-3 py-2 text-textDark placeholder:text-textDark/50 outline-none"
        />
        <button
          aria-label="Apri filtri ricerca"
          onClick={() => setIsFilterPanelOpen((current) => !current)}
          className="relative flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-semibold text-textDark focus-visible:ring-2 focus-visible:ring-accent"
        >
          <FunnelIcon className="h-4 w-4" />
          Filtri
          {activeFilters > 0 ? <span className="rounded-full bg-primary px-2 text-xs text-white">{activeFilters}</span> : null}
        </button>
      </div>
      <FilterPanel
        isOpen={isFilterPanelOpen}
        filters={filters}
        onChange={onFilterChange}
        onClose={() => setIsFilterPanelOpen(false)}
      />
    </div>
  )
}
