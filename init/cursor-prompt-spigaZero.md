# 🌾 SpigaZero — Cursor Prompt (Todo-List)
## Stack: React + TypeScript + TailwindCSS
## Riferimento visivo: Home-Main.jpg (fedeltà 1:1)

---

## REGOLE GLOBALI (rispetta sempre queste regole per ogni task)

- Ogni file deve avere **meno di 100 righe**
- **Single Responsibility**: ogni componente/file fa una sola cosa
- **No `any`**: tipizzazione stretta TypeScript ovunque
- **Barrel files**: ogni cartella espone un `index.ts`
- Fonts e color palette **centralizzati** in `tailwind.config.ts`
- Componenti **atomici**: nessun componente assembla logica + UI complessa insieme
- Usa **named export** su tutti i componenti

---

## FASE 0 — Setup Progetto

- [ ] **0.1** Inizializza progetto con `npm create vite@latest spigaZero -- --template react-ts`
- [ ] **0.2** Installa dipendenze: `tailwindcss`, `@types/node`, `react-leaflet`, `leaflet`, `@types/leaflet`, `@heroicons/react`
- [ ] **0.3** Configura `tailwind.config.ts` con la palette colori centralizzata:
  ```ts
  colors: {
    primary:   '#3D2A6B',
    accent:    '#F5C518',
    bgLight:   '#F9F5EE',
    bgDark:    '#2B1D5C',
    green:     '#4CAF50',
    textDark:  '#1A1A2E',
    textLight: '#FFFFFF',
    star:      '#FFC107',
    border:    '#E0D9F0',
  }
  ```
- [ ] **0.4** Configura `tailwind.config.ts` con i font centralizzati:
  ```ts
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
  }
  ```
- [ ] **0.5** Aggiungi import Google Font `Poppins` (400, 500, 600, 700) in `index.html`
- [ ] **0.6** Configura `tsconfig.json` con `"strict": true` e path alias `@/` → `src/`
- [ ] **0.7** Crea struttura cartelle:
  ```
  src/
  ├── components/
  │   ├── ui/          ← atoms
  │   ├── layout/      ← Navbar, Footer
  │   └── sections/    ← sezioni homepage
  ├── types/
  ├── constants/
  ├── hooks/
  └── data/
  ```

---

## FASE 1 — Types & Constants

- [ ] **1.1** Crea `src/types/restaurant.types.ts`:
  - Definisci `Restaurant` interface: `id`, `name`, `address`, `phone`, `imageUrl`, `rating`, `reviewCount`, `isFeatured`
  - Definisci `RatingValue` come `1 | 2 | 3 | 4 | 5`
  - Esporta da `src/types/index.ts`

- [ ] **1.2** Crea `src/types/nav.types.ts`:
  - Definisci `NavLink` interface: `label`, `href`
  - Esporta da `src/types/index.ts`

- [ ] **1.3** Crea `src/types/faq.types.ts`:
  - Definisci `FaqItem` interface: `id`, `question`, `answer`
  - Esporta da `src/types/index.ts`

- [ ] **1.4** Crea `src/constants/navLinks.ts`:
  - Array `NAV_LINKS: NavLink[]` con: `Chi siamo?`, `Cosa significa essere Celiaci?`, `Mappa`, `FAQ`
  - Esporta da `src/constants/index.ts`

- [ ] **1.5** Crea `src/data/restaurants.mock.ts`:
  - Array `MOCK_RESTAURANTS: Restaurant[]` con almeno 6 voci mock
  - Esporta da `src/data/index.ts`

- [ ] **1.6** Crea `src/data/faq.data.ts`:
  - Array `FAQ_ITEMS: FaqItem[]` con le 4 domande dal design doc
  - Esporta da `src/data/index.ts`

---

## FASE 2 — UI Atoms (`src/components/ui/`)

