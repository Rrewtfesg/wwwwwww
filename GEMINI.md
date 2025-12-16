# CatWorld Project

## Overview
A responsive website about cats, featuring a gallery, breed information, and educational content.
Built with SvelteKit 5, Tailwind CSS, and Shadcn UI.

## Tech Stack
- **Framework**: SvelteKit 5 (with Runes)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **UI Components**: Shadcn UI (bits-ui)
- **Icons**: Lucide Svelte

## Features
- **Home**: Landing page with featured breeds.
- **Gallery**: Grid of cat images using `AspectRatio` component.
- **Breeds**: Searchable list of cat breeds with filtering.
- **Breed Detail**: Dynamic page showing detailed info (origin, temperament, life span).
- **About**: Information about the project.

## Directory Structure
- `src/routes/`: App routes.
- `src/lib/components/ui/`: Shadcn UI components.
- `src/lib/data.ts`: Mock data for breeds.

## Development
- Run `npm run dev` to start the server.
- Run `npm run check` to validate code.
