# Deployment Guide for Netlify

## Quick Start Deployment

### Method 1: GitHub + Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sumit Kumar Portfolio"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository
   - Netlify auto-detects Next.js settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

3. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `sumitdev.netlify.app` (or your custom domain)
   - Follow DNS configuration instructions

### Method 2: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize your site
netlify init

# Deploy to production
npm run build
netlify deploy --prod --dir=out
```

### Method 3: Drag & Drop

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `out` folder to the upload area

## Post-Deployment Configuration

### 1. Enable Netlify Forms

Your contact form is already configured! After deployment:

- Go to Netlify Dashboard → Forms
- Enable form notifications
- Configure email notifications (Settings → Forms → Form notifications)

### 2. Environment Variables (if needed)

If you add any APIs or services:

- Go to Site settings → Build & deploy → Environment
- Add environment variables
- Redeploy for changes to take effect

### 3. Custom Domain Setup

To use `sumitdev.netlify.app`:

1. Go to Site settings → Domain management
2. Click "Options" → "Edit site name"
3. Enter "sumitdev"
4. Save changes

For a custom domain (e.g., `sumitdev.com`):

1. Click "Add custom domain"
2. Enter your domain
3. Update DNS records at your domain registrar:
   - A Record: Point to Netlify's load balancer IP
   - Or CNAME: Point to your-site.netlify.app

### 4. HTTPS/SSL

- Netlify automatically provisions SSL certificates
- This happens within minutes of adding a custom domain
- Check Site settings → Domain management → HTTPS

### 5. Performance Optimizations

Already configured in `netlify.toml`:

- Asset optimization enabled
- Security headers set
- SPA redirects configured

## Continuous Deployment

Once connected to GitHub:

- Every push to `main` branch auto-deploys
- Pull requests create preview deployments
- Rollback to previous deployments anytime from Netlify Dashboard

## Monitoring & Analytics

### Add Netlify Analytics (Optional)

1. Go to your site dashboard
2. Click "Analytics" tab
3. Enable Netlify Analytics ($9/month)

### Add Google Analytics (Free)

Add to `app/layout.tsx` before closing `</head>`:

```tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOUR_GA_ID');
    `,
  }}
/>
```

## Troubleshooting

### Build Fails

Check build logs in Netlify Dashboard:

```bash
# Common issues:
# 1. Node version - specified in netlify.toml (18)
# 2. Missing dependencies - run npm install
# 3. TypeScript errors - run npm run typecheck locally
```

### 404 Errors

- Ensure `netlify.toml` includes SPA redirect rules (already configured)
- Check publish directory is set to `out`

### Contact Form Not Working

- Verify `data-netlify="true"` is present in form (already done)
- Check Netlify Dashboard → Forms to see if form is detected
- May take 5-10 minutes after first deployment

### Slow Build Times

- Builds typically take 2-3 minutes
- Enable "Build Plugins" in Netlify for caching

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Netlify Community](https://answers.netlify.com)

## Checklist Before Going Live

- [ ] Update resume PDF in `public/resume.pdf`
- [ ] Update personal email in contact section
- [ ] Test all links (GitHub, LinkedIn, etc.)
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify dark mode works correctly
- [ ] Run Lighthouse audit (should be 95+)
- [ ] Update meta description and title
- [ ] Test all section animations
- [ ] Verify all projects have correct links

## Success!

Your portfolio is now live at: **https://sumitdev.netlify.app**

Share it with:
- Recruiters and hiring managers
- LinkedIn network
- GitHub profile
- Resume/CV

---

**Note**: This is a static site (no server required), so it's:
- ✅ Free to host on Netlify
- ✅ Lightning fast (served from CDN)
- ✅ Highly secure (no backend vulnerabilities)
- ✅ Extremely reliable (99.9% uptime)
