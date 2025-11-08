# Sumit Kumar - Portfolio 

A highly professional, recruiter-attracting portfolio website built with Next.js 14, featuring stunning animations, interactive charts, and a modern design.

## 🚀 Live Demo

👉 [Visit the Live Site](https://sumitkportfoliodev.netlify.app)

## ✨ Features

- **Modern Design**: Clean, minimalist design with blue color scheme and smooth animations
- **Dark Mode**: Full dark mode support with theme persistence
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Animated**: Framer Motion animations throughout (typewriter effects, scroll reveals, hover interactions)
- **Interactive Charts**: Recharts-powered skill visualizations and project metrics
- **SEO Optimized**: Meta tags, Open Graph, structured data for excellent search visibility
- **Performance**: Lighthouse score 95+, optimized images and code splitting
- **Accessible**: ARIA labels, semantic HTML, keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Charts**: Recharts
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes
- **Deployment**: Netlify

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

## 🌐 Deployment to Netlify

### Option 1: Deploy from GitHub

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Netlify will auto-detect Next.js and configure build settings
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

### Option 3: Drag and Drop

```bash
# Build the project
npm run build

# The 'out' folder contains your static site
# Drag and drop the 'out' folder to Netlify's deploy page
```

## 🎨 Customization

### Update Personal Information

Edit the following files to customize content:

- **Hero Section**: `components/sections/hero-section.tsx`
- **About**: `components/sections/about-section.tsx`
- **Skills**: `components/sections/skills-section.tsx`
- **Projects**: `components/sections/projects-section.tsx`
- **Experience**: `components/sections/experience-section.tsx`
- **Education**: `components/sections/education-section.tsx`
- **Certifications**: `components/sections/certifications-section.tsx`
- **Contact**: `components/sections/contact-section.tsx`

### Update Resume

Replace `public/resume.pdf` with your actual resume file.

### Change Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: 217.2 91.2% 59.8%; /* Blue-500 */
  /* Update other color variables as needed */
}
```

### Update Metadata

Edit `app/layout.tsx` to update SEO information:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description',
  // ... other metadata
};
```

## 📧 Contact Form Setup

The contact form is configured to work with Netlify Forms:

1. The form includes `data-netlify="true"` attribute
2. After deployment, go to Netlify Dashboard → Forms
3. You'll receive email notifications for form submissions
4. Optionally configure custom notifications or integrations

## 🔧 Environment Variables

No environment variables required for basic deployment. The site is fully static.

## 📱 Sections Overview

1. **Hero**: Eye-catching introduction with animated stats and CTAs
2. **About**: Personal story with interactive timeline and skills marquee
3. **Skills**: Animated charts showing programming, frontend, backend, and AI/ML skills
4. **Projects**: Featured projects with detailed modals and performance metrics
5. **Experience**: Professional journey with achievements and impact metrics
6. **Education**: Academic background with progress indicators
7. **Certifications**: Filterable grid of certificates and achievements
8. **Contact**: Contact form with Netlify Forms integration
9. **Footer**: Social links and navigation with back-to-top button

## 🎯 Performance Optimizations

- Static site generation for instant loading
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal external dependencies
- CSS optimization with Tailwind's purge
- Framer Motion performance mode

## 🌟 Key Highlights

- **30%** workflow efficiency improvement (Python automation)
- **15%** ML model accuracy boost (TensorFlow optimization)
- **5+** featured projects with real metrics
- **4+** certifications and internships
- **2** degrees (BCA completed, MCA ongoing)

## 📄 License

This portfolio template is open source. Feel free to use it for your own portfolio!

## 🤝 Connect

- **GitHub**: [github.com/sumit7366](https://github.com/sumit7366)
- **LinkedIn**: [linkedin.com/in/sumit7366](https://www.linkedin.com/in/sumit7366/)
- **Email**: sumit@example.com
- **Location**: Patna, Bihar, India

---

Built with ❤️ using React and Next.js
