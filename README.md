# Porsit Website

This repository contains a simple Node.js backend and a static frontend for the **Porsit** project. The backend exposes basic APIs and the frontend provides an example page with a chatbot widget.

## Prerequisites

- [Node.js](https://nodejs.org/) 16+ (used for the backend)
- npm (comes with Node.js)

## Backend

The backend uses Express. It exposes a `/api/health` endpoint.

### Setup and Run

```bash
cd backend
npm install express    # install express dependency
node server.js         # starts server on port 3000 by default
```

You can override the port with the `PORT` environment variable.

Once running, visit `http://localhost:3000/api/health` to check the server status.

## Frontend

The frontend lives under `frontend/pages` and uses TailwindCSS. A new example page `track/tipax.html` demonstrates the minimal Persian UI with the Vazirmatn font and chatbot widget.

### Run a Development Server

To serve the static files you can use any static server. One quick way is using Python:

```bash
cd frontend/pages
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

Alternatively you can use `npx serve` or any other static file server.

---

This project does not include automated tests.
