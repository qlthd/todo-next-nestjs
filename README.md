# ☄️ Turborepo Next.js NestJS Starter ☄️

## Overview

Monorepo starter template using Turborepo, Next.js, and NestJS.

## Project Structure

- `apps/web`: The Next.js web application.
- `apps/api`: The NestJS API server.

## Prerequisites

- Node.js >= 20
- pnpm >= 10.4.1

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/qlthd/turborepo_nextjs_nestjs_starter.git
    cd turborepo_nextjs_nestjs_starter
    ```

2. Install dependencies:
    ```sh
    pnpm install
    ```

## Scripts

### Root Scripts

- `pnpm build`: Build all projects.
- `pnpm dev`: Run all projects in development mode.
- `pnpm dev:api`: Run only the API server in development mode.
- `pnpm dev:web`: Run only the web application in development mode.
