# Impact Analysis: NoosAdvisory Visual Design System v1.0

**Fecha:** 2026-08-27  
**Autor:** Solution Architect  
**Objetivo:** Evaluar el impacto de la adopción de la baseline oficial **NoosAdvisory Visual Design System v1.0** (*Executive Intelligence / Modern Clean*) sobre la implementación actual de la Landing Page.

---

## 1. Resumen Ejecutivo del Impacto

La implementación previa fue desarrollada bajo una estética predominantemente oscura y saturada (*dark-mode con acentos violeta/rosa y bordes neón*).  
La nueva baseline aprobada por el Sponsor exige una dirección **Executive Intelligence / Modern Clean**:
- Fondos predominantemente claros (`#FFFFFF` y `#F7F9FC`).
- Distribución cromática corporativa equilibrada (**70% Neutral/White, 20% Midnight Navy, 7% Corporate Blue, 3% Intelligent Teal**).
- Tipografía unificada exclusivamente en **Inter** (eliminando fuentes display secundarias como Outfit).
- Presentación de productos y diagramas con estética limpia, profesional y basada en evidencia real.
- Cero efectos de ciencia ficción o gradientes estridentes; sombras sutiles (*soft elevation*) y abundante espacio negativo (*whitespace*).
- Accesibilidad formal **WCAG 2.2 AA** y optimización para **SEO + AI Discoverability** (JSON-LD estructurado y HTML semántico riguroso).

---

## 2. Matriz de Impacto por Componente

| Componente Actual | Estado Actual (Dark / Lovable) | Nueva Baseline v1.0 (Modern Clean) | Clasificación de Impacto |
|---|---|---|---|
| **Canvas & Atmósfera** | Fondo negro `#06080E`, halos oscuros difuminados, grilla oscura. | Fondo blanco `#FFFFFF`, fondos alternos `#F7F9FC`, espacio negativo amplio, sin halos neón. | **CONFLICTO DIRECTO** (Requiere reemplazo completo) |
| **Paleta de Colores** | Índigo `#6366F1`, Violeta `#A855F7`, Rosa `#EC4899`, Cian. | Midnight Navy `#0B1930`, Corporate Blue `#185ADB`, Intelligent Teal `#00A896`, Graphite `#344054`, Slate `#667085`, Border `#DDE3EA`. | **CONFLICTO DIRECTO** (Reemplazo total de tokens CSS) |
| **Tipografía** | Mezcla de `Outfit` (display) + `Inter` (body) + `JetBrains Mono`. | **Inter** como familia tipográfica única con escala jerárquica estricta (Display 56-64px, H1 48-56px, H2 36-44px, H3 24-30px, Body 16-18px). | **MODIFICACIÓN** (Estandarización a Inter) |
| **Header & Navegación** | Barra de navegación oscura translúcida. | Header limpio y claro con logo en Midnight Navy (`#0B1930`), acento Corporate Blue y badge discreto. | **MODIFICACIÓN** |
| **Hero Section** | Fondo oscuro, texto gradiente neón, métricas con resplandor neón. | Fondo claro `#FFFFFF`, titular de alto impacto en Midnight Navy `#0B1930`, lead en Graphite `#344054`, botones primario en Corporate Blue `#185ADB` y secundario limpio, métricas en card con soft elevation. | **MODIFICACIÓN INTEGRAL** |
| **What We Do (Qué Hacemos)** | Tarjetas oscuras translúcidas con iconos neón. | Tarjetas blancas `#FFFFFF` con bordes sutiles `#DDE3EA`, iconos geométricos y acentos en Corporate Blue / Teal. | **MODIFICACIÓN** |
| **Portafolio & Caso AAGm** | Mockup de consola/terminal oscuro estilo desarrollador. | Presentación de producto clara (*Challenge → Approach → Solution → AI → Outcome*) con flujo metodológico (*Entender → Definir → Diseñar → Construir → Validar → Evolucionar*), diagramas propios limpios y badges institucionales. | **MODIFICACIÓN ESTRUCTURAL** |
| **Our Approach (Metodología)** | 6 tarjetas oscuras con micro-iluminación neón. | 6 fases conectadas en fondo `#F7F9FC`, numeración sobria en Midnight Navy, entregables en Intelligent Teal y bordes limpios `#DDE3EA`. | **MODIFICACIÓN** |
| **Capabilities Matrix** | Grid oscuro con acentos violetas y tags oscuros. | Matriz 3x2 en tarjetas blancas con iconos lineales limpios, descripciones legibles y tags en Slate `#667085` sobre fondo sutil. | **MODIFICACIÓN** |
| **Sobre NoosAdvisory** | Card oscura con 4 pilares en cajas translúcidas. | Sección amplia en `#F7F9FC`, titular en Midnight Navy, 4 pilares ejecutivos estructurados con soft elevation. | **MODIFICACIÓN** |
| **Contacto & CTA** | Caja con gradiente neón y bordes iluminados. | Bloque de conversión ejecutivo en `#FFFFFF` o `#F7F9FC`, botón principal Corporate Blue `#185ADB`, canales de contacto claros y compromiso SLA `< 24h`. | **MODIFICACIÓN** |
| **Footer** | Footer oscuro `#06080E`. | Footer institucional en Midnight Navy `#0B1930`, texto secundario en Slate `#667085`, enlaces claros y atribución a AAGm v1.9. | **PRESERVADO / AJUSTADO A PALETA** |
| **Contenido & Propuesta de Valor** | Textos aprobados por el Sponsor en Discovery. | Se mantiene el 100% de los textos, narrativa de AAGm, propuesta de valor (*Negocio + Tecnología + IA + Ejecución*) y datos de contacto. Cero invención de métricas. | **PRESERVADO AL 100%** |
| **Accesibilidad & SEO** | Estructura semántica básica. | Incorporación explícita de **WCAG 2.2 AA** (ratios de contraste >= 4.5:1, focus states visibles) y **SEO + AI Discoverability** (Schema.org JSON-LD). | **NUEVO REQUERIMIENTO / MEJORA** |

