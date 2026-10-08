# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Shopify Online Store 2.0 theme for espresso Displays' Global-e (cross-border) storefront. It is forked from Shopify's Dawn, with many custom sections built on Tailwind and the in-house "espressoBeans" design system.

The repo is connected to Shopify's GitHub integration. Commits titled "Update from Shopify for theme globale-theme/main" are pushed by `shopify[bot]` when someone edits in the theme editor or admin. These mostly touch `templates/*.json`, `config/settings_data.json` and `sections/*-group.json`, but they can touch any file, so pull before editing.

## Commands

```sh
npm run dev         # Tailwind watch + `shopify theme dev` together
npm run build:css   # one-off minified build: assets/tailwind.css -> assets/style.css
npm run watch:css
shopify theme check # lint (Theme Check; config in .theme-check.yml)
```

There are no tests. CI (`.github/workflows/ci.yml`) runs Theme Check only. It doesn't block deploys: Shopify's GitHub integration syncs `main` to the theme on every push regardless of CI.

The Lighthouse CI job was removed on 2026-10-08. Its secrets were from 2024, pointed at an unknown store, and didn't match the names the workflow read, so it was auditing the password page. To bring it back, re-add `shopify/lighthouse-ci-action` against a known store with fresh secrets (store domain, Theme Access token, storefront password if protected).

## Styling

- Tailwind is compiled from `assets/tailwind.css` into `assets/style.css`. `layout/theme.liquid` loads that file directly. `assets/style.css` is generated and committed: rebuild it after you add Tailwind classes, or the classes won't exist in production. The root-level `style.css` is not used by the build.
- Tailwind scans `./**/*.{liquid,json}`. Class strings have to appear literally somewhere in those files; classes built from concatenated fragments won't be generated.
- `tailwind.config.js` takes colors, fonts, type scales, padding, margin and max-width tokens from `espressoBeans/v1/styles/`. Colors **replace** Tailwind's defaults (they don't extend them). Use espressoBeans breakpoints alongside the Tailwind ones: `mobile` (375), `desktop-small` (1024), `desktop` (1280), `desktop-large` (1800).
- Dawn's component CSS (`assets/component-*.css`, `base.css`) still exists for the legacy Dawn sections. `base.css` is commented out in `theme.liquid`.
- Prettier: 120 columns. JS uses single quotes; Liquid uses double quotes.

## Custom section architecture

- Custom sections are prefixed by page: `section-home-*`, `section-explore-*`, `section-pdp-*`, `section-lite-*`, `section-15-*`, and so on. Product templates (`templates/product.<suffix>.json`) assemble these per product. The Dawn sections (`main-*`, `header`, `footer`, `cart-*`, etc.) remain mostly stock.
- Layout primitives live in `snippets/layout-section.liquid`, `layout-grid.liquid` and `layout-flex.liquid`. They take content captured with `{% capture %}` and passed as `content:`. Liquid has no imports, so shared grid and padding class variables are **duplicated** at the top of files that need them.
- Reusable pieces include `carousel-buttons` + `carousel-script` (horizontal scroll carousels), `icon` (generic icon snippet), `button-standard`, `pdp-accordion*`, and `section-image-with-info-*`.
- Content data is often hard-coded in the section instead of coming from metafields or settings. Sections switch on `product.handle` with `{% case %}`, build a pseudo-JSON string with `|||` as the field separator, then parse it by `split: '},'` / `split: '|||'`. Follow this pattern when you extend those sections.
- Product and collection handles are centralised in `snippets/handles.liquid`. Sections that need them contain the placeholder `{% comment %} inject:handles {% endcomment %}`. `inject-handles.js` is meant to inline them via a `src/` → `dist/` build, but `src/` and `dist/` don't exist yet, so the placeholder is currently inert.

## Global-e

`snippets/globale-js.liquid` (rendered in `theme.liquid`) sets `GLBE_PARAMS` (merchant ID, operated countries, and so on). `assets/global-e.css` holds the Global-e-specific styles. The `.ge-hide` class hides elements from Global-e shoppers.
