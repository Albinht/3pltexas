# Cloudflare Pages Deployment Troubleshooting

## 🔍 Stap 1: Controleer of je Cloudflare Pages project bestaat

1. Ga naar https://dash.cloudflare.com/
2. Klik op **Workers & Pages** in de linker sidebar
3. Check of je een project hebt voor 3pltexas

### Als je GEEN project hebt:
1. Klik **Create application**
2. Klik **Pages** tab
3. Klik **Connect to Git**
4. Selecteer je **Albinht/3pltexas** repository
5. Klik **Begin setup**

## ⚙️ Stap 2: Controleer Build Settings

Deze settings MOETEN exact zo zijn:

- **Framework preset:** Next.js (of None)
- **Build command:** `npm run build:cloudflare`
- **Build output directory:** `out` (NIET `.next`!)
- **Root directory:** `web`
- **Node version:** Environment variable: `NODE_VERSION` = `18.17.0`

## 🔨 Stap 3: Check Build Logs

1. Ga naar je Cloudflare Pages project
2. Klik op **View build**
3. Check voor errors in de logs

### Veel voorkomende problemen:

**Build output directory not found:**
- Zorg dat het `out` is, niet `.next`
- Zorg dat root directory `web` is

**Build command failed:**
- Check of `npm run build:cloudflare` bestaat in package.json
- Mogelijk moet je eerst: `npm install` toevoegen voor build command

## 🌐 Stap 4: Test eerst .pages.dev URL

Voor je custom domain werkt, moet eerst deze URL werken:
```
https://3pltexas.pages.dev
```
of
```
https://[project-name].pages.dev
```

Als deze niet werkt, is de deployment niet gelukt.

## 🔄 Stap 5: Forceer een nieuwe build

1. In Cloudflare Pages dashboard
2. Klik **Settings** → **Builds & deployments**
3. Klik **Retry deployment** of maak een kleine change en push naar GitHub

## 📝 Stap 6: Alternative Quick Fix

Als het niet lukt, probeer deze manual deployment:

1. Lokaal builden:
```bash
cd /Users/al/3pltexas/web
npm run build:cloudflare
```

2. Direct uploaden:
- In Cloudflare Pages, klik **Direct Upload**
- Upload de hele `web/out` folder

## ✅ Correcte Build Output

Als de build succesvol is, zie je in Cloudflare logs:
```
Success! Your site was deployed to https://3pltexas.pages.dev
```

## 🆘 Als niets werkt:

Probeer deze alternatieve package.json script:
```json
"build:cloudflare": "rm -rf out && next build && cp -r public/_redirects out/ 2>/dev/null || true"
```

Of gebruik deze build command direct in Cloudflare:
```bash
cd web && npm install && npm run build
```

Met build output directory: `web/out`
