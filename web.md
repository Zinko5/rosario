# Sistema de Diseño: Minimalismo Utilitario de Alta Densidad (Estilo "Linear/Geist")

Este documento define la especificación visual, arquitectónica y de experiencia de usuario para una interfaz unificada y ultra-versátil. El objetivo es crear un entorno estético de alta tecnología que se adapte de forma nativa a **Documentación, Dashboards, Herramientas SaaS y Videojuegos Web**, eliminando efectos genéricos o infantiles como el *glassmorphism*, los bordes con neón y las esquinas hiper-redondeadas.

---

## 1. Principios de Diseño

*   **Densidad de Información Eficiente:** La interfaz debe permitir la coexistencia de múltiples datos sin saturar la vista.
*   **Diseño Guiado por Bordes (Border-Driven Design):** La separación de espacios se logra mediante líneas milimétricas sólidas, no mediante sombras pesadas o difuminados.
*   **Enfoque Tipográfico:** La jerarquía y la fuerza visual recaen en la elección, peso y espaciado de la fuente tipográfica.
*   **Cero Decoración Superficial:** Cada elemento visual (línea, color, espacio) cumple una función utilitaria o de estado.

---

## 2. Paleta de Colores (Modo Oscuro Técnico)

La paleta se basa en una escala cromática monocromática neutra con un único punto de fuga visual para las interacciones.

| Elemento | Token / Variable | Valor HEX | Uso / Aplicación |
| :--- | :--- | :--- | :--- |
| **Fondo Base** | `--bg-canvas` | `#09090b` | Fondo absoluto de la aplicación/página. |
| **Fondo Panel** | `--bg-panel` | `#121214` | Tarjetas, barras laterales, contenedores de código o juegos. |
| **Borde Neutro** | `--border-low` | `#27272a` | Líneas divisorias de 1px entre paneles principales. |
| **Borde Activo** | `--border-high` | `#3f3f46` | Estados de hover en contenedores o inputs enfocados. |
| **Texto Primario**| `--text-main` | `#fafafa` | Títulos, lecturas principales, datos críticos. |
| **Texto Mutado**  | `--text-muted` | `#a1a1aa` | Leyendas, descripciones de documentación, placeholders. |
| **Color Acento**  | `--accent` | `#00ff66` o `#38bdf8` | **Un único color eléctrico** (Verde neón o Azul Vercel) para CTA, estados activos y alertas. |

---

## 3. Tipografía y Jerarquía

Para mantener la rigurosidad técnica, se combina una tipografía geométrica refinada con una fuente monoespaciada de precisión.

### Fuentes Recomendadas
*   **Sans-Serif Principal:** `Geist Sans`, `Inter`, o `SF Pro Display`.
*   **Monoespaciada de Acento:** `Geist Mono` o `JetBrains Mono`.

### Escala de Estilos
*   **Títulos Principales (`H1` / Títulos de Sección):** 
    *   `font-size: 24px` a `32px` | `font-weight: 600` | `letter-spacing: -0.05em` (Compacto).
    *   *Uso:* Nombres de herramientas, títulos de guías, pantallas de carga de juegos.
*   **Cuerpo de Texto / Párrafos:** 
    *   `font-size: 14px` | `font-weight: 400` | `line-height: 1.6` | Colores: `--text-muted`.
    *   *Uso:* Documentación, descripciones de ítems en juegos, tablas de datos.
*   **Datos Técnicos / Métricas (Muestras numéricas):**
    *   `font-family: var(--font-mono)` | `font-size: 13px` o `12px` | `font-weight: 500`.
    *   *Uso:* Valores de un dashboard (KPIs), contadores de vida/puntuación en juegos, bloques de código, etiquetas de configuración.

---

## 4. Elementos de Interfaz (UI Components Spec)

### A. Paneles y Contenedores
*   **Bordes:** Siempre `1px solid var(--border-low)`.
*   **Esquinas:** Radio de curvatura estricto de `6px` a `8px` (`border-radius: 6px`).
*   **Sombras:** Sin sombras difuminadas. Si se requiere profundidad, usar sombras duras indexadas: `box-shadow: 2px 2px 0px 0px #000000;`.

### B. Botones (Action Elements)
*   **Botón Primario:** Fondo sólido (`--text-main`), texto inverso (`#09090b`), sin bordes, esquinas de `6px`.
*   **Botón Secundario (Utilitario):** Fondo transparente, borde `1px solid var(--border-low)`. Al hacer *hover*, el borde cambia a `var(--border-high)` y el fondo a un gris sutil (`#18181b`).
*   **Botón de Acento (Uso crítico/Juego):** Fondo `--accent`, texto en contraste oscuro. Usar con extrema moderación.

### C. Estados e Interacciones (Micro-animations)
*   **Transiciones:** Duraciones ultra-rápidas para emular software nativo: `transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);`.
*   **Hover Efecto:** Los elementos interactivos aumentan ligeramente el brillo del borde o cambian sutilmente el color del texto. Nunca usar escalados exagerados ni efectos de destello gelatinosos.

---

## 5. Arquitectura de Navegación y Estructura (Layout Camaleón)

La flexibilidad para pasar de un formato de lectura a uno de juego o monitoreo se basa en un sistema de tres bloques colapsables controlados por CSS Grid/Flexbox.