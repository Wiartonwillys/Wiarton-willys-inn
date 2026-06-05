# Wiarton Willys Inn Website

Static Astro website for Wiarton Willys Inn.

## Run Locally

This workspace includes a local package runner because the shell did not have a package manager on the path during setup.

```sh
node .tools/pnpm/bin/pnpm.cjs dev
```

Local site:

```txt
http://localhost:4321/
```

Build:

```sh
node .tools/pnpm/bin/pnpm.cjs build
```

## Owner Photo Folders

Photos are organized under `public/images/` by page, section, and purpose. Each final folder includes:

- `README.md` with the intended photo purpose
- `.gitkeep` so the folder stays present
- `placeholder.svg` so the site never shows a broken image while photos are pending

Expected future filenames include:

- `main.webp`
- `featured.webp`
- `card.webp`
- `gallery-01.webp`
- `gallery-02.webp`
- `bathroom.webp`
- `pool.webp`
- `fire-pit.webp`

Update central image paths in `src/data/siteImages.js` if final filenames differ.

## Environment

Optional environment variables:

- `PUBLIC_SITE_URL` for canonical URLs and sitemap generation
- `PUBLIC_GA_ID` for Google Analytics tracking

If no analytics ID is set, the website still works with no tracking errors.
