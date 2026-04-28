# 🌾 SpigaZero — Cursor Fix & Enhancement Prompt
## Bug fixes + UX upgrade ispirato a neverhack.com/it
## Stack: React + TypeScript + TailwindCSS

---

## REGOLE GLOBALI (invariate, rispetta sempre)

- Ogni file **< 100 righe**
- **Single Responsibility** per ogni componente
- **No `any`** — tipizzazione TypeScript stretta
- **Barrel files** `index.ts` in ogni cartella
- Palette e font **solo** da `tailwind.config.ts`
- Named export su tutti i componenti

---

## 🔴 BUG FIX #1 — Palette colori non rispettata

**Problema:** I colori nell'app non corrispondono al design doc e all'immagine di riferimento `Home-Main.jpg`.

**Action list:**

- [ ] **F1.1** Apri `tailwind.config.ts` e verifica/aggiorna l'intero blocco `colors`:
  ```ts
  colors: {
    primary:  { DEFAULT: '#3D2A6B', dark: '#2B1D5C' },
    accent:   { DEFAULT: '#F5C518', hover: '#E0B010' },
    bgLight:  '#F9F5EE',
    bgDark:   '#2B1D5C',
    green:    '#4CAF50',
    textDark: '#1A1A2E',
    textLight:'#FFFFFF',
    star:     '#FFC107',
    border:   '#E0D9F0',
  }
  ```
