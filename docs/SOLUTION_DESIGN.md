# Solution Design: NoosAdvisory Corporate Landing Page

## Architecture and Boundaries
- **Runtime & Delivery Model:** High-performance static web application served via global CDN (Firebase Hosting).
- **Design System Baseline:** **NoosAdvisory Visual Design System v1.0** (*Executive Intelligence / Modern Clean*).
- **Frontend Architecture:** 
  - Semantic HTML5 structure with strict heading hierarchy (`H1` → `H2` → `H3`).
  - Modular CSS with official Design Tokens (custom properties) based on the 70/20/7/3 chromatic distribution.
  - Inter as single typographic family.
  - Lightweight Vanilla JavaScript for microinteractions, tab switching, and mobile drawer controls.
  - SEO & AI Discoverability: Semantic markup, Open Graph metadata, Schema.org JSON-LD (`ProfessionalService` / `Organization`).

## Design Tokens & Palette (Design System v1.0)
- **Primary / Institution:** Midnight Navy `#0B1930` (Headers, titles, high-hierarchy elements, footer)
- **Action / Interactive:** Corporate Blue `#185ADB` (Primary CTAs, links, active navigation)
- **AI Signature:** Intelligent Teal `#00A896` (AI concepts, highlights, indicators, technology icons)
- **Neutral Backgrounds:** White `#FFFFFF` (Main surface), Soft Background `#F7F9FC` (Alternating sections)
- **Neutral Typography & Borders:**
  - Graphite `#344054` (Body copy, secondary text)
  - Slate `#667085` (Metadata, labels, auxiliary text)
  - Border `#DDE3EA` (Discrete section dividers, card borders)
- **Shadows:** Soft elevation (`0 2px 4px rgba(11,25,48,0.04), 0 12px 24px rgba(11,25,48,0.06)`)
- **Typography Scale (Inter):**
  - Display / Hero: 56–64px (SemiBold / Bold)
  - H1: 48–56px (600–700)
  - H2: 36–44px (600)
  - H3: 24–30px (600)
  - Body Large: 18–20px (Line height 1.5–1.6)
  - Body: 16–18px (Line height 1.5–1.7)
  - Small / Metadata: 13–14px

## Key Components & UI Specifications
1. **Clean Executive Header:** White background, Midnight Navy branding with Intelligent Teal dot accent, navigation links, and Corporate Blue CTA.
2. **Spacious Hero Section:** High-contrast Inter headline in Midnight Navy, Graphite lead text, Corporate Blue primary button, clean frosted metrics card with Soft elevation.
3. **What We Do (Qué Hacemos):** 3 white cards with discrete `#DDE3EA` borders, clean geometric icons, and structured deliverables.
4. **Featured Work & AAGm Case Study:**
   - Conceptual framework: *Challenge → Approach → Solution → AI → Outcome*.
   - AAGm 6-step methodology: *Entender → Definir → Diseñar → Construir → Validar → Evolucionar*.
   - Clean product-first diagram cards and evidence highlight.
5. **Our Approach (Metodología):** 6 connected steps on Soft Background `#F7F9FC` with Midnight Navy step numbers and Intelligent Teal output tags.
6. **Capabilities Matrix:** 3x2 grid of clean white cards with linear geometry icons.
7. **About NoosAdvisory:** Corporate value statement with 4 strategic pillars (*Foco en Negocio, Velocidad con Rigor, Metodología Propia, Alianza Estratégica*).
8. **Executive Conversion Block (CTA):** Structured contact channels with `<24h` SLA and direct engagement options.
9. **Institutional Footer:** Midnight Navy `#0B1930` background, white headers, slate links, copyright, and AAGm v1.9 methodology credit.

## Accessibility & Performance Standards
- **WCAG 2.2 AA Compliance:** Color contrast ratio >= 4.5:1 for all text, visible focus rings on interactive elements, keyboard accessibility.
- **Performance:** Zero build pipeline overhead, fast CDN delivery, instant load time.

## Environments & Deploy
- **Local:** Local HTTP server / browser.
- **Production:** Firebase Hosting (`noosadvisory`).
