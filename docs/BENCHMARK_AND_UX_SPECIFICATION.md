# Benchmark Visual & Especificación de Principios de Diseño / UX (Lovable Benchmark)

**Proyecto:** NoosAdvisory Corporate Landing Page  
**Task Packet:** `TP-07: Design & UX Polish (Lovable Benchmark & Executive Identity)`  
**Autor:** Solution Architect  
**Fecha:** 2026-08-27  

---

## 1. Análisis del Benchmark (Lovable.dev & Modern AI Product Platforms)

Lovable y las plataformas modernas de software de IA se caracterizan por una estética de **"Beautiful Defaults"** y una experiencia tipo producto digital que genera impacto inmediato. Los elementos clave identificados son:

| Dimensión | Patrón en Benchmark (Lovable) | Adaptación Ejecutiva para NoosAdvisory |
|---|---|---|
| **Atmósfera & Canvas** | Dark mode profundo (`#07090E`), grillas sutiles de fondo (grid line/dot), luces radiales multicapa difuminadas (80-100px blur). | Fondo sobrio oscuro con sutil textura de grilla técnica y halos atmosféricos en índigo, violeta y cian que aportan profundidad sin sobrecargar. |
| **Composición & Whitespace** | Gran ritmo vertical (secciones con 100-120px de padding), títulos con espacio para respirar, bloques modulares bien delimitados. | Jerarquía visual clara con espaciado generoso, separación inequívoca de bloques y reducción de densidad visual innecesaria. |
| **Tipografía** | Títulos de alto contraste con tracking ajustado (`-0.03em`), combinación de sans-serif display moderna + monoespaciada para detalles técnicos. | `Outfit` / `Inter Display` (700/800) para encabezados corporativos de alto impacto, `Inter` (400/500/600) para texto principal, y `JetBrains Mono` para etiquetas técnicas y de proceso. |
| **Presentación tipo Producto** | No se usan solo cajas de texto plano; se presentan **mockups interactivos, ventanas de producto con chrome de aplicación (macOS dots, tabs, canvas de trabajo, terminal)**. | **Showcase de AAGm y Portafolio con UI tipo "Workspace Canvas"**: ventana con barra superior de app, badges de estado en vivo, visualización de roles y pipeline trazable. |
| **Tratamiento de Bordes & Cards** | Bordes ultra finos (1px) con gradientes de luz sutiles (`border-glow`), tarjetas con glassmorphism multicapa y fondos semi-translúcidos. | Tarjetas con bordes sutiles (`rgba(255,255,255,0.08)`), esquinas redondeadas (`16px` a `24px`), efecto de iluminación interactivo al mover el cursor y capas de elevación nítidas. |
| **Microinteracciones** | Hover states con micro-elevación (`translateY(-2px)`), brillo dinámico, transiciones suaves de pestañas y botones con gradientes vivos. | Microinteracciones precisas, transiciones de 250ms cubic-bezier, tabs interactivos con pills iluminados y feedback visual en todos los elementos clickeables. |
| **Tono & Identidad** | Dinámico, orientado a producto, tecnológico y minimalista. | **Equilibrio Estratégico:** Calidad visual y fluidez de producto moderno + Credibilidad, sobriedad y rigor de una firma de advisory de IA (*Negocio + Tecnología + IA + Ejecución*). |

---

## 2. Principios de Diseño & UX para NoosAdvisory

### Principio 1: "Showcase tipo Producto, no solo Declaraciones de Texto"
- El caso **AAGm (Project 01)** y el portafolio no deben verse como simples cajas de texto con viñetas. Deben presentarse dentro de una **interfaz de producto simulada (Workspace Studio)** que exhiba:
  - Header de ventana con controles de sistema y selector de proyecto activo.
  - Tablero de gobernanza en vivo: roles activos (`Sponsor`, `Solution Architect`, `AI Developer`, `QA`), estados de task packets y terminal de evidencia.
  - Comparativa interactiva con selector visual claro (*Sin AAGm vs Con AAGm*).

### Principio 2: "Jerarquía Visual & Ritmo de Lectura Ejecutivo (60-90 Segundos)"
- Estructura visual guiada por bloques de alto impacto:
  1. **Header Glass:** Navegación flotante y limpia.
  2. **Hero:** Badge dinámico de estado + Título tipográfico de impacto + Lead ejecutivo + Métricas en tarjeta destacada con acento de gradiente.
  3. **What We Do (Qué Hacemos):** 3 tarjetas de servicio con iconos vectoriales enriquecidos, etiquetas de entregable y micro-resaltado.
  4. **Featured Work (AAGm Studio):** Mockup interactivo centralizado que funciona como vitrina tecnológica.
  5. **Our Approach (Metodología 6 Fases):** Pipeline visual continuo conectado por líneas de flujo iluminadas (`01 → 02 → 03 → 04 → 05 → 06`).
  6. **Capabilities Matrix:** Grid 3x2 con diseño de micro-tarjetas tecnológicas con badges de frameworks y modelos.
  7. **About & Value Pillars:** Tarjeta dividida con visión de negocio y 4 pilares en badges de alto contraste.
  8. **Executive Conversion Block (CTA):** Card central con borde de gradiente neón suave, canales directos y SLA de respuesta.

