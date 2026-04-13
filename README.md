# Welcome to your Lovable project

## Quick Start (Web3Forms)

1. Open `.env`.
2. Paste your Web3Forms key in `VITE_WEB3FORMS_ACCESS_KEY`.
3. Keep `VITE_CONTACT_PROVIDER=web3forms`.
4. Restart dev server: `npm run dev`.

After this, the Contact form sends directly without opening the mail app.

## Resume Download

Place your resume PDF at `public/resume.pdf`.

The site links to `/resume.pdf`, so visitors can download it from the hero section and the navbar.

## Contact Form Setup

This portfolio supports backend-free contact submissions with any one provider:

- `emailjs`
- `formspree`
- `web3forms`

If no provider keys are configured, the form automatically falls back to opening a prefilled email message.

### 1) Create environment file

Copy `.env.example` to `.env` and fill values.

### 2) Select provider

Set `VITE_CONTACT_PROVIDER` in `.env` to one of:

- `emailjs`
- `formspree`
- `web3forms`
- `auto` (recommended, auto-detects configured provider)

### 3) Provider keys

- For EmailJS, set:
	- `VITE_EMAILJS_SERVICE_ID`
	- `VITE_EMAILJS_TEMPLATE_ID`
	- `VITE_EMAILJS_PUBLIC_KEY`
- For Formspree, set:
	- `VITE_FORMSPREE_FORM_ID`
- For Web3Forms, set:
	- `VITE_WEB3FORMS_ACCESS_KEY`

### 4) WhatsApp Chat Button

Set `VITE_WHATSAPP_NUMBER` in `.env` as country-code + number (no `+`, no spaces).

### 5) Run

```bash
npm install
npm run dev
```
