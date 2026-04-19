# Pitaya Commerce

A NYC x Mexican-inspired ecommerce platform built with Next.js on the frontend and Medusa v2 powering the backend.

## Stack

- **Frontend** — Next.js (storefront)
- **Backend** — Medusa v2
- **Database** — PostgreSQL
- **Containerization** — Docker / Docker Compose

## Getting Started

### Start all services

Bring up the full stack (backend, database, and frontend) in detached mode:

```bash
docker compose up -d --build
```

This will build and start all containers defined in the `docker-compose.yml`.

### Frontend development (with hot reload)

To develop on the frontend with file watching and hot reload enabled:

```bash
docker compose up frontend --watch
```

This uses Docker Compose's `--watch` mode to sync file changes into the container as you develop.

## Project Structure

```
pitaya-commerce/
├── backend/        # Medusa v2 backend
└── frontend/       # Next.js storefront
```
