# BRIEFING Y ESPECIFICACIÓN TÉCNICA: PORTFOLIO WEB ALEXIS DALEIRO

## 1. CONTEXTO Y OBJETIVO
Construir el portfolio web personal y comercial de **Alexis Daleiro**, desarrollador web Full-Stack radicado en Montevideo, Uruguay.
- **Audiencia objetivo:** Clientes freelance, pymes y startups de Uruguay y LATAM que necesitan landing pages de alta conversión, e-commerce optimizados o aplicaciones web funcionales.
- **Diferenciador clave:** Alexis combina desarrollo web full-stack con experiencia real en marketing digital, e-commerce (`Tu Ración`), análisis masivo de datos (`Arbusta/Mercado Libre`, `Sportradar`) y formación en Ciberseguridad (`IAE`). No crea webs "adorno": crea herramientas de negocio seguras, ultra rápidas y pensadas para convertir visitas en ventas.
- **Tono:** Creativo, confiable, directo y con fuerte personalidad profesional.

---

## 2. DIRECCIÓN DE DISEÑO Y SISTEMA VISUAL
- **Estilo:** Neo-Editorial Tech. Diseño limpio, bordes estructurados y micro-detalles de interacción que transmiten maestría técnica.
- **Paleta de Colores (Tokens CSS y Tailwind):**
  - Dark Mode (Default):
    - `bg-canvas`: `#0A0C10`
    - `bg-surface`: `#131720`
    - `bg-surface-hover`: `#1C2230`
    - `border-subtle`: `#212836`
    - `text-primary`: `#F1F5F9`
    - `text-muted`: `#94A3B8`
  - Light Mode:
    - `bg-canvas`: `#F8FAFC`
    - `bg-surface`: `#FFFFFF`
    - `border-subtle`: `#E2E8F0`
    - `text-primary`: `#0F172A`
    - `text-muted`: `#64748B`
  - Acentos (Ambos modos):
    - `accent-emerald`: `#10E599` (Éxito, estado disponible, CTA principal, conversión)
    - `accent-amber`: `#F59E0B` (Destacados, badges especiales)
- **Tipografías (Google Fonts / Fontsource):**
  - Display / Títulos: `Space Grotesk`, sans-serif (700, 600)
  - Cuerpo / Textos: `Plus Jakarta Sans`, sans-serif (400, 500)
  - Monospace / Badges / Métricas: `JetBrains Mono`, monospace (500)
- **Reglas Anti-Genérico:**
  - Prohibido usar degradados púrpuras genéricos de IA o plantillas de Bootstrap de 2018.
  - Prohibidas las barras de porcentaje de habilidades ("CSS 90%"). Las habilidades se demuestran con casos de uso y herramientas de impacto de negocio.
  - El sitio debe reflejar autenticidad: incluir su foto profesional real y destacar su enfoque en resolver problemas de negocio.

---

## 3. STACK Y ARQUITECTURA
- **Framework:** Astro 4+ (Generación estática para velocidad extrema de carga).
- **Estilos:** Tailwind CSS 3+ con soporte para Dark/Light mode (`class`).
- **Interactividad / Islas:** Componentes React o Vanilla JS ligeros para:
  - Selector de idioma (ES / EN) sincronizado con localStorage.
  - Selector de tema (Dark / Light) con detección de preferencia del sistema.
  - Filtro interactivo de proyectos.
  - Botón de copiado rápido de email y enlaces a WhatsApp directo.
- **Estructura de Directorios:**
```
/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── images/
│       ├── alexis-profile.png (Foto profesional adjunta)
│       └── projects/ (Screenshots/mockups para los 5 proyectos)
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── ThemeToggle.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── Services.astro
│   │   ├── ExperienceTimeline.astro
│   │   ├── SkillsGrid.astro
│   │   ├── ContactCTA.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── projects/ (Colecciones con datos en ES y EN)
│   ├── i18n/
│   │   ├── es.json
│   │   └── en.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro (Español por defecto)
│       └── en/
│           └── index.astro (Versión en Inglés)
└── astro.config.mjs
```

---

## 4. ESTRUCTURA DE CONTENIDOS Y SECCIONES (EN ORDEN)

### 1. Header / Navbar Fijo
- **Logo:** Logomarca tipográfica minimalista: `Alexis Daleiro` con un punto acento verde `.` interactivo.
- **Navegación:** Enlaces ancla: `#proyectos` (Proyectos), `#servicios` (Servicios), `#sobre-mi` (Sobre mí), `#contacto` (Contacto).
- **Controles:** Switch Dark/Light Mode + Toggle ES / EN + Botón directo "Hablemos" (enlace a WhatsApp).

