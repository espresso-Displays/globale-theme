# Theme Check cleanup

Run with `shopify theme check`. Baseline 2026-10-07: 86 errors, 324 warnings. Current: 0 errors, 13 warnings.

| Severity | Check | Baseline | Now | Status |
|---|---|---|---|---|
| error | LiquidHTMLSyntaxError | 1 | 0 | Done |
| error | ValidSchemaTranslations | 2 | 0 | Done |
| error | ValidSchema | 1 | 0 | Done |
| error | ImgWidthAndHeight | 82 | 0 | Done |
| warning | HardcodedRoutes | 19 | 0 | Done |
| warning | DeprecatedFilter | 9 | 0 | Done |
| warning | DeprecatedTag | 1 | 0 | Done |
| warning | UndefinedObject | 4 | 2 | Remaining are stock Dawn |
| warning | OrphanedSnippet | 13 | 0 | Done |
| warning | RemoteAsset | 7 | 5 | Won't fix (Global-e / third-party) |
| warning | LiquidComplexity | 1 | 1 | Won't fix (stock Dawn `facets`) |
| warning | UnusedAssign | 53 | 5 | Done (remaining are stock Dawn) |
| warning | VariableName | 217 | — | Disabled in `.theme-check.yml` (camelCase is house style) |

## Done

- [x] `sections/image-gallery.liquid`: unbalanced conditional `<div>` rewritten as one div with conditional classes; `sections.blocks` → `section.blocks`.
- [x] `sections/email-signup-banner.liquid`: top-level `"templates"` → `"enabled_on": { "templates": [...] }`.
- [x] HardcodedRoutes: `/cart/add`, `/cart`, `/`, `/collections/...`, `/account/login` → `routes.*` in header, footer, main-register, card-product and all custom main-product / nav / compare sections.
- [x] DeprecatedFilter: `img_url: 'master'` → `image_url: width: 3840` (8 sections).
- [x] OrphanedSnippet: deleted 12 snippets that were referenced only from commented-out Dawn header/drawer code or not at all: `custom-add-to-cart`, `globale-checkout-css`, `globale-checkout-js`, `country-localization`, `language-localization`, `header-dropdown-menu`, `header-mega-menu`, `header-search`, `icon-account`, `icon-hamburger`, `quick-order-product-row`, `social-icons`. On 2026-10-08, deleted the 21 snippets that only the removed sections used.
- [x] UnusedAssign: removed unused shared grid/padding variables from `layout-flex`, `layout-grid` and `layout-section`.
- [x] VariableName: disabled in `.theme-check.yml`.
- [x] ImgWidthAndHeight: added `height` to the 76 hard-coded `cdn.shopify.com` images (17 sections), scaled from each tag's existing `width` using the original image's dimensions.
- [x] ImgWidthAndHeight: poster images in `main-discover-espresso` and `section-home-video-carousel` take `width`/`height` from the image picker; `section-image-with-info-single` and `section-tech-specs-with-image` take them from `images[media_name]`; removed the unused background-image feature from `layout-section`.
- [x] DeprecatedTag: `{% include 'globale-js' %}` → `{% render 'globale-js' %}` in `layout/theme.liquid`.

## To do

### UndefinedObject (2)

`scheme_classes` in `layout/theme.liquid` and `layout/password.liquid` is unchanged Dawn code.
