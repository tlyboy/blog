# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Development Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build production version
pnpm start    # Start production server
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Components**: shadcn/ui (new-york style)
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm
- **Node Version**: >=22

## Project Structure

```
app/           # Next.js App Router pages and layouts
components/    # React components
  ui/          # shadcn/ui components
lib/           # Utility functions (cn, etc.)
```

## shadcn/ui Configuration

- Style: `new-york`
- Icon Library: `lucide-react`
- Add Components: `pnpm dlx shadcn@latest add <component>`
- Component Path Alias: `@/components/ui`
- Utility Function Alias: `@/lib/utils`

## Theme System

Uses `next-themes` for dark mode, with View Transitions API for smooth switching. Theme variables are defined in `app/globals.css`, using OKLCH color space.

## Path Aliases

`@/*` maps to the project root directory.
