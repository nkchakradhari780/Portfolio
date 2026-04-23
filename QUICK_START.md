# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🎯 What You'll Do

1. ✅ Install dependencies
2. ✅ Run the project
3. ✅ Make it yours
4. ✅ Deploy it

---

## 📋 Prerequisites

Make sure you have installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

Check versions:
```bash
node --version
npm --version
```

---

## 🚀 Step 1: Install Dependencies

Open terminal in project folder and run:

```bash
npm install
```

This will install:
- React
- React DOM
- React Icons
- Vite
- All development dependencies

⏱️ **Time:** 1-2 minutes

---

## 🎨 Step 2: Run Development Server

Start the project:

```bash
npm run dev
```

You should see:
```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

Open browser and go to: **http://localhost:3000**

🎉 **You should see your portfolio!**

---

## ✏️ Step 3: Customize (5 Essential Changes)

### Change 1: Replace Profile Photo (2 min)
1. Add your photo to `src/assets/` as `profile.jpg`
2. Open `src/components/Hero.jsx`
3. Find line ~13, update image source:
   ```jsx
   <img src="/src/assets/profile.jpg" alt="Your Name" />
   ```

### Change 2: Update Name & Title (1 min)
Open `src/components/Hero.jsx`, find lines ~22-27:
```jsx
<h1 className="hero-name">
  Your Name Here
</h1>
<h2 className="hero-title">
  <span className="gradient-text">Your Title</span>
  <span className="hero-title-sub">(Your Specialty)</span>
</h2>
```

### Change 3: Update Email (1 min)
Open `src/components/Contact.jsx`, find line ~28:
```javascript
value: 'your.email@example.com',
link: 'mailto:your.email@example.com'
```

Also update in:
- `src/components/Hero.jsx` (line ~66)
- `src/components/Footer.jsx` (line ~18)

### Change 4: Update GitHub/LinkedIn (1 min)
Search for `github.com/nitin-chakradhari` and replace with your username in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

Same for LinkedIn: `linkedin.com/in/nitin-chakradhari`

### Change 5: Add Resume (30 sec)
1. Save your resume as `resume.pdf`
2. Place it in `public/` folder
3. It's already linked in the Hero section!

---

## 🏗️ Step 4: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files.

Preview production build:
```bash
npm run preview
```

---

## 🌐 Step 5: Deploy (Choose One)

### Option A: Netlify (Easiest - Recommended)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://app.netlify.com/)

3. Drag the `dist` folder to Netlify

4. **Done!** Your site is live! 🎉

### Option B: Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts

4. **Done!** Get your live URL

### Option C: GitHub Pages

1. Push code to GitHub

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## 📚 Next Steps

Now that it's running:

1. **Read Full Docs:**
   - `README.md` - Complete overview
   - `CUSTOMIZATION_GUIDE.md` - Detailed customization
   - `DEPLOYMENT_GUIDE.md` - Advanced deployment

2. **Customize Everything:**
   - Update About section
   - Add your projects
   - Update skills
   - Add work experience
   - Upload certificates

3. **Test:**
   - Check on mobile devices
   - Test all links
   - Verify contact form
   - Check different browsers

4. **Share:**
   - Add to resume
   - Share on LinkedIn
   - Add to GitHub README
   - Tell friends! 🎊

---

## 🆘 Troubleshooting

### Port 3000 already in use?

Try a different port:
```bash
npm run dev -- --port 3001
```

### Dependencies not installing?

Clear cache and try again:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails?

Make sure Node.js version is 14+:
```bash
node --version
```

Update if needed from [nodejs.org](https://nodejs.org/)

### Images not showing?

Check file paths are correct:
```jsx
// Use absolute path from src
<img src="/src/assets/image.jpg" />

// Or import
import img from './assets/image.jpg';
<img src={img} />
```

---

## 📖 File Locations Quick Reference

**Customize These Files:**

| What to Update | File Location |
|----------------|---------------|
| Profile Photo | `src/components/Hero.jsx` line ~13 |
| Name & Title | `src/components/Hero.jsx` lines ~22-27 |
| About Bio | `src/components/About.jsx` lines ~38-61 |
| Skills | `src/components/Skills.jsx` lines ~26-98 |
| Projects | `src/components/Projects.jsx` lines ~6-58 |
| Experience | `src/components/Experience.jsx` lines ~6-76 |
| Education | `src/components/Education.jsx` lines ~6-26 |
| Certificates | `src/components/Certificates.jsx` lines ~6-32 |
| Contact Info | `src/components/Contact.jsx` lines ~25-57 |
| Social Links | Multiple files (see guide) |
| Colors | `src/styles/index.css` lines ~1-16 |
| SEO Meta Tags | `index.html` |

---

## ⏱️ Time Estimate

- Install: 2 minutes
- Run: 30 seconds
- Basic customization: 10 minutes
- Full customization: 1-2 hours
- Deploy: 5 minutes

**Total to get online: ~20 minutes**

---

## 🎯 Success Criteria

You're ready to deploy when:
- ✅ Site runs without errors
- ✅ All links work
- ✅ Personal info updated
- ✅ Profile photo added
- ✅ Resume uploaded
- ✅ Social links updated
- ✅ Looks good on mobile
- ✅ No console errors

---

## 💪 You've Got This!

Building a portfolio is a big step in your career. Take your time, make it yours, and be proud of what you create!

**Questions?** Check the full documentation files in the project.

**Ready to ship?** Go to DEPLOYMENT_GUIDE.md

---

**Let's build something amazing! 🚀**