### Principio 3: "Bordes Refinados, Iluminación y Glassmorphism"
- Uso de variables CSS para consistencia:
  - Bordes translúcidos con micro-reflejo en la parte superior (`linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.02))`).
  - Luces ambientales suaves de fondo con `radial-gradient` y `blur(90px)`.
  - Tarjetas con iluminación dinámica al mover el mouse (`--mouse-x`, `--mouse-y`).

### Principio 4: "Preservación Estricta del Contenido Validado"
- Se mantiene el 100% de los textos, propuestas de valor, narrativa de AAGm, capacidades, datos de contacto y métricas aprobados por el Sponsor en Discovery.
- La transformación es puramente estética, estructural y de experiencia de usuario.

---

## 3. Criterios de Aceptación Verificables para TP-07

| ID | Criterio de Aceptación | Método de Verificación |
|---|---|---|
| **CRIT-01** | **Hero & Canvas:** El fondo integra textura de grilla técnica sutil y halos de luz difusos. El Hero incluye badge con punto pulsante, tipografía con gradiente calibrado y barra de métricas con tratamiento de cristal translúcido y bordes de alta definición. | Inspección visual en navegador (Desktop & Mobile) |
| **CRIT-02** | **AAGm Workspace Showcase:** La sección de portafolio se estructura como un **Mockup de Plataforma/Studio** (barra superior de ventana con botones de control, tabs redondeados, panel de gobernanza visual con roles y pipeline interactivo). | Interacción funcional con tabs y validación visual de componentes de producto |
| **CRIT-03** | **Enfoque de 6 Fases Conectado:** Las 6 fases de la metodología se muestran con indicadores secuenciales, línea de conexión visual sutil y tarjetas de fase con micro-iluminación al pasar el cursor. | Inspección de hover states y flujo secuencial |
| **CRIT-04** | **Capabilities Matrix:** Las 6 capacidades disponen de iconos modernos en contenedores translúcidos coloreados, tipografía jerarquizada y badges de tecnología limpios. | Inspección visual en grid responsivo |
| **CRIT-05** | **Executive CTA & Contact:** El bloque de contacto utiliza un contenedor con gradiente perimetral suave, 3 tarjetas de canal de contacto accesibles y botón de acción principal de alta visibilidad. | Verificación de contraste y funcionalidad de enlace mailto |
| **CRIT-06** | **Microinteracciones & Transiciones:** Transiciones fluidas en botones, tarjetas y tabs (200-300ms ease/cubic-bezier). Cero saltos de layout o parpadeos. | Interacción en browser |
| **CRIT-07** | **Responsive Cross-Device:** Adaptación fluida en resoluciones Desktop (1440px / 1200px), Tablet (768px - 1024px) y Mobile (375px - 414px). Menú drawer móvil accesible y táctil. | Validación mediante Browser en múltiples viewports |
| **CRIT-08** | **Preservación de Contenido:** Ningún texto de negocio válido es eliminado o alterado sustancialmente respecto al brief aprobado. | Comparación textual de baseline vs resultado |

---

## 4. Plan de Implementación de TP-07

1. **Fase 1: Overhaul de la Hoja de Estilos (`public/css/style.css`):**
   - Incorporar gradientes de borde, texturas de grilla técnica, estilos de ventana/mockup de producto (macOS window controls, studio canvas, active pipeline cards), tipografía monoespaciada para micro-datos, y animaciones de resplandor.
2. **Fase 2: Reestructuración de Componentes Visuales (`public/index.html`):**
   - Convertir la sección AAGm en el **AAGm Governance Studio Showcase** (mockup visual enriquecido).
   - Añadir indicadores de conexión y badges enriquecidos a la metodología y capacidades.
   - Enriquecer la tarjeta CTA y el Hero con elementos de alta definición visual.
3. **Fase 3: Refinamiento de Microinteracciones (`public/js/main.js`):**
   - Asegurar tracking dinámico de cursor sobre tarjetas, animación de tabs de producto y gestión del menú móvil.
4. **Fase 4: Validación Visual en Browser & Evidencia:**
   - Cargar la landing page en el browser en viewports desktop y mobile.
   - Capturar evidencia fotográfica/capturas en `evidence/TP-07_EVIDENCE.md`.