---

## 3. Elementos Identificados Explícitamente

### A. Elementos que cumplen y deben PRESERVARSE:
1. Toda la narrativa de negocio, posicionamiento (*Negocio + Tecnología + Inteligencia Artificial + Ejecución*) y propuesta de valor del Sponsor.
2. La arquitectura por secciones: Header → Hero → Qué Hacemos → Portafolio / AAGm → Nuestro Enfoque → Capacidades → Sobre Nosotros → Contacto/CTA → Footer.
3. El caso AAGm como Project 01 del portafolio y la demostración viva de que el sitio fue construido bajo AAGm.
4. Las microinteracciones funcionales básicas (scroll suave, toggle de menú móvil, cambio de pestañas de proyectos).

### B. Elementos que requieren MODIFICACIÓN:
1. Hoja de estilos completa (`public/css/style.css`): migración de dark mode a paleta clara institucional (`#0B1930`, `#185ADB`, `#00A896`, `#FFFFFF`, `#F7F9FC`, `#344054`, `#667085`, `#DDE3EA`).
2. Reemplazo de la tipografía `Outfit` por `Inter` en todos los encabezados y display text.
3. Tratamiento de sombras: eliminación de resplandores neón y adopción de *Soft elevation* (`0 2px 4px rgba(11,25,48,0.04), 0 12px 24px rgba(11,25,48,0.06)`).
4. Adaptación de las tarjetas y diagramas de AAGm hacia una estética de producto corporativo claro y diagrams propios.
5. Flujo metodológico actualizado a la nomenclatura: **Entender → Definir → Diseñar → Construir → Validar → Evolucionar**.

### C. Elementos que deben ELIMINARSE:
1. Halos de luz de fondo oscuros/neón (`.blob-1`, `.blob-2`, `.blob-3` con colores violeta/rosa).
2. Efectos de cursor neón y bordes brillantes estridentes.
3. Código de consola/terminal oscuro simulado con texto verde estilo hacker (reemplazarlo por diagramas visuales y componentes de producto limpios).

### D. Conflictos Directos Detectados:
1. **Conflicto de Fondo / Inversión de Contraste:** Todo el sitio estaba montado sobre texto blanco sobre fondo negro; debe transformarse a texto Midnight Navy/Graphite sobre fondo blanco y gris suave.
2. **Conflicto de Familias Tipográficas:** La inclusión previa de `Outfit` y `JetBrains Mono` entra en conflicto con la regla de familia única `Inter` del Design System v1.0.
3. **Conflicto de Estilo Gráfico de IA:** Los degradados violeta/rosa/cyan del benchmark anterior violan la regla cromática estricta del 70/20/7/3 con acento tecnológico único en Intelligent Teal (`#00A896`).

---

## 4. Estrategia de Mitigación y Transición

- **Riesgo de regresión de contenido:** CERO. El contenido se mantendrá intacto, aplicando la reestructuración exclusivamente a clases, tokens y markup semántico.
- **Riesgo de accesibilidad:** Se realizarán validaciones de contraste de color bajo la norma WCAG 2.2 AA (Graphite `#344054` sobre White `#FFFFFF` tiene un ratio de contraste de ~9.5:1, superando ampliamente el estándar de 4.5:1).
- **Riesgo de SEO / Indexación:** Se incorporará un bloque estructurado `<script type="application/ld+json">` con schema `ProfessionalService` y `Organization` para máxima descubribilidad por agentes de IA y motores de búsqueda.
