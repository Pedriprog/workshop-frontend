# Product Requirements Document (PRD)
## SpigaZero — Piattaforma di Ricerca Ristoranti Gluten-Free

**Versione:** 1.0  
**Data:** Aprile 2026  
**Autore:** Team SpigaZero  

---

## 1. Panoramica del Prodotto

### 1.1 Vision
SpigaZero è una piattaforma web che aiuta le persone celiache e gluten-sensitive a trovare ristoranti sicuri nella provincia di Lecce (e dintorni), con recensioni, informazioni e servizi su misura.

### 1.2 Mission Statement
> "Siamo due ragazzi salentini con una missione chiara: rendere la nostra terra un luogo dove la celiachia non sia più un ostacolo, ma un modo sereno di vivere il buon cibo e la convivialità."

### 1.3 Problema
Le persone celiache faticano a trovare ristoranti sicuri e certificati. La mancanza di informazioni aggregate e affidabili porta a esperienze negative o a rinunce sociali.

### 1.4 Soluzione
Un'unica piattaforma geolocalizzata che aggrega ristoranti senza glutine, con recensioni della community, mappe interattive e contenuti educativi sulla celiachia.

---

## 2. Utenti Target

| Segmento | Descrizione |
|---|---|
| **Celiaci** | Persone con diagnosi ufficiale di celiachia, bisogno di sicurezza alimentare assoluta |
| **Gluten-sensitive** | Persone con intolleranza al glutine non celiaca |
| **Familiari/Accompagnatori** | Chi organizza uscite con persone celiache |
| **Turisti** | Visitatori della provincia di Lecce con esigenze gluten-free |
| **Ristoratori** | Esercenti che vogliono farsi trovare dai clienti celiaci |

---

## 3. Funzionalità Principali

### 3.1 Core Features (MVP)

#### F-01 — Ricerca Ristoranti
- Campo di ricerca testuale ("Dove vuoi mangiare?")
- Filtri avanzati (distanza, tipologia cucina, valutazione, servizi)
- Risultati geolocalizzati in base alla posizione dell'utente

#### F-02 — Scheda Ristorante
- Nome, indirizzo, numero di telefono
- Foto del locale
- Valutazione media con numero di recensioni (es. ★★★★★ 100)
- Informazioni su servizi gluten-free offerti
- Indicazioni stradali

#### F-03 — Sezione "In Evidenza"
- Carousel/griglia dei locali più apprezzati dalla community
- Ordinamento per valutazione e popolarità
- Accesso rapido con "Vedi tutti"

#### F-04 — Mappa Interattiva
- Visualizzazione cartografica dei ristoranti in provincia di Lecce
- Pin/marker per ogni ristorante
- Sidebar con lista ristoranti associata alla mappa
- Preview ristorante al click sul marker

#### F-05 — Area Educativa "Cosa significa essere Celiaci?"
- Infografica sulla celiachia (fonti di glutine, reazione del corpo, sintomi)
- Sezioni: Cos'è, Sintomi, Cosa evitare
- Messaggio chiave: "Non una scelta alimentare: è una malattia"

#### F-06 — FAQ
- Come ricevere i buoni mensili per i prodotti senza glutine
- Dove acquistare prodotti usando i buoni
- Diritto a pasti senza glutine nelle mense scolastiche o pubbliche
- Perché i prodotti senza glutine costano di più

#### F-07 — Autenticazione Utente
- Login/Registrazione (pulsante "Accedi" in navbar)
- Profilo utente per gestire preferiti e recensioni

### 3.2 Feature Future (Post-MVP)

- Sistema di recensioni e rating utente
- Notifiche push per nuovi ristoranti in zona
- App mobile (iOS/Android)
- Area riservata per ristoratori (dashboard di gestione)
- Badge di certificazione AIC per i ristoranti verificati
- Integrazione con AIC per validazione

---

## 4. Requisiti Non Funzionali

| Categoria | Requisito |
|---|---|
| **Performance** | Caricamento pagina < 3s su connessione 4G |
| **Accessibilità** | Conformità WCAG 2.1 AA |
| **Responsività** | Mobile-first, compatibile con tutti i dispositivi |
| **SEO** | Ottimizzazione per ricerche locali (Lecce, provincia) |
| **Sicurezza** | HTTPS, GDPR compliance, protezione dati utenti |
| **Affidabilità** | Uptime ≥ 99.5% |

---

## 5. Integrazioni e Link Utili

- **AIC** — Associazione Italiana Celiachia (associazioneitalianaceliachi.it)
- **RNA** — Registro Nazionale Alimenti senza Glutine
- **Legge 501/2006** — Norme per la protezione dei soggetti malati di celiachia
- **Ministero della Salute** — Sezione Celiachia

---

## 6. Metriche di Successo (KPI)

- Numero di ristoranti censiti (target MVP: 50+)
- Utenti registrati attivi mensili
- Numero di ricerche effettuate
- Valutazione media degli utenti sulla piattaforma (target: ≥ 4/5)
- Tasso di ritorno degli utenti (retention mensile)

---

## 7. Roadmap

| Fase | Descrizione | Timeline |
|---|---|---|
| **Alpha** | MVP con ricerca, mappa, schede ristoranti | Q2 2026 |
| **Beta** | Recensioni utenti, autenticazione, FAQ | Q3 2026 |
| **v1.0** | App mobile, dashboard ristoratori | Q4 2026 |
| **v2.0** | Espansione geografica (Puglia) | Q1 2027 |

---

## 8. Vincoli e Assunzioni

- Focus geografico iniziale: **Lecce e provincia**
- Il contenuto sui ristoranti è inserito manualmente o tramite form per i ristoratori
- La piattaforma non garantisce la certificazione medica dei ristoranti, ma fornisce informazioni basate su recensioni della community
