# meet-sutariya-portfolio

Personal engineering portfolio. Next.js 15 (App Router), TypeScript, no UI kit —
the design system lives entirely in `app/globals.css` as CSS custom properties.

## Run it

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where the content lives

Everything on the page is driven by **`lib/content.ts`**. There is no CMS and no
hardcoded copy in the components — edit that one file and the site follows.

| Export | Drives |
|---|---|
| `profile` | Name, headline, status pill, intro, contact links |
| `domains` | The scrolling marquee under the hero |
| `education` | ASU panel, degree-progress bar, hero ID card |
| `roles` | Experience section (sourced from LinkedIn) |
| `featured` | The flagship dark-slab project |
| `projects` | The four selected-work cards |
| `toolkit` | Four-column toolkit grid |
| `workingSet` | "Currently working on" list |
| `stats` | The four-up number strip |

### Adding a project

Append to `projects` in `lib/content.ts`. `accent` picks the card's hairline
colour and must be one of `sage | clay | indigo | moss | amber` — each is defined
for both themes in `globals.css`.

### Theming

Light is defined on bare `:root`. Dark is redefined twice: once under
`@media (prefers-color-scheme: dark)` guarded by `:root:not([data-theme="light"])`,
and once under `:root[data-theme="dark"]` so the manual toggle wins in both
directions. A blocking inline script in `app/layout.tsx` applies the stored
preference before first paint, so there is no flash.

## GitHub contribution graph

`components/ContributionGraph.tsx` fetches the trailing 12 months from
`github-contributions-api.jogruber.de`, revalidating every 6 hours. If the API is
unreachable the component renders an empty grid rather than failing the build.

## Deploy

Push to GitHub and import the repo in Vercel — the defaults are correct, no
environment variables are needed. To keep the existing URL, point the same Vercel
project at this repo.

When a custom domain is ready, update `SITE` in `app/layout.tsx` so the canonical
and Open Graph URLs match.
