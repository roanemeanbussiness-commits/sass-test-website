name: Deploy to GitHub Pages

# Builds the static export and publishes it to GitHub Pages, giving you a live,
# crawlable URL to point your SEO / GEO / AEO agent at.
#
# One-time setup: in the repository, go to Settings → Pages and set
# "Source" to "GitHub Actions". After that, every push to main (or a manual run)
# publishes the site.

on:
  push:
    branches: [main]
  workflow_dispatch:

# Allow only one concurrent deployment.
concurrency:
  group: pages
  cancel-in-progress: true

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        env:
          # Serve from the repository sub-path and keep all canonical/OG/sitemap
          # URLs pointing at the real Pages origin.
          NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
          NEXT_PUBLIC_SITE_URL: https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}
        run: npm run build

      - name: Add .nojekyll
        run: touch out/.nojekyll

      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
