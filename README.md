# Srikanth Kurva - React Developer Portfolio

Modern personal portfolio built with React, TypeScript, Tailwind CSS, React Icons, and Framer Motion.

## Tech Stack
- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm run preview
```

## Deployment

### Vercel
This repo includes [`vercel.json`](./vercel.json) for Vite build + SPA rewrites.

1. Push this project to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Framework will be detected as Vite.
4. Deploy.

Default settings used:
- Build Command: `npm run build`
- Output Directory: `dist`
- SPA fallback rewrite to `index.html`

### Netlify
This repo includes [`netlify.toml`](./netlify.toml) and [`public/_redirects`](./public/_redirects).

1. Push this project to GitHub.
2. In Netlify, click **Add new site** > **Import an existing project**.
3. Select the repository and deploy.

Default settings used:
- Build Command: `npm run build`
- Publish Directory: `dist`
- SPA redirect (`/* -> /index.html 200`)

## Notes
- Replace placeholder live/demo/social links in [`src/utils/data.ts`](./src/utils/data.ts).
- Replace placeholder resume file at [`public/Srikanth-Kurva-Resume.pdf`](./public/Srikanth-Kurva-Resume.pdf).
- Set your production URL in OG tags in [`index.html`](./index.html).