### 2. Hero Section (Alto Impacto)
- **Badge superior:** `🟢 Disponible para nuevos proyectos freelance | Uruguay & LATAM` (con pulso sutil).
- **Título principal:**
  - *ES:* "Desarrollo sitios y aplicaciones web que impulsan negocios, no solo código que compila."
  - *EN:* "I build high-impact web apps that grow businesses, not just code that compiles."
- **Subtítulo descriptivo:**
  - *ES:* "Soy Alexis Daleiro, desarrollador Full-Stack con visión de marketing y ciberseguridad. Ayudo a marcas y empresas a transformar ideas complejas en experiencias web rápidas, atractivas y rentables."
  - *EN:* "I'm Alexis Daleiro, a Full-Stack developer with marketing insight and a cybersecurity foundation. Helping brands turn complex ideas into high-converting, lightning-fast digital products."
- **CTAs:**
  - Botón primario: *"Cotizar Proyecto / Hablemos"* (Link a WhatsApp con mensaje precargado / Modal de contacto).
  - Botón secundario: *"Ver Trabajos"* (Smooth scroll a `#proyectos`).
- **Elemento Visual (Columna Derecha):** Tarjeta interactiva con la foto profesional de Alexis, borde fino con brillo al hover y 3 badges flotantes animados:
  - `⚡ 100% Lighthouse Performance`
  - `🛒 Enfoque en Conversión y Ventas`
  - `🛡️ Código Limpio & Seguro`

### 3. Propuesta de Valor ("Por qué trabajar conmigo")
Tres tarjetas concisas que explican por qué contratar a Alexis y no a un desarrollador tradicional:
1. **Mentalidad de Crecimiento & Marketing:** Cada interfaz se diseña pensando en la retención, la usabilidad y la tasa de conversión (CRO), fruto de mi experiencia directa gestionando eCommerce.
2. **Arquitectura Rápida & Ciberseguridad:** Tecnologías modernas (Astro, React, Python) y mejores prácticas de seguridad informática para proteger tus datos y asegurar tiempos de carga menores a 1 segundo.
3. **Comunicación Ágil & Transparente:** Sin tecnicismos innecesarios. Metodología clara, entregas paso a paso y foco absoluto en los objetivos comerciales del cliente.

### 4. Proyectos Destacados (Selected Work)
Cada tarjeta debe incluir imagen, etiquetas de stack, breve caso de estudio (Problema → Solución) y links a Demo y GitHub:
1. **CFMoto-2 (Showroom & Automotive Web Experience)**
   - *Tags:* Astro / React, Tailwind CSS, Responsive Design.
   - *Descripción:* Plataforma web interactiva para catálogo vehicular de alta gama. Optimización extrema de imágenes pesadas y diseño enfocado en la generación de leads calificados para concesionarios.
   - *Repo:* `https://github.com/AlexisDaleiro/CFMoto-2`
2. **Manlab (Clinical Diagnostics & Lab Platform)**
   - *Tags:* Full-Stack, Web App, UI/UX accesible.
   - *Descripción:* Interfaz moderna y accesible para visualización de servicios de laboratorio clínico, pensada para transmitir máxima rigurosidad y confianza a los pacientes.
   - *Repo:* `https://github.com/AlexisDaleiro/Manlab`
3. **automationfindr (AI & Automation Tools Discovery)**
   - *Tags:* JavaScript / APIs, Directorio Dinámico, Filtros avanzados.
   - *Descripción:* Buscador inteligente y directorio de soluciones de automatización e Inteligencia Artificial, con sistema de categorización y filtrado en tiempo real.
   - *Repo:* `https://github.com/AlexisDaleiro/automationfindr`
4. **Frontend-Districo (B2B Distribution Portal)**
   - *Tags:* React, Architecture, Catálogo Comercial.
   - *Descripción:* Solución de frontend para empresas de retail y distribución, priorizando la facilidad de navegación masiva de catálogos y órdenes comerciales.
   - *Repo:* `https://github.com/AlexisDaleiro/Frontend-Districo`
5. **GarraFifa (Esports & Tournament Web App)**
   - *Tags:* Interactive Frontend, Gamification, Real-Time data.
   - *Descripción:* Plataforma para torneos competitivos de fútbol virtual, seguimiento de resultados y tablas de posiciones con un diseño dinámico y juvenil.
   - *Repo:* `https://github.com/AlexisDaleiro/GarraFifa`

### 5. Servicios para Clientes Freelance
- **Desarrollo de Sitios Web & Landing Pages:** Páginas institucionales y landings de venta diseñadas para maximizar conversiones y cargar a velocidad ultra rápida.
- **Tiendas Online (E-commerce):** Configuración, mantenimiento y optimización de tiendas digitales orientadas a vender sin fricción.
- **Aplicaciones Web a Medida:** Dashboards, paneles internos y herramientas interactivas conectadas a bases de datos y APIs.
- **Auditoría de Rendimiento & Seguridad:** Diagnóstico y corrección de webs lentas o vulnerables.

