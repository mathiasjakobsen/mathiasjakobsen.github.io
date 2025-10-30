# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website/portfolio built with Astro 5.15.2. The site is deployed to GitHub Pages (mathiasjakobsen.github.io). This is a minimal Astro setup with TypeScript support using strict type checking.

## Development Commands

All commands run from the repository root:

- `npm install` - Install dependencies
- `npm run dev` - Start development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run astro -- --help` - Access Astro CLI help

## Architecture

**Framework**: Astro with file-based routing. Pages in `src/pages/` are automatically exposed as routes based on filename.

**TypeScript**: Configured with Astro's strict tsconfig preset (`astro/tsconfigs/strict`).

**Static Assets**: Place images and other static files in `public/` directory. Recent commits show the site uses tiny.pictures service for serving images at 1000px height.

**Git Workflow**:
- Main branch: `master`
- Current development branch: `astro`

**Structure**:
```
├── public/          # Static assets (favicon, images, etc.)
├── src/
│   └── pages/       # File-based routes (.astro, .md files)
├── astro.config.mjs # Minimal Astro configuration
└── dist/            # Build output (excluded from git)
```

## Key Context

- This is a personal portfolio site for Mathias Jakobsen
- Images are served via tiny.pictures CDN (not locally hosted)
- The site uses a minimal Astro setup with no additional integrations configured
- TypeScript is enabled with strict mode
