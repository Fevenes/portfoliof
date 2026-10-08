# Feven Esayas – Portfolio

React + TypeScript + Tailwind CSS v4 + Framer Motion, built with Vite.

## Run it locally (VS Code terminal)
```bash
npm install
npm run dev
```
Open the URL it prints (usually http://localhost:5173).

## Edit your content
Everything (name, links, projects, experience, skills) is in `src/data.ts`.
- Replace every `YOUR-USERNAME` / `// TODO` with your real GitHub and LinkedIn links.
- Put your CV at `public/cv.pdf` so the Download CV button works.

## Put it on GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

## Deploy on Vercel
Import the GitHub repo at vercel.com/new. Vercel detects Vite automatically
(build: `npm run build`, output: `dist`). Every `git push` redeploys.
