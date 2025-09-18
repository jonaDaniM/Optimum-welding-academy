# Optimum Welding Academy – Static Landing Site

## Run locally

```bash
npm i
npm run dev
```

## Set up Google Sheets capture (free)

1. Create a Google Form with fields matching the site (Name, DOB, Phone, Email, Experience, Preferred Start, How Heard, Message, Consent).
2. Open the live form → View source on the form page and copy the form action URL and each name="entry.xxxxxxx" id.
3. Paste into `src/config.ts` in `GOOGLE_FORM.action` and `GOOGLE_FORM.entries`.
4. The responses will appear in the Form’s linked Google Sheet.

## GitHub Pages deploy (free)

- In repo Settings → Pages → Source: GitHub Actions.
- A workflow for Vite static site is included at `.github/workflows/deploy.yml`.
- Push to `main` to deploy.

## How the instant notification works (free)

- After submit, the site generates a WhatsApp and SMS deep link to `+1-713-419-4148` with a prefilled message.
- The visitor taps “Send” in WhatsApp/SMS—no paid backend needed.

## Assets

- Swap the placeholder logo (`/public/logo.svg`) with the final SVG.
- Optional: add `/public/grain.png` and `/public/og-image.png`.

## Configuration

- Edit-only site values live in `src/config.ts`.
- Tailwind colors/fonts are in `tailwind.config.js`.