### 6. Sobre Mí & Trayectoria
- Resumen profesional: estudiante de Tecnólogo en Ciberseguridad (`IAE`) y egresado de Bachillerato Tecnológico en Desarrollo Web (`ÁNIMA`). Experiencia real en soporte de eCommerce & Marketing en `Tu Ración`, análisis de datos de `Mercado Libre` en `Arbusta`, y monitoreo en tiempo real en `Sportradar`.
- **Easter Egg / Detalle Humano:** Jugador de ajedrez federado FIDE (ID: 3024326). "En el tablero y en el código, cada movimiento responde a una estrategia pensada con anticipación."

### 7. Tech Stack & Herramientas
Organizado por utilidad de negocio:
- **Frontend:** Astro, React, JavaScript (ES6+), Tailwind CSS, HTML5 semántico.
- **Backend & Bases de Datos:** Python, Node.js, SQL (PostgreSQL / MySQL), REST APIs, JSON.
- **Marketing, Datos & Herramientas:** Looker, Power BI, Google Workspace, Postman, Git/GitHub, Testing funcional, IA Agéntica.

### 8. Contacto Directo / CTA Final
- Formulario de contacto funcional o directo (Nombre, Email, Idea del proyecto).
- Opciones rápidas de un clic:
  - Botón WhatsApp: `+598 095 673 109` (con mensaje directo listo: "Hola Alexis, vi tu portfolio y me gustaría consultar por un proyecto web").
  - Email con botón de copiar al portapapeles: `alexisdaleiro@gmail.com`.
  - Enlaces a LinkedIn: `https://www.linkedin.com/in/alexisdaleiro/` y GitHub: `https://github.com/AlexisDaleiro`.

---

## 5. ANIMACIONES E INTERACCIONES
- Scroll suave nativo (`scroll-smooth`).
- Revelación sutil de secciones al hacer scroll mediante transiciones de opacidad y desplazamiento vertical (`translate-y`).
- Efecto hover en tarjetas de proyectos con elevación sutil y borde iluminado con acento `#10E599`.
- Copiado de email con feedback visual inmediato (tooltip "¡Copiado!").

---

## 6. REQUISITOS TÉCNICOS Y SEO
- **Mobile-First:** Diseño 100% responsivo, adaptado a 375px (móvil) y pantallas 2K/4K.
- **Accesibilidad:** WCAG 2.1 AA (contrastes de color verificados, etiquetas `aria-*` en toggles e iconos).
- **SEO & Social Sharing:**
  - Meta tags completos (title, description, canonical).
  - Open Graph y Twitter Cards configurados con imagen `og-image.png`.
  - `sitemap.xml` y `robots.txt` generados automáticamente por Astro.
- **Performance:** Optimización estricta de imágenes en formato `.webp`, lazy loading y bundles mínimos de JS para asegurar **95+ en todas las métricas de Google Lighthouse**.

---

## 7. CRITERIOS DE "TERMINADO" (VERIFICABLES)
1. El sitio compila sin advertencias ni errores con `pnpm build` o `npm run build`.
2. El switch de idiomas (ES/EN) traduce la totalidad de textos, títulos y descripciones sin perder el estado visual.
3. El toggle Dark/Light conmuta fluidamente sin parpadeos de carga (FOUC) y recuerda la preferencia del usuario.
4. Todos los enlaces externos (GitHub, LinkedIn, WhatsApp) abren con `rel="noopener noreferrer"` en nueva pestaña.
5. Lighthouse score superior a 90 en Performance, Accessibility, Best Practices y SEO.

---

SKILLS A USAR, en este orden:
1. ui-ux-pro-max:ui-ux-pro-max: elegir estilo, paleta y tipografías.
2. impeccable: diseñar, construir y pulir cada sección; generar DESIGN.md con el sistema de diseño.
3. ui-ux-pro-max:ui-styling: Tailwind y componentes.
4. vercel-react-best-practices y ecc:react-patterns (o ecc:nextjs-turbopack si es Next.js): calidad del código.
5. ecc:motion-patterns y ecc:motion-foundations: animaciones.
6. ecc:seo y ecc:accessibility: antes de cerrar.
7. modern-web-guidance:modern-web-guidance: usar features nativos de la plataforma.
No mezclar frontend-design, interface-design ni ui-ux-pro-max:design con impeccable; se pisan.
VERIFICACIÓN: probar con el MCP playwright en mobile (375px) y desktop, y auditar con el MCP unlighthouse. Corregir hasta cumplir los criterios de terminado.
