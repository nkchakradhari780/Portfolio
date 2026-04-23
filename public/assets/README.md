# Assets Folder

This folder contains all images and media files for your portfolio.

## 📁 Structure

```
assets/
├── profile.jpg              # Your profile photo (add this)
├── certificates/            # Certificate images folder
│   ├── cert1.jpg           # Add your certificates here
│   ├── cert2.jpg
│   └── ...
└── README.md               # This file
```

## 📸 Profile Photo

**What:** Your professional headshot or profile picture

**Specs:**
- Size: 400x400px (square)
- Format: JPG or PNG
- File size: Under 200KB
- Filename: `profile.jpg`

**Where it's used:** Hero section

**How to add:**
1. Add your photo to this folder as `profile.jpg`
2. Update `src/components/Hero.jsx` line ~13:
   ```jsx
   <img src="/src/assets/profile.jpg" alt="Your Name" />
   ```

## 📜 Certificates

**What:** Images of your professional certificates

**Specs:**
- Size: 1200x900px or similar aspect ratio
- Format: JPG or PNG
- High resolution for clarity
- Filenames: `cert1.jpg`, `cert2.jpg`, etc.

**Where they're used:** Certificates section

**How to add:**
1. Add certificate images to `assets/certificates/` folder
2. Update `src/components/Certificates.jsx`:
   ```javascript
   {
     title: 'Certificate Name',
     issuer: 'Issuing Organization',
     date: 'Month Year',
     image: '/src/assets/certificates/cert1.jpg',  // Update path
     link: 'https://verify-link.com'
   }
   ```

## 💡 Tips

- Compress images before adding (use TinyPNG.com)
- Use descriptive filenames
- Keep file sizes reasonable
- Use WebP format for better performance (optional)

## 🔄 Using Images in Components

```javascript
// Import method (recommended)
import profileImg from './assets/profile.jpg';

function Component() {
  return <img src={profileImg} alt="Profile" />;
}
```

or

```jsx
// Direct path method
<img src="/src/assets/profile.jpg" alt="Profile" />
```

---

**Remember:** After adding your images, delete the placeholder files and update the component paths!
