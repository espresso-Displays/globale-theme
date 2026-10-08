# Theme Check cleanup

Run with `shopify theme check`. Baseline 2026-10-07: 86 errors, 324 warnings. Current: 82 errors, 278 warnings.

| Severity | Check | Baseline | Now | Status |
|---|---|---|---|---|
| error | LiquidHTMLSyntaxError | 1 | 0 | Done |
| error | ValidSchemaTranslations | 2 | 0 | Done |
| error | ValidSchema | 1 | 0 | Done |
| error | ImgWidthAndHeight | 82 | 82 | To do |
| warning | HardcodedRoutes | 19 | 0 | Done |
| warning | DeprecatedFilter | 9 | 0 | Done |
| warning | DeprecatedTag | 1 | 0 | Done |
| warning | UndefinedObject | 4 | 3 | Remaining are stock Dawn |
| warning | OrphanedSnippet | 13 | 1 | Done (`handles.liquid` kept) |
| warning | RemoteAsset | 7 | 5 | Won't fix (Global-e / third-party) |
| warning | LiquidComplexity | 1 | 1 | Won't fix (stock Dawn `facets`) |
| warning | UnusedAssign | 53 | 53 | Low priority |
| warning | VariableName | 217 | 215 | Low priority |

## Done

- [x] `sections/image-gallery.liquid`: unbalanced conditional `<div>` rewritten as one div with conditional classes; `sections.blocks` → `section.blocks`.
- [x] `sections/image-banner.liquid`: added `image_3` / `image_4` labels to `locales/en.default.schema.json`.
- [x] `sections/email-signup-banner.liquid`: top-level `"templates"` → `"enabled_on": { "templates": [...] }`.
- [x] HardcodedRoutes: `/cart/add`, `/cart`, `/`, `/collections/...`, `/account/login` → `routes.*` in header, footer, image-banner, main-register, card-product, custom-add-to-cart and all custom main-product / nav / compare sections.
- [x] DeprecatedFilter: `img_url: 'master'` → `image_url: width: 3840` (8 sections).
- [x] OrphanedSnippet: deleted 12 snippets that were referenced only from commented-out Dawn header/drawer code or not at all: `custom-add-to-cart`, `globale-checkout-css`, `globale-checkout-js`, `country-localization`, `language-localization`, `header-dropdown-menu`, `header-mega-menu`, `header-search`, `icon-account`, `icon-hamburger`, `quick-order-product-row`, `social-icons`. `handles.liquid` is kept as the source for the `inject:handles` build step.
- [x] DeprecatedTag: `{% include 'globale-js' %}` → `{% render 'globale-js' %}` in `layout/theme.liquid`.

## To do

### ImgWidthAndHeight (82)

`<img>` tags without `width` and `height` attributes, which causes layout shift. Set them to the image's intrinsic size (CSS still controls the rendered size).

- [ ] `sections/section-explore-sizes.liquid` (12)
- [ ] `sections/section-explore-touch.liquid` (7)
- [ ] `sections/section-common-awarded-for-design.liquid` (6)
- [ ] `sections/standplus-feat-2.liquid` (6)
- [ ] `sections/section-15-features-2.liquid` (6)
- [ ] `sections/standplus-pro-feat-2.liquid` (6)
- [ ] `sections/section-home-use-cases.liquid` (5)
- [ ] `sections/pro-15-feature-tiles.liquid` (4)
- [ ] `sections/section-explore-usps.liquid` (4)
- [ ] `sections/section-home-espresso-usps.liquid` (4)
- [ ] `sections/section-explore-compare.liquid` (3)
- [ ] `sections/section-explore-models.liquid` (3)
- [ ] `sections/standplus-which-stand.liquid` (3)
- [ ] `sections/section-15-features-3.liquid` (3)
- [ ] `snippets/layout-section.liquid` (2)
- [ ] `sections/standplus-feat-1.liquid` (2)
- [ ] `sections/color-calibrate.liquid` (1)
- [ ] `sections/main-discover-espresso.liquid` (1)
- [ ] `sections/section-home-software.liquid` (1)
- [ ] `sections/section-home-video-carousel.liquid` (1)
- [ ] `snippets/section-image-with-info-single.liquid` (1)
- [ ] `snippets/section-tech-specs-with-image.liquid` (1)

### UndefinedObject (3)

`scheme_classes` in `layout/theme.liquid` and `layout/password.liquid`, and `continue` in `sections/main-product.liquid`, are unchanged Dawn code.
