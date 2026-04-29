import { XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import type { Restaurant } from '@/types'

interface MapOverlayProps {
  isOpen: boolean
  onClose: () => void
  restaurants: Restaurant[]
}

export function MapOverlay({ isOpen, onClose, restaurants }: MapOverlayProps) {
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [onClose])

  if (!isOpen) return null
  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/70 p-4" onClick={onClose}>
      <div className="mx-auto max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-xl font-semibold text-textDark">Ristoranti vicino a te</h2>
          <button aria-label="Chiudi overlay mappa" onClick={onClose}><XMarkIcon className="h-6 w-6" /></button>
        </div>
        <div className="h-[500px]">
          <MapContainer center={[40.3515, 18.175]} zoom={10} className="h-full w-full">
            <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {restaurants.map((restaurant, index) => (
              <Marker key={restaurant.id} position={[40.3515 + index * 0.01, 18.175 + index * 0.01]}>
                <Popup><p className="font-semibold">{restaurant.name}</p><p>⭐ {restaurant.rating} ({restaurant.reviewCount})</p><button className="mt-2 rounded bg-accent px-2 py-1 text-sm">Vedi scheda</button></Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>,
    document.body,
  )
}
