import type { FilterState } from '@/hooks/useSearch'

interface FilterPanelProps {
  isOpen: boolean
  filters: FilterState
  onChange: (filters: FilterState) => void
  onClose: () => void
}

export function FilterPanel({ isOpen, filters, onChange, onClose }: FilterPanelProps) {
  if (!isOpen) return null
  return (
    <div className="absolute left-0 right-0 top-[calc(100%+12px)] z-20 rounded-2xl border border-border bg-white p-4 shadow-lg transition-all duration-300 ease-in-out">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="text-sm">Distanza max: {filters.maxDistance ?? 30} km
          <input type="range" min={1} max={30} value={filters.maxDistance ?? 30} onChange={(e) => onChange({ ...filters, maxDistance: Number(e.target.value) })} className="mt-2 w-full" />
        </label>
        <label className="text-sm">Valutazione minima
          <select className="mt-2 w-full rounded-md border border-border p-2" value={filters.minRating ?? ''} onChange={(e) => onChange({ ...filters, minRating: (Number(e.target.value) || null) as FilterState['minRating'] })}>
            <option value="">Qualsiasi</option><option value="3">3+</option><option value="4">4+</option><option value="5">5</option>
          </select>
        </label>
        <label className="text-sm">Tipo cucina
          <select className="mt-2 w-full rounded-md border border-border p-2" value={filters.cuisineType ?? ''} onChange={(e) => onChange({ ...filters, cuisineType: e.target.value || null })}>
            <option value="">Tutte</option><option value="pizza">Pizza</option><option value="trattoria">Trattoria</option><option value="bistrot">Bistrot</option><option value="pesce">Pesce</option>
          </select>
        </label>
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={onClose} className="rounded-md bg-primary px-4 py-2 text-white">Chiudi</button>
      </div>
    </div>
  )
}