- [ ] **2.1** Crea `Button.tsx`:
  - Props: `variant: 'primary' | 'secondary' | 'outline'`, `children`, `onClick?`, `className?`
  - Implementa i 3 stili dal design doc con Tailwind
  - Esporta da `src/components/ui/index.ts`

- [ ] **2.2** Crea `StarRating.tsx`:
  - Props: `rating: RatingValue`, `reviewCount: number`
  - Renderizza 5 stelle con colore `star` (#FFC107), riempite in base al rating
  - Esporta da `src/components/ui/index.ts`

- [ ] **2.3** Crea `Badge.tsx`:
  - Props: `label: string`, `variant?: 'green' | 'accent'`
  - Piccola pill badge per tag gluten-free
  - Esporta da `src/components/ui/index.ts`

- [ ] **2.4** Crea `SearchBar.tsx`:
  - Props: `value: string`, `onChange: (v: string) => void`, `onFilterClick: () => void`
  - Layout: pill bianca, icona lente sinistra, input testuale, bottone "Filtri" giallo destra
  - Placeholder: `"Dove vuoi mangiare?"`
  - Esporta da `src/components/ui/index.ts`

- [ ] **2.5** Crea `SectionHeader.tsx`:
  - Props: `title: string`, `subtitle?: string`, `ctaLabel?: string`, `onCtaClick?: () => void`
  - Renderizza titolo H2 + sottotitolo + link "Vedi tutti" opzionale allineato a destra
  - Esporta da `src/components/ui/index.ts`

- [ ] **2.6** Crea `FavoriteButton.tsx`:
  - Props: `isFavorite: boolean`, `onToggle: () => void`
  - Icona cuore (HeartIcon da Heroicons), piena se `isFavorite`, outline altrimenti
  - Colore accent quando attivo
  - Esporta da `src/components/ui/index.ts`

- [ ] **2.7** Crea `AccordionItem.tsx`:
  - Props: `item: FaqItem`, `isOpen: boolean`, `onToggle: () => void`
  - Domanda + chevron; risposta collassabile con transizione CSS 300ms
  - Esporta da `src/components/ui/index.ts`

- [ ] **2.8** Crea `SkeletonCard.tsx`:
  - Placeholder animated skeleton con stesse dimensioni di `RestaurantCard`
  - Usato durante il loading
  - Esporta da `src/components/ui/index.ts`

---

## FASE 3 — Composite Components

- [ ] **3.1** Crea `src/components/RestaurantCard/RestaurantCard.tsx`:
  - Props: `restaurant: Restaurant`
  - Layout: immagine 16:9 top, cuore overlay, nome, icona pin + indirizzo, icona phone + tel, StarRating
  - Hover: `scale-[1.02]` + shadow elevata (transition 200ms)
  - Esporta da `src/components/RestaurantCard/index.ts`

- [ ] **3.2** Crea `src/components/RestaurantCarousel/RestaurantCarousel.tsx`:
  - Props: `restaurants: Restaurant[]`, `title: string`, `subtitle?: string`
  - Scroll orizzontale con snap, frecce prev/next
  - Usa `RestaurantCard` internamente
  - Esporta da `src/components/RestaurantCarousel/index.ts`

- [ ] **3.3** Crea `src/components/RestaurantGrid/RestaurantGrid.tsx`:
  - Props: `restaurants: Restaurant[]`
  - Grid 4 colonne desktop, 2 tablet, 1 mobile
  - Usa `RestaurantCard` internamente
  - Esporta da `src/components/RestaurantGrid/index.ts`

- [ ] **3.4** Crea `src/components/CeliachiaCard/CeliachiaCard.tsx`:
  - Props: `icon: React.ReactNode`, `title: string`, `description: string`
  - Card con sfondo giallo/verde e testo, usata per Cos'è / Sintomi / Cosa evitare
  - Esporta da `src/components/CeliachiaCard/index.ts`

- [ ] **3.5** Crea `src/components/MapSidebar/MapSidebarItem.tsx`:
  - Props: `restaurant: Restaurant`
  - Thumbnail + nome + rating inline — usata nella sidebar mappa
  - Esporta da `src/components/MapSidebar/index.ts`

---

## FASE 4 — Layout Components (`src/components/layout/`)

- [ ] **4.1** Crea `Navbar/NavLink.tsx`:
  - Props: `link: NavLink`, `isActive?: boolean`
  - Singolo link con hover giallo e stile attivo
  - Esporta da `src/components/layout/Navbar/index.ts`

- [ ] **4.2** Crea `Navbar/NavLogo.tsx`:
  - Renderizza SVG logo SpigaZero (spiga stilizzata giallo/verde + testo bold bianco)
  - Esporta da `src/components/layout/Navbar/index.ts`

- [ ] **4.3** Crea `Navbar/NavDesktop.tsx`:
  - Layout: `NavLogo` sinistra, `NavLink` centrati, `Button primary "Accedi"` destra
  - Sfondo `primary` (#3D2A6B)
  - Esporta da `src/components/layout/Navbar/index.ts`

- [ ] **4.4** Crea `Navbar/NavMobile.tsx`:
  - Hamburger icon, drawer laterale su sfondo `primary`
  - Lista `NavLink` + bottone `Accedi`
  - Esporta da `src/components/layout/Navbar/index.ts`

- [ ] **4.5** Crea `Navbar/Navbar.tsx`:
  - Assembla `NavDesktop` (hidden su mobile) + `NavMobile` (hidden su desktop)
  - Posizione `sticky top-0 z-50`
  - Esporta da `src/components/layout/index.ts`

- [ ] **4.6** Crea `Footer/FooterBrand.tsx`:
  - Logo + descrizione brand + social icons (Facebook, Twitter, Instagram, LinkedIn)
  - Esporta da `src/components/layout/Footer/index.ts`

- [ ] **4.7** Crea `Footer/FooterLinks.tsx`:
  - Lista "Link Utili": AIC, RNA, Legge 501/2006, Ministero della Salute
  - Ogni voce è un `<a>` con `target="_blank"`
  - Esporta da `src/components/layout/Footer/index.ts`

- [ ] **4.8** Crea `Footer/FooterContacts.tsx`:
  - Email + telefono con icone Heroicons
  - Esporta da `src/components/layout/Footer/index.ts`

- [ ] **4.9** Crea `Footer/Footer.tsx`:
  - Assembla `FooterBrand`, `FooterLinks`, `FooterContacts` in 3 colonne
  - Sfondo `bgDark` (#2B1D5C), testo bianco
  - Copyright row in fondo
  - Esporta da `src/components/layout/index.ts`

---

## FASE 5 — Sezioni Homepage (`src/components/sections/`)

- [ ] **5.1** Crea `HeroSection/HeroSection.tsx`:
  - Background: immagine ristorante con overlay `rgba(0,0,0,0.5)`
  - H1 bianco: `"Trova Ristoranti senza glutine, vicino a te"`
  - Sottotitolo bianco max 2 righe
  - `SearchBar` centrata sotto il titolo
  - Esporta da `src/components/sections/index.ts`

- [ ] **5.2** Crea `FeaturedSection/FeaturedSection.tsx`:
  - `SectionHeader` con titolo "In evidenza", subtitle, CTA "Vedi tutti"
  - `RestaurantGrid` con 4 ristoranti featured
  - Background bianco, padding verticale 64px
  - Esporta da `src/components/sections/index.ts`

- [ ] **5.3** Crea `NearbySection/NearbySection.tsx`:
  - `SectionHeader` con titolo "Altri ristoranti in zona"
  - `RestaurantCarousel` con 5+ ristoranti
  - Background bianco
  - Esporta da `src/components/sections/index.ts`

- [ ] **5.4** Crea `AboutSection/AboutSection.tsx`:
  - Background `bgLight` (#F9F5EE)
  - Virgolette decorative gialle grandi
  - Quote principale sinistra + testo narrativo destra + icona emoji persone
  - Esporta da `src/components/sections/index.ts`

- [ ] **5.5** Crea `CeliachiaSection/CeliachiaInfoCard.tsx`:
  - Singola card informativa: Props `icon`, `title`, `body`
  - Sfondo giallo con icona, usata per Cos'è / Sintomi / Cosa evitare
  - Esporta dalla section index

- [ ] **5.6** Crea `CeliachiaSection/CeliachiaSection.tsx`:
  - Titolo "Cosa significa essere Celiaci?"
  - Infografica sinistra (immagine statica o SVG)
  - 3 `CeliachiaInfoCard` a destra in colonna
  - Messaggio badge rosso: "Non una scelta alimentare: è una malattia"
  - Esporta da `src/components/sections/index.ts`

- [ ] **5.7** Crea `MapSection/MapSection.tsx`:
  - Background: foto ristorante scura con overlay
  - Colonna sinistra: titolo "Scopri i ristoranti vicino a te" + testo + `Button "Apri la mappa"`
  - Centro: mappa Leaflet centrata su Lecce (lat: 40.3515, lng: 18.1750, zoom: 10)
  - Sidebar destra: lista `MapSidebarItem` con sfondo `accent`
  - Esporta da `src/components/sections/index.ts`

- [ ] **5.8** Crea `FaqSection/FaqSection.tsx`:
  - Background `bgLight`
  - Titolo "FAQ"
  - Lista di `AccordionItem` con stato open gestito localmente con `useState`
  - Un solo item aperto per volta
  - Esporta da `src/components/sections/index.ts`

---

## FASE 6 — Hooks

- [ ] **6.1** Crea `src/hooks/useFavorite.ts`:
  - Gestisce toggle preferiti per un `restaurantId: string`
  - Stato locale con `useState<Set<string>>`
  - Ritorna `{ isFavorite, toggleFavorite }`
  - Esporta da `src/hooks/index.ts`

- [ ] **6.2** Crea `src/hooks/useAccordion.ts`:
  - Gestisce quale `FaqItem` è aperto (`openId: string | null`)
  - Ritorna `{ openId, toggle }`
  - Esporta da `src/hooks/index.ts`

---

## FASE 7 — Assemblaggio Homepage

- [ ] **7.1** Crea `src/pages/HomePage.tsx`:
  - Assembla nell'ordine: `HeroSection`, `FeaturedSection`, `NearbySection`, `AboutSection`, `CeliachiaSection`, `MapSection`, `FaqSection`
  - Nessuna logica interna, solo composizione di sezioni
  - Max 50 righe

- [ ] **7.2** Aggiorna `src/App.tsx`:
  - Wrappa `<Navbar />`, `<HomePage />`, `<Footer />`
  - Nessuna logica, solo layout root

---

## FASE 8 — Accessibilità & Rifinitura

- [ ] **8.1** Aggiungi `aria-label` a tutte le icone prive di testo (cuore, lente, filtri, chevron)
- [ ] **8.2** Verifica struttura heading semantica: una sola `<h1>` (Hero), `<h2>` per ogni sezione
- [ ] **8.3** Aggiungi `alt` descrittivo a ogni `<img>`
- [ ] **8.4** Assicura focus ring visibile su `Button`, `NavLink`, `AccordionItem` (Tailwind: `focus-visible:ring-2 focus-visible:ring-accent`)
- [ ] **8.5** Testa navigazione da tastiera su Navbar mobile e FAQ accordion

---

## FASE 9 — QA Finale

- [ ] **9.1** Verifica che nessun file superi le 100 righe (`wc -l src/**/*.tsx`)
- [ ] **9.2** Verifica assenza di `any` (`tsc --noEmit` senza errori)
- [ ] **9.3** Verifica che ogni cartella abbia il suo `index.ts` barrel file
- [ ] **9.4** Confronta visivamente con `Home-Main.jpg` sezione per sezione
- [ ] **9.5** Testa responsività su mobile (375px), tablet (768px), desktop (1280px)
