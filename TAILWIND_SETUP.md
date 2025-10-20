# Tailwind CSS v4 Setup

This project uses **Tailwind CSS v4** with the new `@import` syntax.

## Build Commands

### Development (with watch mode)
```bash
pnpm run build:css
```
This watches for changes in your HTML files and automatically rebuilds the CSS.

### Production (minified)
```bash
pnpm run build:css:prod
```
This creates a minified production build of your CSS.

## How It Works

### 1. Input File: `assets/css/main.css`
This file imports Tailwind and defines your custom theme:
- `@import "tailwindcss"` - Imports Tailwind v4
- `@theme { ... }` - Custom theme tokens (colors, fonts, shadows, etc.)
- `@utility ...` - Custom utility classes
- `@source "..."` - Tells Tailwind which files to scan for classes

### 2. Output File: `assets/tailwind.css`
The generated CSS file that contains all the classes used in your HTML files.

### 3. Source Files
Tailwind scans these directories for classes:
- `_layouts/*.html` - Layout templates
- `_includes/*.html` - Reusable components
- `*.html` - Root level pages

## Custom Theme Tokens

### Colors
- `--color-emerald-*` - Emerald color palette (50-900)
- `--color-emmy` - Primary brand color (#16f2b0)
- `--color-emmy-green` - Secondary green (#34D399)
- `--color-emmy-dark` - Dark theme color

### Typography
- `--font-sans` - Manrope font family
- `--font-display` - Clash Display font family

### Shadows
- `--shadow-aurora` - Glowing aurora effect
- `--shadow-card` - Card shadow
- `--shadow-halo` - Subtle halo effect

### Border Radius
- `--radius-3xl` - 1.75rem
- `--radius-4xl` - 2.5rem  
- `--radius-5xl` - 3.5rem (custom)

### Backdrop Blur
- `--backdrop-blur-18` - 18px blur
- `--backdrop-blur-24` - 24px blur

### Animations
- `--animate-floaty` - Floating animation (18s)
- `--animate-shimmer` - Shimmer effect (8s)
- `--animate-pulseBorder` - Pulsing border (6s)

## Usage in HTML

Use the utility classes directly:
```html
<div class="rounded-5xl shadow-aurora backdrop-blur-24 animate-floaty">
  Content here
</div>
```

## Fonts

The project uses:
- **Manrope** - Sans-serif font for body text
- **Clash Display** - Display font for headings

These are loaded from Google Fonts in the layout file.

