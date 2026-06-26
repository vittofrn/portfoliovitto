# Vittoria Fornari — Portfolio

A static recreation of [vittogd.framer.website](https://vittogd.framer.website/), built with plain
HTML/CSS/JS so it can be hosted anywhere (GitHub Pages, Netlify, Vercel…).

## Structure

```
portfolio-site/
├── index.html           # the whole site (markup + styles + script inline)
└── fonts/chaos16.woff2  # the CHAOS16 display font
```

## The constellation canvas
The homepage is a draggable "mind-map": a centre **HELLO I'M Vitto** card surrounded by 8 project
cards, joined by curved links plus dashed cross-links between projects that share a discipline.
**Drag** any card to rearrange, **click** to open its project, **hover** for a preview tooltip.
A scrolling "Available for hire" ticker sits on top, and the layout collapses to a hamburger
menu on phones.

## Editing
Everything lives in `index.html`:
- **Projects** — edit the `PROJECTS` array in the `<script>` (name, category, type, url, image, angle).
- **Header / social links** — Instagram, LinkedIn, Behance and the email are in the `<header>` and drawer.
- **Fonts** — DotGothic16 loads from Google Fonts; CHAOS16 from the local `fonts/chaos16.woff2`.

> Note: project thumbnails, the logo and the project links currently load from Framer's CDN
> (`framerusercontent.com` / `vittogd.framer.website`). They'll keep working while the Framer site
> exists. To make the site fully independent, download those images into a local folder and update
> the `img` / `url` values.

## Run locally
```bash
cd portfolio-site
python3 -m http.server 8000   # open http://localhost:8000
```

## Deploy to GitHub Pages
Push the contents of `portfolio-site/` to a repo, then **Settings → Pages → Deploy from a branch →
`main` / root**. Live at `https://<username>.github.io/<repo>/`.
