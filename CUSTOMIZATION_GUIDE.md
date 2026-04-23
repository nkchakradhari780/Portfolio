# 🎨 Customization Guide

Complete guide to personalizing your portfolio website.

## 📸 1. Profile Photo

### Where to Update
**File:** `src/components/Hero.jsx` (Line ~13)

### Current Code
```jsx
<img 
  src="https://via.placeholder.com/400x400/0a0e27/00d9ff?text=NC" 
  alt="Nitin Chakradhari" 
  className="hero-image"
/>
```

### Option A: Local Image
1. Add your photo to `src/assets/` folder
2. Name it `profile.jpg` (or any name you prefer)
3. Update the code:

```jsx
<img 
  src="/src/assets/profile.jpg" 
  alt="Your Name" 
  className="hero-image"
/>
```

### Option B: External URL
```jsx
<img 
  src="https://your-image-url.com/profile.jpg" 
  alt="Your Name" 
  className="hero-image"
/>
```

### Recommended Specs
- **Size:** 400x400px (square)
- **Format:** JPG or PNG
- **File size:** Under 200KB
- **Background:** Solid color or professional setting

---

## 📝 2. Personal Information

### Name & Title
**File:** `src/components/Hero.jsx`

```jsx
<h1 className="hero-name">
  Your Name Here  {/* Line ~22 */}
</h1>
<h2 className="hero-title">
  <span className="gradient-text">Your Title</span>
  <span className="hero-title-sub">(Your Specialty)</span>
</h2>
```

### Tagline
**File:** `src/components/Hero.jsx` (Lines ~28-32)

```jsx
<p className="hero-description">
  Write your professional tagline here. 
  Keep it concise and impactful.
</p>
```

---

## 📧 3. Contact Information

### Email, Phone, Location
**File:** `src/components/Contact.jsx` (Lines ~25-41)

```javascript
const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'your.email@example.com',  // Update
    link: 'mailto:your.email@example.com'  // Update
  },
  {
    icon: <FaPhone />,
    title: 'Phone',
    value: '+1 234 567 8900',  // Update
    link: 'tel:+12345678900'  // Update
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    value: 'Your City, Country',  // Update
    link: null
  }
];
```

---

## 🔗 4. Social Media Links

Update in **THREE** files:

### A. Hero Section
**File:** `src/components/Hero.jsx` (Lines ~50-71)

```jsx
<a 
  href="https://github.com/YOUR-USERNAME"  // Update
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaGithub />
</a>
<a 
  href="https://linkedin.com/in/YOUR-USERNAME"  // Update
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaLinkedin />
</a>
<a 
  href="mailto:your.email@example.com"  // Update
>
  <FaEnvelope />
</a>
```

### B. Contact Section
**File:** `src/components/Contact.jsx` (Lines ~43-57)

```javascript
const socialLinks = [
  {
    icon: <FaGithub />,
    name: 'GitHub',
    link: 'https://github.com/YOUR-USERNAME'  // Update
  },
  // ... same for LinkedIn and Email
];
```

### C. Footer
**File:** `src/components/Footer.jsx` (Lines ~14-18)

```javascript
const socialLinks = [
  { 
    icon: <FaGithub />, 
    link: 'https://github.com/YOUR-USERNAME',  // Update
    label: 'GitHub' 
  },
  // ... etc
];
```

---

## 📄 5. Resume

### Add Your Resume
1. Save your resume as `resume.pdf`
2. Place it in the `public` folder
3. It will be accessible at `/resume.pdf`

### Update Download Link
**File:** `src/components/Hero.jsx` (Line ~41)

```jsx
<a 
  href="/resume.pdf"  // or "/your-resume-name.pdf"
  download 
  className="btn btn-primary"
>
  <FaDownload /> Download Resume
</a>
```

---

## 💼 6. About Section

**File:** `src/components/About.jsx`

### Update Bio
Lines ~38-61

```jsx
<p className="about-intro">
  I'm a <span className="highlight">Your Title</span> with expertise in 
  <span className="highlight"> your specialty</span>. 
  Write about what you do best.
</p>
<p>
  Your second paragraph about your experience and skills.
</p>
<p>
  Mention your tech stack and tools you work with.
</p>
```

### Update Highlights
Lines ~10-23

```javascript
const highlights = [
  {
    icon: <FaServer />,
    title: 'Your Skill 1',
    description: 'Description of this skill'
  },
  // Add more highlights...
];
```

---

## 🛠️ 7. Skills Section

**File:** `src/components/Skills.jsx`

### Add/Remove Skills
Lines ~26-98

```javascript
const skillCategories = [
  {
    title: 'Backend',
    skills: [
      { 
        name: 'Go', 
        icon: <SiGo />, 
        color: '#00ADD8' 
      },
      // Add your skills...
    ]
  },
  // Add more categories...
];
```

### Add New Skill Category

```javascript
{
  title: 'Your Category',
  skills: [
    { 
      name: 'Skill Name', 
      icon: <SiIcon />,  // Import from react-icons
      color: '#hexcolor' 
    }
  ]
}
```

### Update AI Tools
Lines ~104-114

```jsx
<div className="tools-list">
  <span className="tool-tag">Tool 1</span>
  <span className="tool-tag">Tool 2</span>
  {/* Add your tools */}
</div>
```

---

## 🚀 8. Projects Section

**File:** `src/components/Projects.jsx`

