# Theme Check cleanup

Run with `shopify theme check`. Baseline 2026-10-07: 86 errors, 324 warnings. Current: 6 errors, 17 warnings.

| Severity | Check | Baseline | Now | Status |
|---|---|---|---|---|
| error | LiquidHTMLSyntaxError | 1 | 0 | Done |
| error | ValidSchemaTranslations | 2 | 0 | Done |
| error | ValidSchema | 1 | 0 | Done |
| error | ImgWidthAndHeight | 82 | 6 | In progress |
| warning | HardcodedRoutes | 19 | 0 | Done |
| warning | DeprecatedFilter | 9 | 0 | Done |
| warning | DeprecatedTag | 1 | 0 | Done |
| warning | UndefinedObject | 4 | 3 | Remaining are stock Dawn |
| warning | OrphanedSnippet | 13 | 1 | Done (`handles.liquid` kept) |
| warning | RemoteAsset | 7 | 5 | Won't fix (Global-e / third-party) |
| warning | LiquidComplexity | 1 | 1 | Won't fix (stock Dawn `facets`) |
| warning | UnusedAssign | 53 | 7 | Done (remaining are stock Dawn; `handles.liquid` ignored) |
| warning | VariableName | 217 | — | Disabled in `.theme-check.yml` (camelCase is house style) |

## Done

- [x] `sections/image-gallery.liquid`: unbalanced conditional `<div>` rewritten as one div with conditional classes; `sections.blocks` → `section.blocks`.
- [x] `sections/image-banner.liquid`: added `image_3` / `image_4` labels to `locales/en.default.schema.json`.
- [x] `sections/email-signup-banner.liquid`: top-level `"templates"` → `"enabled_on": { "templates": [...] }`.
- [x] HardcodedRoutes: `/cart/add`, `/cart`, `/`, `/collections/...`, `/account/login` → `routes.*` in header, footer, image-banner, main-register, card-product, custom-add-to-cart and all custom main-product / nav / compare sections.
- [x] DeprecatedFilter: `img_url: 'master'` → `image_url: width: 3840` (8 sections).
- [x] OrphanedSnippet: deleted 12 snippets that were referenced only from commented-out Dawn header/drawer code or not at all: `custom-add-to-cart`, `globale-checkout-css`, `globale-checkout-js`, `country-localization`, `language-localization`, `header-dropdown-menu`, `header-mega-menu`, `header-search`, `icon-account`, `icon-hamburger`, `quick-order-product-row`, `social-icons`. `handles.liquid` is kept as the source for the `inject:handles` build step.
- [x] UnusedAssign: removed unused shared grid/padding variables from `layout-flex`, `layout-grid` and `layout-section`; `snippets/handles.liquid` ignored in `.theme-check.yml`.
- [x] VariableName: disabled in `.theme-check.yml`.
- [x] ImgWidthAndHeight: added `height` to the 76 hard-coded `cdn.shopify.com` images (17 sections), scaled from each tag's existing `width` using the original image's dimensions.
- [x] DeprecatedTag: `{% include 'globale-js' %}` → `{% render 'globale-js' %}` in `layout/theme.liquid`.

## To do

### ImgWidthAndHeight (6)

Images whose source is only known at runtime:

- [ ] `sections/main-discover-espresso.liquid`, `sections/section-home-video-carousel.liquid`: poster images from an image picker. Add `width="{{ image.width }}" height="{{ image.height }}"`.
- [ ] `snippets/layout-section.liquid` (2, background `asset_url`), `snippets/section-image-with-info-single.liquid`, `snippets/section-tech-specs-with-image.liquid` (`file_url` from section data). Liquid can't read dimensions from a file name: pass them in, or silence with `theme-check-disable`.

### UndefinedObject (3)

`scheme_classes` in `layout/theme.liquid` and `layout/password.liquid`, and `continue` in `sections/main-product.liquid`, are unchanged Dawn code.
