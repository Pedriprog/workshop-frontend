# Design Document
## SpigaZero — Specifiche di Design UI/UX

**Versione:** 1.0  
**Data:** Aprile 2026  
**Autore:** Team SpigaZero  

---

## 1. Design System

### 1.1 Brand Identity

**Nome:** SpigaZero  
**Concept:** "Spiga" richiama il grano (il nemico della celiachia), "Zero" indica l'assenza di glutine. Il brand comunica inclusione, fiducia e convivialità mediterranea.

**Logo:** Icona stilizzata di una spiga di grano con foglia, in giallo/verde, accompagnata dal testo "SpigaZero" in bold.

---

### 1.2 Palette Colori

| Token | Colore | Hex | Utilizzo |
|---|---|---|---|
| `--color-primary` | Viola scuro | `#3D2A6B` | Navbar, footer, CTA secondari |
| `--color-accent` | Giallo oro | `#F5C518` | CTA primari, highlights, badge |
| `--color-bg-light` | Crema/Beige | `#F9F5EE` | Background sezioni alternate |
| `--color-bg-dark` | Viola profondo | `#2B1D5C` | Footer, hero overlay |
| `--color-green` | Verde foglia | `#4CAF50` | Icone salute, tag gluten-free |
| `--color-text-dark` | Antracite | `#1A1A2E` | Testo principale |
| `--color-text-light` | Bianco | `#FFFFFF` | Testo su sfondi scuri |
| `--color-star` | Giallo rating | `#FFC107` | Stelle valutazione |

---

### 1.3 Tipografia

| Ruolo | Font | Peso | Dimensione |
|---|---|---|---|
| **Heading H1** | Sans-serif (es. Poppins) | Bold 700 | 36–48px |
| **Heading H2** | Sans-serif | SemiBold 600 | 28–32px |
| **Heading H3** | Sans-serif | SemiBold 600 | 20–24px |
| **Body** | Sans-serif | Regular 400 | 16px |
| **Caption / Label** | Sans-serif | Medium 500 | 13–14px |
| **CTA Button** | Sans-serif | Bold 700 | 16px |

---

### 1.4 Spaziatura e Grid

- **Grid:** 12 colonne, max-width `1280px`, gutter `24px`
- **Breakpoints:**
  - Mobile: `< 768px`
  - Tablet: `768px – 1024px`
  - Desktop: `> 1024px`
- **Spacing scale:** 4px base → 8, 16, 24, 32, 48, 64px

---

### 1.5 Componenti UI

#### Button
```
Primary:   bg #F5C518 | text #1A1A2E | border-radius 8px | padding 12px 24px
Secondary: bg transparent | border 2px #F5C518 | text #F5C518
Outline:   bg transparent | border 1px #3D2A6B | text #3D2A6B
```

#### Input / Search Bar
```
bg #FFFFFF | border 1px #E0D9F0 | border-radius 32px (pill)
placeholder: "Dove vuoi mangiare?" | padding 14px 20px
Icona lente a sinistra | Bottone "Filtri" a destra con icona funnel
```

#### Card Ristorante
```
bg #FFFFFF | border-radius 12px | box-shadow: 0 2px 12px rgba(0,0,0,0.08)
- Immagine top: aspect-ratio 16:9, border-radius 12px 12px 0 0
- Icona cuore (preferiti) in alto a destra sull'immagine
- Nome ristorante: font-weight 600, 16px
- Indirizzo: icona pin, testo grigio, 13px
- Telefono: icona phone, 13px
- Rating: stelle gialle + numero recensioni
```

#### Navbar
```
bg: #3D2A6B (viola scuro)
Logo a sinistra | Link navigazione centrati | Bottone "Accedi" a destra
Colore link: #FFFFFF | Hover: #F5C518
CTA "Accedi": bg #F5C518, text #1A1A2E, border-radius 8px
```

---

## 2. Architettura delle Pagine

### 2.1 Homepage — Struttura a Sezioni

