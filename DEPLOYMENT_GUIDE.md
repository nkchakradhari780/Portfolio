# 🚀 Deployment Guide

This guide will help you deploy your portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information (name, email, phone)
- [ ] Replaced the profile photo
- [ ] Added your resume PDF
- [ ] Updated all social media links
- [ ] Customized project descriptions
- [ ] Added your certificates
- [ ] Tested the contact form
- [ ] Updated meta tags for SEO

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Pros:** Free tier, automatic HTTPS, custom domain support, easy rollbacks

#### Method A: Drag and Drop (Easiest)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://www.netlify.com/)

3. Drag the `dist` folder to the Netlify dashboard

4. Done! Your site is live

#### Method B: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login:
   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

#### Method C: GitHub Integration

1. Push your code to GitHub

2. Go to Netlify and click "New site from Git"

3. Connect your GitHub repository

4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. Click "Deploy site"

**Custom Domain on Netlify:**
1. Go to Site settings > Domain management
2. Add custom domain
3. Follow DNS configuration instructions

---

### Option 2: Vercel

**Pros:** Excellent performance, free tier, automatic HTTPS, easy GitHub integration

#### Method A: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts

4. For production:
   ```bash
   vercel --prod
   ```

#### Method B: GitHub Integration

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com/)

3. Import your GitHub repository

4. Vercel will auto-detect Vite settings

5. Click "Deploy"

**Custom Domain on Vercel:**
1. Go to Project Settings > Domains
2. Add your domain
3. Configure DNS records

---

### Option 3: GitHub Pages

**Pros:** Free, simple, good for static sites

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://YOUR-USERNAME.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/'  // Add this line
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: gh-pages branch
   - Save

**Custom Domain on GitHub Pages:**
1. Add a `CNAME` file to `public` folder with your domain
2. Configure DNS at your domain provider
3. Enable "Enforce HTTPS" in GitHub settings

---

### Option 4: Firebase Hosting

**Pros:** Free tier, fast CDN, good analytics

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize:
   ```bash
   firebase init hosting
   ```

4. Configure:
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Build command: `npm run build`

5. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

### Option 5: Render

**Pros:** Free tier, automatic deploys

1. Push code to GitHub

2. Go to [Render](https://render.com/)

3. New > Static Site

4. Connect repository

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Create Static Site

---

## 🔧 Build Optimization

### Before deploying, optimize your build:

1. **Minify and optimize:**
   ```bash
   npm run build
   ```

2. **Check build size:**
   ```bash
   ls -lh dist/
   ```

3. **Test production build locally:**
   ```bash
   npm run preview
   ```

### Performance Tips:

1. **Compress images:**
   - Use tools like TinyPNG
   - Recommended formats: WebP, AVIF
   - Max size: 500KB per image

2. **Lazy load images:**
   ```jsx
   <img loading="lazy" src="..." alt="..." />
   ```

3. **Use production React:**
   Vite automatically uses production React in builds

---

## 🌍 Custom Domain Setup

### General Steps (applies to most hosts):

1. **Buy a domain** from:
   - Namecheap
   - Google Domains
   - GoDaddy
   - Domain.com

2. **Configure DNS records:**

   For Netlify/Vercel:
   ```
   Type: A
   Name: @
   Value: [Host IP from platform]

   Type: CNAME
   Name: www
   Value: [Your site URL from platform]
   ```

3. **Wait for DNS propagation** (up to 48 hours)

4. **Enable HTTPS** (usually automatic on modern hosts)

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)

2. Get tracking ID

3. Add to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

---

## 🔒 Security Best Practices

1. **Never commit sensitive data:**
   - API keys
   - Passwords
   - Private keys

2. **Use environment variables:**
   Create `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

3. **Add `.env` to `.gitignore`**

4. **Use HTTPS** (enabled by default on most platforms)

---

## 🐛 Troubleshooting

### Build fails on deployment

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 errors on refresh

**Solution:** Configure redirects

For Netlify, create `public/_redirects`:
```
/*    /index.html   200
```

For Vercel, create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Images not loading

**Solution:** Check image paths are relative or use `import`
```javascript
import profileImg from './assets/profile.jpg';
<img src={profileImg} alt="Profile" />
```

---

## 📞 Support

If you encounter issues:

1. Check the platform's documentation
2. Search Stack Overflow
3. Check GitHub issues
4. Contact the hosting platform support

---

## 🎉 Post-Deployment

After deployment:

1. ✅ Test all links
2. ✅ Check mobile responsiveness
3. ✅ Test contact form
4. ✅ Verify images load
5. ✅ Check page speed (use Google PageSpeed Insights)
6. ✅ Test on different browsers
7. ✅ Add to resume/LinkedIn
8. ✅ Share on social media!

---

**Congratulations! Your portfolio is now live! 🎊**
