# DemoShop

DemoShop is a modern, responsive Ecommerce Template built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Next.js 15 App Router:** Leveraging the latest Next.js features for optimal performance and SEO.
- **State Management:** Powered by Redux Toolkit for predictable state handling (e.g., shopping cart logic).
- **Styling:** Beautifully crafted UI utilizing Tailwind CSS v4.
- **Icons & Data Visualization:** Features Lucide React for consistent icons and Recharts for user/store dashboards.
- **Notifications:** Integrated with React Hot Toast for seamless alerts.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Prisma](https://www.prisma.io/) (Database ORM)
- [Lucide React](https://lucide.dev/)
- [Recharts](https://recharts.org/)

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Build and Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Folder Structure Overview

- `/app` - Next.js App Router (pages and layouts for public, admin, and store routes)
- `/components` - Reusable React UI components (e.g., Navbar, Footer, Charts, Product Details)
- `/lib` - Application utilities, Redux store setup, and feature slices
- `/assets` - Static resources
- `/prisma` - Database schema and environment configuration

## Development Details

- Run the linter to ensure code quality: `npm run lint`

