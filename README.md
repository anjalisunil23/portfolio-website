# Anjali Portfolio

A modern personal portfolio website built for Anjali Sunil. The site showcases professional experience, projects, skills, social links, a downloadable resume, and multiple contact options.

## Features

- Clean one-page portfolio layout with smooth scroll navigation
- Animated hero, experience, projects, skills, and contact sections
- Downloadable resume button from the website
- Contact form with backend-free submission options
- WhatsApp chat shortcut for quick communication
- Responsive design for desktop and mobile

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