```
┌─────────────────────────────────┐
│  NAVBAR                         │
│  Logo | Nav Links | Accedi CTA  │
├─────────────────────────────────┤
│  HERO SECTION                   │
│  Headline H1 + Subtitle         │
│  Search Bar (pill) + Filtri     │
│  Background: foto ristorante    │
├─────────────────────────────────┤
│  IN EVIDENZA                    │
│  Titolo + "Vedi tutti"          │
│  Grid 4 card ristoranti         │
├─────────────────────────────────┤
│  ALTRI RISTORANTI IN ZONA       │
│  Carousel orizzontale (5+ card) │
├─────────────────────────────────┤
│  CHI SIAMO                      │
│  Quote + testo + icona          │
│  bg: #F9F5EE                    │
├─────────────────────────────────┤
│  COSA SIGNIFICA ESSERE CELIACI? │
│  Infografica + 3 card info      │
│  (Cos'è / Sintomi / Cosa evit.) │
├─────────────────────────────────┤
│  MAPPA INTERATTIVA              │
│  Testo left + Mappa center      │
│  Sidebar lista ristoranti right │
│  CTA "Apri la mappa"            │
├─────────────────────────────────┤
│  FAQ                            │
│  Accordion 4 domande            │
│  bg: #F9F5EE                    │
├─────────────────────────────────┤
│  FOOTER                         │
│  Logo + Desc | Link utili |     │
│  Contatti | Social icons        │
│  bg: #2B1D5C                    │
└─────────────────────────────────┘
```

---

### 2.2 Sezione Hero

- **Headline:** "Trova Ristoranti senza glutine, vicino a te" — H1, colore bianco, font bold
- **Sottotitolo:** testo esplicativo, bianco, max 2 righe
- **Background:** foto ristorante con overlay scuro semi-trasparente (`rgba(0,0,0,0.5)`)
- **Search bar:** centrata, pill shape, sfondo bianco, ombra leggera
- **Filtri button:** giallo, icona filtro, a destra della search bar

---

### 2.3 Card Ristorante — Stati

| Stato | Comportamento |
|---|---|
| Default | Ombra leggera, immagine satura |
| Hover | Elevazione ombra, slight scale(1.02) |
| Preferito | Icona cuore piena in giallo |
| Loading | Skeleton placeholder |

---

### 2.4 Mappa Interattiva

- Provider mappa: OpenStreetMap / Leaflet.js (open source)
- Area default: Provincia di Lecce, Puglia
- Marker: icona personalizzata SpigaZero (spiga verde)
- Sidebar destra: lista ristoranti con thumbnail, nome, rating, distanza
- CTA primario: "Apri la mappa" — button giallo

---

### 2.5 FAQ — Accordion

- Ogni voce: domanda + icona chevron `>`
- Al click: espansione con risposta, chevron ruota 90°
- Bordo inferiore separatore tra le voci
- Background alternato chiaro (`#F9F5EE`)

---

## 3. Navigazione

### 3.1 Menu Principale

```
Chi siamo? | Cosa significa essere Celiaci? | Mappa | FAQ | [Accedi]
```

- Scroll-spy: voce attiva evidenziata in `#F5C518`
- Mobile: hamburger menu, drawer laterale su sfondo viola

---

## 4. Iconografia

- **Style:** outline icons, stroke 2px, rounded corners
- **Set consigliato:** Heroicons o Phosphor Icons
- **Icone chiave:**
  - 📍 Pin posizione (ristoranti)
  - 📞 Telefono
  - ⭐ Stella rating
  - ❤️ Preferiti
  - 🔍 Ricerca
  - 🗺️ Mappa
  - ⚠️ Glutine/allergia

---

## 5. Accessibilità

- Contrasto minimo testo/sfondo: **4.5:1** (WCAG AA)
- Focus ring visibile su tutti gli elementi interattivi
- Alt text su tutte le immagini
- Struttura heading semantica (H1 > H2 > H3)
- Accordion FAQ navigabile da tastiera
- Attributi `aria-label` su icone prive di testo

---

## 6. Animazioni e Micro-interazioni

| Elemento | Animazione | Durata |
|---|---|---|
| Card hover | scale(1.02) + box-shadow | 200ms ease |
| Accordion | height expand/collapse | 300ms ease-in-out |
| Carousel | slide orizzontale smooth | 400ms |
| CTA button hover | brightness(1.1) | 150ms |
| Marker mappa | bounce on load | 500ms |

---

## 7. Footer

**Struttura a 3 colonne:**
1. **SpigaZero:** logo + descrizione brand + social icons (Facebook, Twitter, Instagram, LinkedIn)
2. **Link Utili:** AIC, RNA, Legge 501/2006, Ministero della Salute - Celiachia
3. **Contatti:** email (info@spigaZero.it), telefono (+39 392 241 9102)

**Copyright:** © 2026 Spiga Site Inc. T-40 | All rights reserved

---
