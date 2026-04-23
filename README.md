# Nitin Chakradhari - Portfolio Website

A modern, responsive portfolio website built with React, showcasing backend development expertise and full-stack capabilities.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0e27/00d9ff?text=Portfolio+Preview)

## 🎨 Features

- ✨ Modern, professional design with dark theme and electric blue accents
- 📱 Fully responsive and mobile-friendly
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 🎯 SEO-friendly structure
- 🔧 Easy to customize and maintain
- 📬 Contact form integration ready

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with custom properties
- **React Icons** - Icon library
- **EmailJS** - Contact form (optional)

## 📂 Project Structure

```
portfolio-project/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Education.jsx
│   │   ├── Education.css
│   │   ├── Certificates.jsx
│   │   ├── Certificates.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── assets/
│   │   └── (place your images here)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Customization Guide

### 1️⃣ Replace Profile Photo

**Location:** `src/components/Hero.jsx` (line ~13)

```jsx
// Replace this placeholder:
<img 
  src="https://via.placeholder.com/400x400/0a0e27/00d9ff?text=NC" 
  alt="Nitin Chakradhari" 
/>

// With your image:
// Option 1: Using local file
<img 
  src="/src/assets/profile.jpg" 
  alt="Nitin Chakradhari" 
/>

// Option 2: Using external URL
<img 
  src="https://your-image-url.com/profile.jpg" 
  alt="Nitin Chakradhari" 
/>
```

**Steps:**
1. Add your photo to `src/assets/profile.jpg`
2. Update the `src` attribute in Hero.jsx
3. Recommended size: 400x400px

### 2️⃣ Update Personal Information

**Contact Details:** `src/components/Contact.jsx`
```javascript
const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'your.email@example.com',  // Update this
    link: 'mailto:your.email@example.com'  // Update this
  },
  {
    icon: <FaPhone />,
    title: 'Phone',
    value: '+91 XXXXX XXXXX',  // Update this
    link: 'tel:+91XXXXXXXXXX'  // Update this
  }
];
```

**Social Links:** Multiple files
- `src/components/Hero.jsx` (lines ~50-65)
- `src/components/Contact.jsx` (lines ~47-61)
- `src/components/Footer.jsx` (lines ~14-18)

Update GitHub and LinkedIn URLs:
```javascript
{
  href: "https://github.com/YOUR-USERNAME"  // Update
  href: "https://linkedin.com/in/YOUR-USERNAME"  // Update
}
```

### 3️⃣ Update Resume

**Location:** `src/components/Hero.jsx` (line ~41)

```jsx
<a 
  href="/resume.pdf"  // Update this path
  download 
  className="btn btn-primary"
>
```

**Steps:**
1. Add your resume PDF to the `public` folder as `resume.pdf`
2. Or update the path to match your file name

### 4️⃣ Customize Content

**About Section:** `src/components/About.jsx`
- Update the bio paragraphs (lines ~38-60)
- Modify tools and technologies mentioned

**Skills:** `src/components/Skills.jsx`
- Add/remove skills from the `skillCategories` array (lines ~26-98)
- Update colors for each skill icon

**Projects:** `src/components/Projects.jsx`
- Update the `projects` array (lines ~6-58)
- Add your GitHub repository links
- Update project descriptions and tech stacks

**Experience:** `src/components/Experience.jsx`
- Modify the `experiences` array (lines ~6-76)
- Update company names, roles, and dates
- Change responsibilities and technologies

**Education:** `src/components/Education.jsx`
- Update the `education` array (lines ~6-26)
- Change university, degree, and courses

**Certificates:** `src/components/Certificates.jsx`
- Update the `certificates` array (lines ~6-32)
- Add certificate images to `src/assets/certificates/`
- Update image paths and verification links

### 5️⃣ Color Customization

**Location:** `src/styles/index.css` (lines ~1-16)

```css
:root {
  /* Change these colors to match your preference */
  --accent-primary: #00d9ff;  /* Main accent color */
  --accent-secondary: #0099ff;  /* Secondary accent */
  --bg-primary: #0a0e27;  /* Main background */
  --bg-secondary: #111630;  /* Section background */
  
  /* Or try these alternatives: */
  /* Purple theme */
  /* --accent-primary: #a855f7; --accent-secondary: #7c3aed; */
  
  /* Green theme */
  /* --accent-primary: #10b981; --accent-secondary: #059669; */
  
  /* Orange theme */
  /* --accent-primary: #f59e0b; --accent-secondary: #d97706; */
}
```

## 📧 Contact Form Setup (Optional)

The contact form is ready but needs EmailJS integration:

### EmailJS Setup

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Install EmailJS**
   ```bash
   npm install emailjs-com
   ```

3. **Get your credentials**
   - Service ID
   - Template ID
   - Public Key

4. **Update Contact.jsx**

```javascript
import emailjs from 'emailjs-com';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target,
    'YOUR_PUBLIC_KEY'
  )
  .then((result) => {
    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  }, (error) => {
    setFormStatus('error');
  });
};
```

## 🌐 Deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Run: `netlify deploy --prod`
   - Or drag the `dist` folder to Netlify dashboard

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://YOUR-USERNAME.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

## 🎯 SEO Optimization

Update meta tags in `index.html`:

```html
<meta name="description" content="Your custom description" />
<meta name="keywords" content="Your, Keywords, Here" />
<title>Your Name | Portfolio</title>
```

## 🐛 Common Issues

### Issue: Icons not showing
**Solution:** Make sure react-icons is installed
```bash
npm install react-icons
```

### Issue: Build fails
**Solution:** Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Smooth scroll not working
**Solution:** Make sure all section IDs match the href links in navigation

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Nitin Chakradhari**
- GitHub: [@nitin-chakradhari](https://github.com/nitin-chakradhari)
- LinkedIn: [nitin-chakradhari](https://linkedin.com/in/nitin-chakradhari)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ using React and Vite**
#   P o r t f o l i o  
 