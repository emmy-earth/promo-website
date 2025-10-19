# Emmy.earth - Automated Carbon Accounting Platform

A promotional website for an AI-powered carbon accounting platform that automates CO2 data collection and calculation for businesses.

## Tech Stack

- **Static Site Generator**: Jekyll
- **Frontend**: HTML, CSS (Tailwind CSS), JavaScript (minimal)
- **Styling**: Tailwind CSS with custom Emmy theme colors
- **Components**: SimpleLightbox for image galleries

## Local Development Setup

### Prerequisites

- Ruby 3.2.2 or higher
- Bundler (Ruby gem manager)
- Node.js and pnpm (for Tailwind CSS)

### Installation

```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies
pnpm install
```

### Running the Site Locally

1. **Build the CSS** (one-time or when you make changes to `assets/css/main.css`):
   ```bash
   pnpm run build:css:prod
   ```

   For development with auto-rebuild:
   ```bash
   pnpm run build:css
   ```

2. **Start the Jekyll development server**:
   ```bash
   bundle exec jekyll serve
   ```

3. **View your site**:
   Open your browser and navigate to `http://localhost:4000`

The Jekyll site will automatically reload when you make changes to your files. For CSS changes, you'll need to rebuild using the command above.

## Tailwind CSS Configuration

The project uses Tailwind CSS with custom Emmy brand colors defined in `tailwind.config.js`:

- `emmy-green`: #34D399
- `emmy-light-green`: #A7F3D0
- `emmy-dark`: #111827
- `emmy-light-gray`: #F9FAFB
- `emmy-gray`: #F3F4F6
- `emmy-text`: #374151
- `emmy-text-light`: #6B7280
- `emmy-orange`: #F2CBAE

You can use these colors in your HTML classes like `bg-emmy-green`, `text-emmy-dark`, etc.

## Deployment

Before deploying, make sure to run the production CSS build:

```bash
pnpm run build:css:prod
```

This will generate a minified CSS file in `assets/tailwind.css` that's ready for production.
