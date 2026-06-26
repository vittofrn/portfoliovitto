# Vittoria Fornari — Portfolio

A static recreation of [vittogd.framer.website](https://vittogd.framer.website/), built with plain
HTML, CSS and JavaScript so it can be hosted anywhere (GitHub Pages, Netlify, Vercel…).

## Structure

```
portfolio-site/
├── index.html          # markup
├── css/style.css       # styles
├── js/main.js          # builds the project nodes, dashed links & drag-to-pan
└── assets/img/         # logo + 8 project images
```

## The constellation canvas
The homepage is a draggable "mind-map": a centre card surrounded by 8 project cards
connected with dashed lines. **Drag** to pan, **click** a card to open its project.
On phones it collapses into a 2-column gallery.

## Editing
- **Projects** — edit the `PROJECTS` array at the top of `js/main.js`. Each entry has a
  `name`, `cat` (category), `img`, `bg` (card colour), `x`/`y` position offset, and a `link`.
  The `link` fields are set to `#` — point them at your real project pages.
- **Text / contact** — edit `index.html` (about paragraph, email, social URLs).
- **Social links** — the Instagram / LinkedIn / Behance / X URLs are placeholders; replace them.

## Run locally
```bash
cd portfolio-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages
1. Create a repo and push the contents of `portfolio-site/` to it.
2. Repo **Settings → Pages → Source: Deploy from a branch → `main` / root**.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

Fonts are loaded from Google Fonts (Caveat, DotGothic16, Fragment Mono).
