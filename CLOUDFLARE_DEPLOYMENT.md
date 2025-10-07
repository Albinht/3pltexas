# Deploying 3PL Texas to Cloudflare Pages

## Prerequisites
- Cloudflare account (free tier works)
- GitHub account (or GitLab/Bitbucket)

## Step 1: Push to GitHub

```bash
# Create a new repository on GitHub first at: https://github.com/new
# Name it: 3pltexas

# Then push your code:
cd /Users/al/3pltexas
git remote add origin https://github.com/YOUR_USERNAME/3pltexas.git
git branch -M main
git push -u origin main
```

## Step 2: Connect to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application**
4. Click **Pages** tab
5. Click **Connect to Git**
6. Select your **3pltexas** repository
7. Click **Begin setup**

## Step 3: Configure Build Settings

**Framework preset:** Next.js (Static HTML Export)

**Build command:**
```bash
npm run build:cloudflare
```

**Build output directory:**
```
out
```

**Root directory (optional):**
```
web
```

**Node version:**
- Add environment variable: `NODE_VERSION` = `18.17.0`

## Step 4: Environment Variables (Optional)

If you need any environment variables, add them in the **Environment variables** section:

- `NODE_ENV` = `production`

## Step 5: Deploy

1. Click **Save and Deploy**
2. Wait 2-5 minutes for the build to complete
3. You'll get a URL like: `https://3pltexas.pages.dev`

### Note on API Functions
The site includes a Cloudflare Pages Function for handling contact form submissions. The function is automatically deployed from the `functions/api` directory and will be available at `/api/leads` endpoint.

## Step 6: Custom Domain (3pltexas.net)

1. In Cloudflare Pages, go to your project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `3pltexas.net`
5. Follow the DNS instructions:
   - Add CNAME record: `3pltexas.net` → `3pltexas.pages.dev`
   - Or use Cloudflare's automatic setup if domain is already on Cloudflare

## Automatic Deployments

Every time you push to `main` branch, Cloudflare Pages will automatically:
- Build your site
- Deploy the new version
- Keep previous deployments for rollback

## Build Settings Reference

```yaml
Framework: Next.js (Static HTML Export)
Build command: npm run build:cloudflare
Build output directory: out
Root directory: web
Node version: 18.17.0 or higher
```

## Troubleshooting

**Build fails?**
- Check Node version is 18.17.0+
- Ensure `web` is set as root directory
- Check build logs for specific errors

**Pages not loading?**
- Next.js App Router needs `@cloudflare/next-on-pages` adapter (but try default first)
- Check browser console for errors

**Need Static Export?**
If Cloudflare's Next.js runtime doesn't work, you can export as static:

1. Add to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
};
```

2. Change build output directory to: `out`
3. Run: `npm run build`

This creates a fully static site that works on any host.

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Next.js on Pages: https://developers.cloudflare.com/pages/framework-guides/nextjs/
