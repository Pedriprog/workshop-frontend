import { MapOverlay } from '@/components/MapOverlay'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Button } from '@/components/ui'
import { MapSidebarItem } from '@/components/MapSidebar'
import { MOCK_RESTAURANTS } from '@/data'
import { useMapOverlay } from '@/hooks'

export function MapSection() {
  const { isOpen, open, close } = useMapOverlay()

  return (
    <section id="mappa" className="relative bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80')] bg-cover py-16">
      <div className="absolute inset-0 bg-black/55" />
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_1.2fr_.9fr]">
        <div className="relative text-white">
          <h2 className="text-3xl font-semibold">Scopri i ristoranti vicino a te</h2>
          <p className="mt-3 text-white/85">Esplora la mappa e apri le schede dei locali gluten-free in Lecce e provincia.</p>
          <Button className="mt-6" onClick={open}>Apri la mappa</Button>
        </div>
        {!isOpen ? (
          <div className="relative hidden h-95 overflow-hidden rounded-2xl border border-white/40 md:block">
            <MapContainer center={[40.3515, 18.175]} zoom={10} className="h-full w-full">
              <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[40.3515, 18.175]}>
                <Popup>Lecce centro</Popup>
              </Marker>
            </MapContainer>
          </div>
        ) : (
          <div className="hidden md:block" />
        )}
        <aside className="relative space-y-3 rounded-2xl bg-accent/20 p-4 ring-1 ring-white/25 backdrop-blur-sm">
          {MOCK_RESTAURANTS.slice(0, 4).map((restaurant) => <MapSidebarItem key={restaurant.id} restaurant={restaurant} />)}
        </aside>
      </div>
      <MapOverlay isOpen={isOpen} onClose={close} restaurants={MOCK_RESTAURANTS} />
    </section>
  )
}
