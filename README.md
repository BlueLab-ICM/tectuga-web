# TECTUGA · web del proyecto

Página web del proyecto **TECTUGA – Centinelas del mar**: cámaras en animales y vehículos
autónomos de superficie (ASV) para evaluaciones ecológicas de las tortugas marinas y sus hábitats
(ICM-CSIC, Plan Estatal PID2024).

Hecha con **Vue 3 + Vite**, con el estilo del ICM (tipografía TT Commons, paleta marino / ultramar /
cian / rosa y esquinas casi rectas), como las demás webs de BlueLab / SIO.

## Desarrollo

Requiere Node 20.19+ o 22.12+.

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

El `base` de Vite es relativo (`./`), así que `dist/` funciona en cualquier ruta
(GitHub Pages, una subcarpeta de icm.csic.es, etc.).

## Contenido

- Textos en tres idiomas: [src/i18n/ca.js](src/i18n/ca.js), [src/i18n/es.js](src/i18n/es.js),
  [src/i18n/en.js](src/i18n/en.js). El idioma se elige con los botones CA / ES / EN o con `?lang=es`.
- Equipo: [src/team.js](src/team.js).
- Imágenes y logos: `public/img/`. Las dos figuras salen de la memoria científico-técnica del proyecto.
- Secciones: un componente por sección en `src/components/`.

## Publicación

El workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) construye la web y la publica en
GitHub Pages en cada push a `main` (hay que activar *Settings → Pages → Source: GitHub Actions*).
