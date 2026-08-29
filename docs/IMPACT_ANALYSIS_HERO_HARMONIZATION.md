# Impact Analysis: Final Visual & Editorial Harmonization (Hero PNG & Brand System v1.0)

**Fecha:** 2026-08-27  
**Autor:** Solution Architect  
**Precedencia de Reglas:**  
1. NoosAdvisory Brand System v1.0  
2. Imagen PNG aprobada del Hero (Composición)  
3. Contenido real y verificable de NoosAdvisory (Verdad)  
4. Implementación actual  
5. Libertad creativa  

---

## 1. Resumen Ejecutivo del Análisis

La referencia canónica aprobada por el Sponsor (PNG) establece una **composición asimétrica 45/55 para el Hero** con un panel interactivo/visual de AAGm a la derecha, 3 pilares estructurales debajo del contenido principal, iconografía lineal SVG estricta (cero emojis) y la erradicación de cualquier métrica, plazo o cliente no respaldado por evidencia empírica.

La implementación actual ya cuenta con los tokens cromáticos de Brand System v1.0 y la tipografía Inter, pero requiere:
1. **Reestructurar el Hero** a la composición 45/55 del PNG (eyebrow en Intelligent Teal, H1 *"Transformamos oportunidades de IA en <span style="color:#00A896">resultados reales.</span>"*, CTA primario y secundario con flechas, y los 3 pilares visuales alineados).
2. **Reemplazar la barra de métricas cuantitativas** (`3 a 5 días`, `100% trazable`, `< 24h SLA`) por los **3 Pilares Visuales Cualitativos** (*Estrategia + IA*, *Ejecución Real*, *Evidencia + Gobernanza*).
3. **Reemplazar todos los emojis** por una familia homogénea de iconos SVG lineales geométricos (stroke consistente, colores Midnight Navy / Corporate Blue / Intelligent Teal).
4. **Eliminar completamente "Project 02"** y cualquier referencia a proyectos futuros/hipotéticos, dejando a AAGm como el caso exclusivo y verificable en producción.
5. **Reconfigurar el panel visual de AAGm** a la estética del PNG: flujo metodológico visual (*Entender → Definir → Diseñar → Construir → Validar → Evolucionar*), roles de gobernanza y artefactos trazables, sin métricas inventadas ni logos de clientes no autorizados.
6. **Incorporar soporte `prefers-reduced-motion`** para accesibilidad WCAG 2.2 AA.

---

## 2. Clasificación Explícita de Elementos

### A. Elementos que se CONSERVAN (Cumplen y se Preservan):
* **Identidad y Tokens:** Paleta oficial (*Midnight Navy #0B1930, Corporate Blue #185ADB, Intelligent Teal #00A896, Graphite #344054, Slate #667085, Border #DDE3EA, Soft Background #F7F9FC, White #FFFFFF*).
* **Tipografía:** Familia única `Inter` con sus jerarquías y pesos.
* **Propuesta de Valor Principal:** *Negocio + Tecnología + Inteligencia Artificial + Ejecución*.
* **El Caso AAGm (Project 01):** La narrativa estructurada (*Challenge → Approach → Solution → AI → Outcome*) y el banner de demostración en vivo.
* **Secciones Estratégicas:** Qué Hacemos, Portafolio AAGm, Metodología (6 fases), Capacidades, Sobre Nosotros, Contacto, Footer.
* **Base Técnica:** HTML semántico, Schema.org JSON-LD, metadatos Open Graph, navegación responsive accesible.

### B. Elementos que DEBEN MODIFICARSE:
1. **Composición del Hero:**
   - De: Layout centrado vertical con barra de métricas inferior.
   - A: Composición asimétrica 45/55 (Izquierda: Eyebrow Teal, H1 en 2-3 líneas, Lead Graphite, 2 CTAs con flecha, 3 Pilares con iconos lineales. Derecha: Gran visual metodológico de AAGm con sutiles líneas de conexión).
2. **Titular del Hero:**
   - De: *"Transformamos oportunidades de negocio en soluciones reales con IA"*
   - A: *"Transformamos oportunidades de IA en <span class="highlight-teal">resultados reales.</span>"*
3. **Iconografía:**
   - De: Emojis Unicode (`🎯`, `🤖`, `⚡`, `🧠`, `🔄`, `☁️`, `🛡️`, `✨`, `🚀`, `✉️`, `📅`, `📍`).
   - A: Iconos SVG vectoriales lineales coherentes de 24x24 / 20x20 con stroke de 1.75px–2px en Midnight Navy, Corporate Blue y Teal.
4. **Portafolio:**
   - De: Selector de pestañas con "Project 01" y "Project 02 (Próximamente)".
   - A: Presentación enfocada exclusivamente en el caso real y probado **AAGm (Project 01)**.
5. **Flujo Metodológico:**
   - Estandarización visual estricta en las 6 etapas: **Entender → Definir → Diseñar → Construir → Validar → Evolucionar**.
6. **Accesibilidad:**
   - Añadir media query `@media (prefers-reduced-motion: reduce)` en CSS y JS.

### C. Elementos que DEBEN ELIMINARSE:
1. **Métricas y Plazos no verificables:**
   - `"3 a 5 Días"` (afirmación cuantitativa no universal).
   - `"60-90s"` (presentado como KPI numérico).
   - `"100% Trazable"` (presentado como métrica matemática).
   - `"Respuesta en < 24h hábiles"` (SLA no formalizado).
   - `"Protección garantizada"` (término absoluto no respaldado).
2. **Proyectos Hipotéticos:**
   - `"Project 02: Suite de Agentes de Automatización B2B"` y pestaña asociada.
3. **Elementos del Mockup PNG que NO deben incluirse:**
   - Logos de clientes del PNG (`BCP`, `Belcorp`, `Alicorp`, `Intercorp`, `Credicorp`, `Prima AFP`) por tratarse de un mockup de diseño sin autorización ni relación contractual formal declarada en intake.
   - Métricas simuladas del mockup (`+35%`, `-40%`, `120+`, `98%`).

---

## 3. Contenido Dudoso / No Verificable Detectado

| Contenido en Implementación Previa | Problema Detectado | Acción Correctiva |
|---|---|---|
| Métrica `3 a 5 Días` | Plazo cuantitativo no respaldado contractualmente para todo proyecto. | Reemplazar por evidencia cualitativa: *"Prototipado ágil e iterativo"*. |
| Métrica `100% Trazable` | Cifra porcentual absoluta. | Reemplazar por: *"Metodología estructurada con trazabilidad en Git"*. |
| Métrica `Respuesta en < 24h` | Compromiso de soporte técnico específico sin SLA contratado. | Reemplazar por: *"Atención directa por consultores senior"*. |
| Pestaña `Project 02` | Caso de estudio futuro/ficticio sin documentación real en el repositorio. | Eliminar completamente; enfocar 100% en el caso real AAGm. |
| Logos y métricas del PNG | Contenido ficticio de mockup. | Omitir deliberadamente respetando la regla: *"El PNG define la composición; el contenido define la verdad"*. |

---

## 4. Protected Baseline (Funcionalidades Protegidas)

* Navegación por anclas con sustracción de offset de cabecera fija (80px).
* Menú móvil táctil y drawer accesible con `aria-expanded` y `aria-controls`.
* Formulario/enlace directo `mailto:contacto@noosadvisory.com` con asunto predefinido.
* WCAG 2.2 AA (contraste >= 4.5:1, navegación por teclado, focus visible, landmarks).
* SEO + AI Discoverability (JSON-LD estructurado Schema.org).
