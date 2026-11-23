# Change Log

## 2.2.0 (2026-11-23)

### Feature
- **Stacked Title & Description:** Button titles and optional descriptions now render as vertically stacked lines. `View.jsx` wraps the title in a `button-title` span and the description in a `button-desc` span, and the button uses a flex column layout (`flex-direction: column` with a `0.25em` gap) instead of the previous `<br />` separator.
- **Left/Right Alignment:** Left- and right-aligned buttons now pin the stacked title/description to the top-left / top-right respectively (`align-items: flex-start` / `align-items: flex-end`).

### Bugfix
- **Consistent Title/Description Spacing:** Removed the fragile `<br />` + inline description markup; the `0.25em` flex `gap` keeps the spacing consistent across all alignments and edit/view modes.

## 2.1.0 (2026-10-24)

### Feature
- **Alignment & Sizing Parity:** Enhanced button block edit and view styling in `main.less` to ensure identical padding, margins, and sizing between edit canvas and published view.
- **Default Text Alignment:** Set default button text alignment to center.
- **Theme Overrides:** Added theme-level color and style options including gray and white variants.

### Bugfix & Compatibility
- **Volto 19 Compatibility:** Updated `peerDependencies` to support `@plone/volto` 17, 18, and 19 (`>=17.0.0 || >=18.0.0-alpha.0 || >=19.0.0-alpha.0`).


## 2.0.0 (2022-06-09)

### Breaking

- Fix CSS and block name now is `__button` to avoid semanticUI CSS clashes @sneridagh
- Rename widget internally @sneridagh

## 1.1.0 (2022-06-07)

### Feature

- Making it to incorporate the new style wrapper @iFlameing

## 1.0.0 (2022-04-22)

### Feature

- Real initial release @sneridagh

## 1.0.0-alpha.0 (2022-04-21)

### Feature

- Initial release @sneridagh @tisto

### Internal

- Added github workflows @robgietema