- [ ] **F1.2** Rimuovi **tutti** i valori colore hardcoded (es. `#fff`, `bg-purple-900`, `text-yellow-400`) da ogni componente e sostituisci con i token Tailwind (`bg-primary`, `text-accent`, `bg-bgLight`, ecc.)
- [ ] **F1.3** Navbar: sfondo deve essere **esattamente** `bg-primary` (#3D2A6B), non varianti di grigio o viola diversi
- [ ] **F1.4** Hero: overlay deve essere `rgba(0,0,0,0.55)` — usa la classe Tailwind `bg-black/55`
- [ ] **F1.5** Sezione "In evidenza" e "Altri ristoranti": sfondo **bianco puro** `bg-white`
- [ ] **F1.6** Sezioni alternate (Chi siamo, FAQ): sfondo **esattamente** `bg-bgLight` (#F9F5EE)
- [ ] **F1.7** Footer: sfondo **esattamente** `bg-primary-dark` (#2B1D5C)
- [ ] **F1.8** Bottone primario "Accedi" e CTA: `bg-accent text-textDark` — **giallo oro**, non arancione

---

## 🔴 BUG FIX #2 — Search Bar non funzionale

**Problema:** La search bar non filtra, non reagisce all'input, il bottone "Filtri" non fa nulla.

**Action list:**

- [ ] **F2.1** Crea `src/hooks/useSearch.ts`:
  ```ts
  // Gestisce: query testuale + filtri attivi + risultati filtrati
  type FilterState = {
    maxDistance: number | null
    minRating: RatingValue | null
    cuisineType: string | null
  }
  // Ritorna: { query, setQuery, filters, setFilters, results }
  ```

- [ ] **F2.2** Crea `src/components/ui/FilterPanel/FilterPanel.tsx`:
  - Pannello dropdown/drawer con 3 filtri: distanza (slider), valutazione minima (stelle cliccabili), tipo cucina (select)
  - Props: `filters: FilterState`, `onChange: (f: FilterState) => void`, `onClose: () => void`
  - Visibile solo quando `isOpen === true`
  - Animazione: `transition-all duration-300 ease-in-out` con slide-down da opacity-0

- [ ] **F2.3** Aggiorna `SearchBar.tsx`:
  - Collega `value` e `onChange` all'hook `useSearch`
  - Il bottone "Filtri" togola `isFilterPanelOpen: boolean`
  - Mostra badge numerico sul bottone "Filtri" quando ci sono filtri attivi (es. `2`)
  - Sul click invio o `onChange` con debounce 300ms → aggiorna i risultati

- [ ] **F2.4** Aggiorna `FeaturedSection` e `NearbySection`:
  - Ricevono `restaurants: Restaurant[]` come prop (già filtrati dall'hook)
  - Mostrano `SkeletonCard` x4 durante il "loading" simulato (300ms)
  - Mostrano messaggio "Nessun ristorante trovato" se `results.length === 0`

---

## 🔴 BUG FIX #3 — Footer mancante

**Problema:** Il footer non è renderizzato o è incompleto.

**Action list:**

- [ ] **F3.1** Verifica che `Footer.tsx` sia importato e montato in `App.tsx` **dopo** `<HomePage />`
- [ ] **F3.2** Crea/completa `Footer/FooterBrand.tsx`:
  - Logo SVG SpigaZero (spiga gialla + testo bold bianco)
  - Paragrafo descrizione brand (max 3 righe, colore `text-white/70`)
  - Social icons in riga: Facebook, Twitter (X), Instagram, LinkedIn — da `@heroicons/react` o SVG inline
  - Hover su social icon: `text-accent` con transizione 200ms
- [ ] **F3.3** Crea/completa `Footer/FooterLinks.tsx`:
  - Titolo "Link Utili" in `text-accent font-semibold`
  - Lista link: AIC, RNA, Legge 501/2006, Ministero della Salute
  - Ogni link: `text-white/70 hover:text-accent transition-colors duration-200`
  - `target="_blank" rel="noopener noreferrer"`
- [ ] **F3.4** Crea/completa `Footer/FooterContacts.tsx`:
  - Titolo "Contatti" in `text-accent font-semibold`
  - Email con `EnvelopeIcon` + `+39 392 241 9102` con `PhoneIcon`
  - Testo `text-white/70`
- [ ] **F3.5** Assembla `Footer/Footer.tsx`:
  - Grid 3 colonne su desktop (`grid-cols-3`), 1 colonna su mobile
  - Padding: `py-16 px-6`
  - Divider `border-t border-white/10` sopra il copyright
  - Copyright: `© 2026 Spiga Site Inc. — All rights reserved` centrato, `text-white/40 text-sm`

---

## 🔴 BUG FIX #4 — Bottone "Apri la Mappa" non funziona

**Problema:** Il CTA non apre alcun overlay/modal con la mappa Leaflet.

**Action list:**

- [ ] **F4.1** Crea `src/hooks/useMapOverlay.ts`:
  - Gestisce `isOpen: boolean` + `open()` + `close()`
  - Blocca lo scroll del body quando overlay è aperto (`document.body.style.overflow = 'hidden'`)
  - Esporta da `src/hooks/index.ts`

- [ ] **F4.2** Crea `src/components/MapOverlay/MapOverlay.tsx`:
  - Overlay fullscreen: `fixed inset-0 z-50 bg-black/70`
  - Modale centrato `max-w-5xl w-full max-h-[85vh]` con `bg-white rounded-2xl overflow-hidden`
  - Header modale: titolo "Ristoranti vicino a te" + pulsante `X` per chiusura
  - Mappa Leaflet: centrata su Lecce (`[40.3515, 18.1750]`, zoom 10), `height: 500px`
  - Marker personalizzato per ogni ristorante mock
  - Click su marker: mostra tooltip con nome + rating + bottone "Vedi scheda"
  - Chiusura: click su `X`, click su backdrop, tasto `Escape` (listener su `keydown`)
  - Animazione apertura: `animate-fade-in` (opacity 0→1, 200ms)
  - Esporta da `src/components/MapOverlay/index.ts`

- [ ] **F4.3** Aggiorna `MapSection.tsx`:
  - Importa `useMapOverlay`
  - Il bottone "Apri la mappa" chiama `open()` dall'hook
  - Monta `<MapOverlay isOpen={isOpen} onClose={close} restaurants={MOCK_RESTAURANTS} />`
  - La mappa statica nella sezione rimane come anteprima decorativa (non interattiva)

- [ ] **F4.4** Aggiungi `animate-fade-in` in `tailwind.config.ts`:
  ```ts
  keyframes: {
    'fade-in': { from: { opacity: '0', transform: 'scale(0.95)' }, to: { opacity: '1', transform: 'scale(1)' } }
  },
  animation: { 'fade-in': 'fade-in 200ms ease-out' }
  ```

---

## 🔴 BUG FIX #5 — Layout "Chi Siamo" e "Cosa significa essere Celiaci?"

**Problema:** Disposizione non fedele all'immagine di riferimento `Home-Main.jpg`.

### Chi Siamo — Layout corretto:
- [ ] **F5.1** Aggiorna `AboutSection.tsx` — layout a **2 colonne** 50/50:
  - **Colonna sinistra:** virgolette decorative `"` grandi (`text-8xl text-accent font-serif leading-none`), sotto la quote in corsivo (`text-xl italic text-textDark`), chiusura virgolette `"`
  - **Colonna destra:** paragrafo narrativo normale + icona emoji/SVG persone in basso a destra
  - Titolo `"Chi siamo?"` sopra le colonne, allineato sinistra, `text-2xl font-semibold`
  - Background `bg-bgLight`, padding `py-20`
  - Su mobile: colonne in stack verticale

### Cosa Significa Essere Celiaci — Layout corretto:
- [ ] **F5.2** Aggiorna `CeliachiaSection.tsx` — layout a **2 colonne** 55/45:
  - **Colonna sinistra (55%):** immagine/infografica grande con titolo "CHE SIGNIFICA ESSERE CELIACI?" e badge rosso "NON UNA SCELTA ALIMENTARE: È UNA MALATTIA" sovrapposto in basso
  - **Colonna destra (45%):** 3 card in colonna verticale per Cos'è / Sintomi / Cosa evitare
  - Ogni card destra: icona cerchio `bg-accent` + titolo `font-semibold` + testo body
  - Su mobile: infografica sopra, card sotto in colonna singola

---

## 🟡 ENHANCEMENT #1 — Hover Effects su tutti i componenti interattivi

- [ ] **E1.1** `RestaurantCard`: aggiunge `group` su wrapper, `hover:shadow-xl hover:scale-[1.02] transition-all duration-200 ease-out`
- [ ] **E1.2** `FavoriteButton`: `hover:scale-110 active:scale-95 transition-transform duration-150`
- [ ] **E1.3** `NavLink`: `relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300` (underline animato)
- [ ] **E1.4** `Button primary`: `hover:brightness-110 active:brightness-95 hover:-translate-y-0.5 transition-all duration-150`
- [ ] **E1.5** `AccordionItem`: `hover:bg-black/5 transition-colors duration-150` sul trigger
- [ ] **E1.6** `FooterLink`: `hover:text-accent hover:translate-x-1 transition-all duration-200`
- [ ] **E1.7** `MapSidebarItem`: `hover:bg-accent/20 cursor-pointer transition-colors duration-150`
- [ ] **E1.8** `CeliachiaInfoCard`: `hover:shadow-md hover:-translate-y-1 transition-all duration-200`

---

## 🟡 ENHANCEMENT #2 — UX ispirata a neverhack.com/it

### Scroll Animations (Intersection Observer)
- [ ] **E2.1** Crea `src/hooks/useInView.ts`:
  - Wrapper attorno a `IntersectionObserver`
  - Props: `threshold?: number` (default 0.15), `once?: boolean` (default true)
  - Ritorna `{ ref, inView }` — esporta da `src/hooks/index.ts`

- [ ] **E2.2** Crea `src/components/ui/AnimateOnScroll/AnimateOnScroll.tsx`:
  - Props: `children`, `animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'`, `delay?: number`
  - Usa `useInView` — applica classe CSS quando `inView === true`
  - Aggiunge in `tailwind.config.ts`:
    ```ts
    'fade-up':    { from: { opacity:'0', transform:'translateY(32px)' }, to: { opacity:'1', transform:'translateY(0)' } },
    'slide-left': { from: { opacity:'0', transform:'translateX(-32px)' }, to: { opacity:'1', transform:'translateX(0)' } },
    'slide-right':{ from: { opacity:'0', transform:'translateX(32px)' }, to: { opacity:'1', transform:'translateX(0)' } },
    ```

- [ ] **E2.3** Avvolgi con `<AnimateOnScroll animation="fade-up">` ogni `SectionHeader` della homepage
- [ ] **E2.4** Avvolgi `RestaurantCard` con `<AnimateOnScroll animation="fade-up" delay={index * 80}>` (staggered)
- [ ] **E2.5** Avvolgi le 2 colonne di `AboutSection` con `slide-left` / `slide-right`
- [ ] **E2.6** Avvolgi le 3 `CeliachiaInfoCard` con `fade-up` staggerato

### Stats Counter (ispirato ai numeri animati di neverhack)
- [ ] **E2.7** Crea `src/hooks/useCountUp.ts`:
  - Anima un numero da 0 a `target` in `duration` ms usando `requestAnimationFrame`
  - Parte solo quando il componente entra in viewport (`useInView`)
  - Esporta da `src/hooks/index.ts`

- [ ] **E2.8** Crea `src/components/ui/StatCounter/StatCounter.tsx`:
  - Props: `value: number`, `suffix?: string`, `label: string`
  - Usa `useCountUp` + `useInView`
  - Stile: numero grande `text-5xl font-bold text-accent`, label `text-sm text-textDark/60`

- [ ] **E2.9** Aggiungi `StatsRow` nella sezione "Chi Siamo" (sotto le colonne):
  - 3 stat: `50+ Ristoranti certificati`, `1.200+ Recensioni`, `4.8★ Rating medio`
  - 3 colonne con `StatCounter`, divider verticali su desktop

### Navbar Scroll Behavior (come neverhack)
- [ ] **E2.10** Crea `src/hooks/useScrolled.ts`:
  - Ritorna `isScrolled: boolean` (true dopo 80px di scroll)
  - Esporta da `src/hooks/index.ts`

- [ ] **E2.11** Aggiorna `Navbar.tsx`:
  - Quando `isScrolled === true`: aggiunge `shadow-lg backdrop-blur-md bg-primary/95` e riduce altezza da `h-20` a `h-14`
  - Transizione `transition-all duration-300`

### Smooth Section Scroll
- [ ] **E2.12** `NavLink` usa `href="#sectionId"` — aggiungi `id` a ogni sezione (`#chi-siamo`, `#celiaci`, `#mappa`, `#faq`)
- [ ] **E2.13** Aggiungi `scroll-behavior: smooth` in `index.css` sul tag `html`

---

## 🟡 ENHANCEMENT #3 — Responsiveness mobile-first

- [ ] **E3.1** Navbar mobile: hamburger icon (`Bars3Icon`), drawer da sinistra con overlay scuro, chiusura con `X` o swipe
- [ ] **E3.2** Hero: altezza `min-h-[80vh] md:min-h-screen`, titolo `text-3xl md:text-5xl lg:text-6xl`
- [ ] **E3.3** `SearchBar`: larghezza `w-full max-w-2xl mx-auto`, su mobile occupa `w-[90vw]`, bottone "Filtri" rimane sempre visibile
- [ ] **E3.4** `FeaturedSection` grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- [ ] **E3.5** `RestaurantCarousel`: su mobile mostra 1.2 card (peek del prossimo), su tablet 2.2, su desktop 3
- [ ] **E3.6** `AboutSection`: `flex-col md:flex-row`, virgolette riducono su mobile `text-6xl md:text-8xl`
- [ ] **E3.7** `CeliachiaSection`: `flex-col lg:flex-row`, infografica `w-full lg:w-[55%]`
- [ ] **E3.8** `MapSection`: su mobile mostra solo CTA "Apri la mappa" senza anteprima mappa (nascosta con `hidden md:block`)
- [ ] **E3.9** `Footer`: `grid-cols-1 md:grid-cols-3`, gap `gap-12`
- [ ] **E3.10** Aggiungi `<meta name="viewport" content="width=device-width, initial-scale=1">` in `index.html` se mancante

---

## 🟡 ENHANCEMENT #4 — Micro-interazioni UI extra

- [ ] **E4.1** `SearchBar`: quando l'input è focused, bordo diventa `ring-2 ring-accent` con transizione
- [ ] **E4.2** `FavoriteButton`: al toggle, piccola animazione `scale 1 → 1.3 → 1` (keyframe `heart-pop`)
- [ ] **E4.3** `AccordionItem`: icona chevron ruota `rotate-0 → rotate-90` con `transition-transform duration-300`
- [ ] **E4.4** `Button primary`: aggiunge `ripple effect` al click — pseudo-elemento circolare che si espande
- [ ] **E4.5** `RestaurantCard` immagine: `hover:scale-105` sull'`<img>` (con `overflow-hidden` sul container)
- [ ] **E4.6** Scroll-to-top button: appare quando `scrollY > 400`, `fixed bottom-6 right-6`, bottone circolare `bg-accent`, `hover:scale-110`

---

## ✅ QA FINALE

- [ ] **QA.1** Verifica visiva sezione per sezione con `Home-Main.jpg` aperto affianco
- [ ] **QA.2** Testa search bar: digita "pizza" → le card si filtrano; svuota → tornano tutte
- [ ] **QA.3** Testa apertura/chiusura overlay mappa: click CTA, tasto ESC, click backdrop
- [ ] **QA.4** Verifica footer visibile su tutte le pagine/rotte
- [ ] **QA.5** Verifica hover su: card, bottoni, nav link, footer link, accordion
- [ ] **QA.6** Testa scroll animations su Chrome DevTools con throttle CPU 4x
- [ ] **QA.7** Testa a 375px (iPhone SE), 768px (iPad), 1280px (Desktop), 1920px (Large)
- [ ] **QA.8** `tsc --noEmit` → zero errori
- [ ] **QA.9** Nessun file > 100 righe (`find src -name "*.tsx" | xargs wc -l | sort -rn | head -20`)
- [ ] **QA.10** Lighthouse score: Performance ≥ 85, Accessibility ≥ 90
