# Karan's Portfolio (Vite + React + TypeScript)

## Overview

This is a personal portfolio built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui.

## About Me

I'm Karan Mandalam — a product leader working at the intersection of AI, martech, and automation. I design systems that scale, with a focus on attribution accuracy, lifecycle automation, and shipping pragmatic zero-to-one products.

- Twitter/X: https://x.com/pingmepi
- LinkedIn: https://www.linkedin.com/in/mandalam-karan/

## Local Development

Requirements: Node.js and npm (we recommend installing Node via nvm)

Steps:

```sh
# 1) Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2) Install dependencies
npm install

# 3) Start the dev server
npm run dev
```

## Social/SEO Assets

- Place your OG image at `public/assets/og-image.png` (recommended 1200x630). The site references `/assets/og-image.png` in index.html and the Seo component.
- Favicon set referenced in index.html and manifest:
  - `public/assets/favicon-32x32.png`
  - `public/assets/favicon-16x16.png`
  - `public/assets/apple-touch-icon.png`
  - `public/assets/android-chrome-192x192.png`
  - `public/assets/android-chrome-512x512.png`
  - `public/assets/manifest.webmanifest`

## Tech Stack
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deploy
Deploy with any static hosting provider that supports Vite builds (e.g., Vercel, Netlify, GitHub Pages). Run:

```sh
npm run build
```

The output will be in the `dist` folder.
