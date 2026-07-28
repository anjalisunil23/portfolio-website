# Anjali Portfolio

A modern personal portfolio website built for Anjali Sunil. The site showcases professional experience, projects, skills, social links, a downloadable resume, and multiple contact options.

[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Features

- Clean one-page portfolio layout with smooth scroll navigation
- Animated hero, experience, projects, skills, and contact sections
- Downloadable resume button from the website
- Contact form with backend-free submission options
- WhatsApp chat shortcut for quick communication
- Responsive design for desktop and mobile

## Live Demo

Live site: [anjalisunil-portfolio-website.vercel.app](https://anjalisunil-portfolio-website.vercel.app)

## Screenshots

Add a few screenshots of the homepage, experience section, and contact section here once you export them.

```text
assets/screenshots/home.png
assets/screenshots/experience.png
assets/screenshots/contact.png
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Radix UI components
- EmailJS, Formspree, and Web3Forms support for contact submission

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Contact Form Setup

The contact form supports three backend-free providers:

- EmailJS
- Formspree
- Web3Forms

If no provider is configured, the form falls back to opening a prefilled email message.

### Environment variables

Copy `.env.example` to `.env` and fill the values you need.

```bash
VITE_CONTACT_PROVIDER=auto

# EmailJS
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=

# Formspree
VITE_FORMSPREE_FORM_ID=

# Web3Forms
VITE_WEB3FORMS_ACCESS_KEY=

# WhatsApp
VITE_WHATSAPP_NUMBER=916235743500
```

### Provider options

- `auto`: Detects whichever provider has keys configured
- `emailjs`: Sends directly through EmailJS
- `formspree`: Sends through Formspree
- `web3forms`: Sends through Web3Forms

## Resume Download

Place your resume PDF at `public/resume.pdf`.

The site links to `/resume.pdf` from the hero section and the navbar.

## Scripts

- `npm run dev` - start the development server
- `npm run build` - build for production
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint
- `npm run test` - run the test suite

## Project Structure

```text
src/
  components/   UI sections and shared components
  hooks/        Reusable React hooks
  lib/          Utility helpers
  pages/        Route-level pages
  test/         Test setup and examples
public/         Static assets such as favicon and resume
```

## Deployment

This project can be deployed to any static hosting platform that supports Vite apps, such as Vercel, Netlify, or GitHub Pages.

Before deploying, make sure your environment variables are configured in the hosting provider and that `public/resume.pdf` exists if you want the download button to work.

### Deploy to Vercel

1. Push the repository to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Vite**.
5. Use the default build settings:
  - Build command: `npm run build`
  - Output directory: `dist`
6. Add the required environment variables in Vercel.
7. Deploy.

The included [vercel.json](vercel.json) handles the SPA rewrite so direct page refreshes work correctly.
