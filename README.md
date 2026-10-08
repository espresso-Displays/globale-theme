# globale-theme

Shopify theme for espresso Displays' Global-e storefront. Forked from Shopify's [Dawn](https://github.com/Shopify/dawn) (around v15.0). Most pages are built from custom Tailwind sections.

## Deploying

The repo is connected to Shopify's GitHub integration. Pushing to `main` updates the connected theme straight away, and nothing checks the push first.

The sync works in both directions. Edits made in the Shopify theme editor come back as `shopify[bot]` commits ("Update from Shopify for theme globale-theme/main"), so pull before you start work.

## Local development

You need Node and the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli), plus staff access to the `go-espresso` store.

```sh
npm ci
npm run dev   # rebuilds the Tailwind CSS on change and runs `shopify theme dev`
```

`shopify theme dev --store go-espresso` serves the working copy at http://127.0.0.1:9292 as a hidden development theme, so it doesn't change the live theme.

## CSS

Tailwind compiles `assets/tailwind.css` into `assets/style.css`. `style.css` is committed, because Shopify serves it directly. If you add Tailwind classes to Liquid files, run `npm run build:css` (or `npm run dev`) before committing, or those classes won't exist on the site.

Design tokens (colours, type, spacing, breakpoints) come from `espressoBeans/`, our in-house design system.

## Linting

```sh
shopify theme check
```

Config is in `.theme-check.yml`. `THEME_CHECK.md` tracks the cleanup still to do. GitHub Actions runs the same check on every push, but it doesn't block deploys.

## License

Dawn is © Shopify. See `LICENSE.md`.
