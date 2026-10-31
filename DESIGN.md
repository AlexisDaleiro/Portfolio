---
name: Alexis Daleiro Portfolio
description: Neo-Editorial Tech portfolio, dark-first with a light twin, one emerald signal.
colors:
  canvas-night: "#0A0C10"
  surface-night: "#131720"
  surface-night-hover: "#1C2230"
  rule-night: "#212836"
  ink-night: "#F1F5F9"
  muted-night: "#94A3B8"
  canvas-day: "#F8FAFC"
  surface-day: "#FFFFFF"
  surface-day-hover: "#F1F5F9"
  rule-day: "#E2E8F0"
  ink-day: "#0F172A"
  muted-day: "#64748B"
  signal-emerald: "#10E599"
  signal-emerald-ink-day: "#047857"
  highlight-amber: "#F59E0B"
  highlight-amber-ink-day: "#B45309"
typography:
  display:
    fontFamily: "Space Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1rem + 3.4vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.2rem + 2vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.25
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.signal-emerald}"
    textColor: "{colors.canvas-night}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "44px"
  button-ghost:
    backgroundColor: "{colors.surface-day}"
    textColor: "{colors.ink-day}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "44px"
  chip:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.muted-night}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  project-card:
    backgroundColor: "{colors.surface-night}"
    textColor: "{colors.ink-night}"
    rounded: "{rounded.lg}"
    padding: "28px"
---

# Design System: Alexis Daleiro Portfolio

> Generado en modo scan a partir del código construido. La entrevista de `document` se sustituyó por inferencia desde `PRODUCT.md` y el brief, por pedido explícito de ejecución autónoma.

## Overview

**Creative North Star: "The Annotated Spec Sheet"**

Una ficha técnica bien editada: columnas con reglas finas, títulos que se leen como titulares de revista y detalles en monoespaciada que funcionan como anotaciones al margen. Todo confirma que hay criterio de ingeniería detrás, sin decorar. La estructura (hairlines, rejillas de 1px, etiquetas mono) es la decoración.

El sistema es dark-first y tiene un gemelo claro con la misma jerarquía. Un único color de señal, el esmeralda, marca lo accionable y lo "disponible"; el ámbar se reserva para lo destacado y para el problema en cada caso de estudio. La densidad es media: aire generoso entre secciones (7rem), compacta dentro de las tarjetas.

Rechazos confirmados por el brief: degradados púrpuras de IA, plantillas Bootstrap de 2018, barras de porcentaje de habilidades.

**Key Characteristics:**
- Titulares grandes en Space Grotesk, cuerpo cálido en Plus Jakarta Sans, datos en JetBrains Mono.
- Bordes de 1px como único recurso estructural; sin sombras en reposo.
- Esmeralda como señal única; el ámbar solo como acento secundario.
- Movimiento corto y con propósito: una entrada de hero, revelado por scroll y elevación en hover.

## Colors

Paleta de dos neutros (noche y día) con una señal verde eléctrica. El modo se alterna con la clase `dark` en `<html>` y variables CSS (`--canvas`, `--surface`, `--text-primary`...) expuestas a Tailwind como `bg-canvas`, `bg-surface`, `border-subtle`, `text-primary`, `text-muted`.