### Update Projects
Lines ~6-58

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Brief description of the project',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ],
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/username/repo',  // Your repo
    live: 'https://project-demo.com'  // Optional
  },
  // Add more projects...
];
```

### Add a New Project

```javascript
{
  title: 'New Project',
  description: 'What does it do?',
  features: [
    'Key feature 1',
    'Key feature 2'
  ],
  techStack: ['React', 'Node.js'],
  github: 'https://github.com/yourusername/project',
  live: null  // or live demo URL
}
```

---

## 💼 9. Experience Section

**File:** `src/components/Experience.jsx`

### Update Experiences
Lines ~6-76

```javascript
const experiences = [
  {
    company: 'Company Name',
    role: 'Your Role',
    type: 'Full-time / Internship / Contract',
    duration: 'Month Year - Present',
    location: 'City, Country',
    responsibilities: [
      'What you did',
      'Your achievements',
      'Technologies used'
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3']
  },
  // Add more experiences...
];
```

### Add New Experience

```javascript
{
  company: 'New Company',
  role: 'Position',
  type: 'Employment Type',
  duration: 'Start - End',
  location: 'Location',
  responsibilities: [
    'Responsibility 1',
    'Responsibility 2'
  ],
  technologies: ['Tool1', 'Tool2']
}
```

---

## 🎓 10. Education Section

**File:** `src/components/Education.jsx`

### Update Education
Lines ~6-26

```javascript
const education = [
  {
    degree: 'Your Degree',
    institution: 'University Name',
    location: 'City, State',
    duration: 'Year - Year',
    grade: 'CGPA: X.X/10 or GPA: X.X/4.0',
    relevantCourses: [
      'Course 1',
      'Course 2',
      'Course 3'
    ]
  }
];
```

### Add Multiple Degrees

Just add another object to the array:

```javascript
const education = [
  {
    degree: 'Bachelor Degree',
    institution: 'University 1',
    // ... details
  },
  {
    degree: 'Master Degree',
    institution: 'University 2',
    // ... details
  }
];
```

---

## 📜 11. Certificates Section

**File:** `src/components/Certificates.jsx`

### Add Certificates

1. **Add images** to `src/assets/certificates/`

2. **Update array** (Lines ~6-32):

```javascript
const certificates = [
  {
    title: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    image: '/src/assets/certificates/cert1.jpg',  // Your image
    link: 'https://verify-link.com'  // Verification link
  },
  // Add more certificates...
];
```

### Certificate Image Tips
- **Size:** 1200x900px or similar aspect ratio
- **Format:** JPG or PNG
- **Quality:** High resolution for zooming

---

## 🎨 12. Color Theme

**File:** `src/styles/index.css` (Lines ~1-16)

### Current Theme (Dark + Electric Blue)

```css
:root {
  --accent-primary: #00d9ff;
  --accent-secondary: #0099ff;
  --bg-primary: #0a0e27;
  --bg-secondary: #111630;
  --bg-tertiary: #1a1f3a;
}
```

### Alternative Themes

#### Purple Theme
```css
:root {
  --accent-primary: #a855f7;
  --accent-secondary: #7c3aed;
  --bg-primary: #0f0a1e;
  --bg-secondary: #1a0f2e;
  --bg-tertiary: #2a1f3a;
}
```

#### Green Theme
```css
:root {
  --accent-primary: #10b981;
  --accent-secondary: #059669;
  --bg-primary: #0a1e14;
  --bg-secondary: #0f2e1a;
  --bg-tertiary: #1a3a2a;
}
```

#### Orange Theme
```css
:root {
  --accent-primary: #f59e0b;
  --accent-secondary: #d97706;
  --bg-primary: #1e140a;
  --bg-secondary: #2e1f0f;
  --bg-tertiary: #3a2a1a;
}
```

---

## ✏️ 13. Fonts

**File:** `index.html` (Line ~9)

### Current Fonts
- **Headings:** Poppins
- **Body:** Poppins
- **Code:** JetBrains Mono

### Change Fonts

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Copy the `<link>` tag
4. Replace in `index.html`

Example:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
```

5. Update CSS in `src/styles/index.css`:
```css
body {
  font-family: 'Montserrat', sans-serif;
}

code {
  font-family: 'Fira Code', monospace;
}
```

---

## 🔍 14. SEO & Meta Tags

**File:** `index.html`

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Update these -->
  <meta name="description" content="Your professional description here" />
  <meta name="keywords" content="Your, Keywords, Here" />
  <meta name="author" content="Your Name" />
  
  <title>Your Name | Portfolio</title>
  
  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="URL to preview image" />
  <meta property="og:url" content="Your portfolio URL" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Your Name - Portfolio" />
  <meta name="twitter:description" content="Your description" />
  <meta name="twitter:image" content="URL to preview image" />
</head>
```

---

## 📱 15. Favicon

1. Create a favicon (16x16, 32x32, 64x64)
2. Use [favicon.io](https://favicon.io/) to generate
3. Replace `public/vite.svg` with your favicon
4. Update `index.html`:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

---

## ✅ Customization Checklist

- [ ] Profile photo updated
- [ ] Personal information (name, title, tagline)
- [ ] Contact details (email, phone, location)
- [ ] Social media links (all 3 files)
- [ ] Resume added and linked
- [ ] About section bio
- [ ] Skills updated
- [ ] Projects added/updated
- [ ] Experience section
- [ ] Education details
- [ ] Certificates added
- [ ] Colors customized (optional)
- [ ] Fonts changed (optional)
- [ ] SEO meta tags
- [ ] Favicon added

---

**Need Help?** Check the README.md or create an issue on GitHub!
