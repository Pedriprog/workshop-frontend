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
    <div className="absolute left-0 right-0 top-[calc(100%+12px)] z-20 rounded-2xl border border-border bg-white p-4 text-textDark shadow-lg transition-all duration-300 ease-in-out">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="rounded-xl border border-border p-3 text-sm text-textDark">Distanza max: <span className="font-semibold">{filters.maxDistance ?? 30} km</span>
          <input type="range" min={1} max={30} value={filters.maxDistance ?? 30} onChange={(e) => onChange({ ...filters, maxDistance: Number(e.target.value) })} className="mt-2 w-full accent-primary" />
        </label>
        <label className="rounded-xl border border-border p-3 text-sm text-textDark">Valutazione minima
          <select className="mt-2 w-full rounded-md border border-border bg-white p-2 text-textDark" value={filters.minRating ?? ''} onChange={(e) => onChange({ ...filters, minRating: (Number(e.target.value) || null) as FilterState['minRating'] })}>
            <option value="">Qualsiasi</option><option value="3">★★★☆☆ e oltre</option><option value="4">★★★★☆ e oltre</option><option value="5">★★★★★</option>
          </select>
        </label>
        <label className="rounded-xl border border-border p-3 text-sm text-textDark">Tipo cucina
          <select className="mt-2 w-full rounded-md border border-border bg-white p-2 text-textDark" value={filters.cuisineType ?? ''} onChange={(e) => onChange({ ...filters, cuisineType: e.target.value || null })}>
            <option value="">Tutte</option><option value="pizza">Pizza</option><option value="trattoria">Trattoria</option><option value="bistrot">Bistrot</option><option value="pesce">Pesce</option>
          </select>
        </label>
      </div>
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <button
          onClick={() => onChange({ maxDistance: null, minRating: null, cuisineType: null })}
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-textDark transition-colors hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-accent"
        >
          Reset
        </button>
        <button onClick={onClose} className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-accent">Applica</button>
      </div>
    </div>
  )
}