### Primary
- **Señal Esmeralda** (`signal-emerald`, #10E599): CTA principal, estado disponible, filtro activo, foco, selección de texto. Siempre con texto #0A0C10 encima (contraste >11:1).

### Secondary
- **Ámbar de Realce** (`highlight-amber`, #F59E0B): badges especiales y la etiqueta "Problema" de cada caso.

### Neutral
- **Lienzo Noche** (`canvas-night`, #0A0C10) y **Superficie Noche** (`surface-night`, #131720), con hover **#1C2230** y regla **#212836**; tinta **#F1F5F9**, apagado **#94A3B8**.
- **Lienzo Día** (`canvas-day`, #F8FAFC) y **Superficie Día** (#FFFFFF), regla **#E2E8F0**, tinta **#0F172A**, apagado **#64748B**.

### Named Rules
**The Ink Variant Rule.** Esmeralda y ámbar puros no alcanzan 4.5:1 sobre fondos claros. Como texto en modo claro se usan sus variantes de tinta (`signal-emerald-ink-day` #047857, `highlight-amber-ink-day` #B45309); como relleno se mantienen los tonos de marca.
**The One Signal Rule.** El esmeralda aparece solo donde hay acción o estado vivo. Si todo es verde, nada lo es.

## Typography

**Display Font:** Space Grotesk Variable (con sans-serif del sistema)
**Body Font:** Plus Jakarta Sans Variable (con sans-serif del sistema)
**Label/Mono Font:** JetBrains Mono 500

**Character:** Geométrica y ligeramente técnica arriba, humana y legible abajo; la mono aporta el tono de anotación.

### Hierarchy
- **Display** (700, clamp(2rem, 1rem + 3.4vw, 3.75rem), 1.05): único H1 del hero; la segunda mitad de la frase va en color apagado.
- **Headline** (700, 1.875–3rem, 1.1): títulos de sección.
- **Title** (600, 1.25–1.5rem, 1.3): tarjetas, servicios, hitos.
- **Body** (400, 1rem–1.125rem, 1.6): párrafos, tope de 62–65ch.
- **Label** (500, 0.75rem, mono): chips de stack, etiquetas Problema/Solución, métricas flotantes.

### Named Rules
**The Mono Is Data Rule.** La monoespaciada es para datos, etiquetas y cifras; nunca para párrafos ni titulares.

## Layout

Contenedor `max-w-7xl` (1280px) con gutter 16/24/32px. Secciones separadas por una regla de 1px y 5rem (7rem desde sm) de padding vertical. Secciones de texto usan 12 columnas: título pegajoso en 4 y contenido en 8 (desde lg); proyectos usa rejilla de 2 columnas desde md. Mobile-first, probado a 375px sin scroll horizontal. Sin kickers ni numeración de secciones.

## Elevation & Depth

Plano por defecto: la profundidad la dan capas tonales (canvas → surface → surface-hover) y bordes de 1px. Las sombras aparecen solo como respuesta a estado.

### Shadow Vocabulary
- **Elevación de tarjeta** (`box-shadow: 0 20px 40px -20px color-mix(in oklab, #10E599 50%, transparent)`): hover de tarjeta, junto a `translateY(-4px)` y borde esmeralda.
- **Chip flotante** (`box-shadow: 0 10px 24px -12px rgb(0 0 0 / 0.35)`): badges sobre la foto.

### Named Rules
**The Flat-By-Default Rule.** Ninguna superficie lleva sombra en reposo.

## Shapes

Esquinas generosas pero contenidas: 12px en controles, 16px en tarjetas, 24px en la foto de perfil, píldora en chips y filtros. Las listas de valor y stack usan un contenedor redondeado con hairlines internas de 1px (técnica `gap-px` sobre fondo de regla) en lugar de tarjetas separadas.

## Components

### Buttons
- **Shape:** 12px, alto mínimo 44px, texto 15px/600.
- **Primary:** relleno esmeralda, texto #0A0C10; hover `brightness(1.08)`; active `scale(.98)`.
- **Ghost:** superficie + borde 1px; hover cambia fondo y borde a esmeralda-tinta.

### Chips
- Píldora con borde 1px, fondo canvas, texto apagado en JetBrains Mono 12px. El filtro activo se rellena de esmeralda.

### Cards / Containers
- Tarjeta de proyecto: radio 16px, borde 1px, imagen 16:10 arriba, cuerpo con padding 28px. Hover: elevación + borde esmeralda. El CTA final usa borde discontinuo.

### Inputs / Fields
- Alto 44px, radio 12px, fondo canvas, borde 1px; foco con contorno de 2px esmeralda-tinta. Etiquetas siempre visibles.

### Navigation
- Barra fija de 64px, fondo canvas al 85% con desenfoque ligero. Logotipo tipográfico con punto esmeralda que se eleva en hover. En móvil, menú nativo con `popover`.

### Signature Component
- **Foto con badges flotantes:** retrato en tarjeta de 24px con tres chips mono que flotan con desfase; el borde se ilumina en hover.

## Do's and Don'ts

### Do:
- **Do** usar solo los tokens (`bg-canvas`, `text-muted`, `border-subtle`) y cambiar de modo con la clase `dark`.
- **Do** mantener ≥44px de alto en controles táctiles y foco visible en todo.
- **Do** respetar `prefers-reduced-motion`: sin flotación, sin reveal, sin transiciones de vista.

### Don't:
- **Don't** usar degradados púrpuras, texto con degradado ni barras de porcentaje de habilidades.
- **Don't** usar esmeralda o ámbar puros como color de texto sobre fondo claro.
- **Don't** añadir fondos de grilla decorativos, sombras en reposo ni tarjetas anidadas.
