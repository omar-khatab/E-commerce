<div align="center">

# E-Commerce Store — React

A full-featured storefront built with React, integrating a live REST API, persistent cart state, and production-style UX patterns (loading states, error handling).

[Live Demo](https://e-commerce-three-coral-58.vercel.app/) &nbsp;·&nbsp; [Source Code](https://github.com/omar-khatab/E-commerce)

</div>

<br>

## Overview

This project goes beyond a typical portfolio storefront by fetching real product data from a live API instead of static mock data, and handling the edge cases that come with it — loading states, failed requests, and persisted user state across sessions.

<br>

## Tech Stack

| Category | Tools |
|---|---|
| Core | React 19, React Router |
| State Management | Context API |
| Data | DummyJSON REST API (`fetch`), error handling with try/catch |
| Animation | Framer Motion |
| UI Feedback | React Hot Toast |
| Carousel | Swiper |
| Styling | CSS |

<br>

## Key Features

- **Live product data** — fetched from the DummyJSON API with proper error handling for failed requests
- **Skeleton loading states** — dedicated loading components (`SlideProductLoading`, `ProductDetailsLoading`) instead of blank screens while data loads
- **Persistent cart & favorites** — state is saved to `localStorage`, so items survive page reloads
- **Full cart logic** — add, remove, increase/decrease quantity, all managed through Context API
- **Product discovery** — category browsing, search, and filtering
- **Responsive, animated UI** — mobile-first layout with Framer Motion transitions and toast notifications for user feedback

<br>

## Getting Started

```bash
git clone https://github.com/omar-khatab/E-commerce.git
cd E-commerce
npm install
npm run dev
```

<br>

## Author

**Omar Khatab** — Frontend Developer (React / Next.js)

[Portfolio](https://portfolio-upgrade-wr9n.vercel.app/) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/omar-essam-319c/) &nbsp;·&nbsp; [GitHub](https://github.com/omar-khatab)
