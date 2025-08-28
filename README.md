# poksi.fr — Next.js + Tailwind + MDX (static-export ready)

## Dev
```bash
npm install
npm run dev
```

## Deploy on Vercel (recommended)
1. Push this folder to a new GitHub repo.
2. On Vercel: New Project → Import repo → Framework preset: Next.js.
3. Add domain `poksi.fr` in Vercel → follow DNS steps.
4. Done.

## Static hosting (OVH / Nginx)
```bash
npm install
npm run export
# upload the generated `out/` folder to your web root
```
