# Setup Instructions

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`:
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Router
- React Helmet Async
- EmailJS

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_RECIPIENT_EMAIL=your-email@example.com
```

### 3. Set Up EmailJS

EmailJS allows the contact form to send emails without a backend.

#### Steps:

1. **Create Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Verify your email

2. **Add Email Service**
   - Go to "Email Services" in the dashboard
   - Click "Add Service"
   - Select Gmail (or your email provider)
   - Follow the authentication steps
   - Copy the Service ID

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Set up template with these variables:
     ```
     {{from_name}}
     {{from_email}}
     {{subject}}
     {{message}}
     {{to_email}}
     ```
   - Example template body:
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
   - Copy the Template ID

4. **Get Credentials**
   - Go to "Account" settings
   - Copy your Public Key
   - Add these to `.env.local`

### 4. Customize Content

#### Update Personal Information

**1. Hero Section**
- Edit `src/components/Hero.jsx`
- Change "Your Name" to your name
- Update "Software Developer" if needed
- Modify the introduction text
- Replace profile image URL

**2. About Section**
- Edit `src/components/About.jsx`
- Update bio and passion description
- Modify interests and goals

**3. Skills**
- Edit `src/data/skills.js`
- Add/remove skills as needed
- Adjust proficiency levels (0-100)
- Update skill categories

**4. Projects**
- Edit `src/data/projects.js`
- Add your 6 projects with:
  - Title and description
  - Technologies used
  - Project image URL
  - GitHub repository link
  - Live demo link

**5. Certifications**
- Edit `src/data/certificates.js`
- Add your certifications with:
  - Name and organization
  - Date obtained
  - Credential ID and URL

**6. Education**
- Edit `src/components/Education.jsx`
- Update institution name
- Change graduation year and CGPA
- Modify coursework

**7. Contact Information**
- Edit `src/components/Contact.jsx`
- Update email address
- Add phone number
- Update social media links

**8. Footer**
- Edit `src/components/Footer.jsx`
- Update copyright year (auto-updates)
- Update social links

**9. Navigation**
- Edit `src/components/Navbar.jsx`
- Customize logo text
- Modify navigation items if needed

### 5. Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

Open your browser and see your portfolio in action!

### 6. Test Contact Form

1. Navigate to the Contact section
2. Fill out the form with test data
3. Click "Send Message"
4. Check your email inbox for the test message

## Customization Guide

### Adding a New Project

1. Edit `src/data/projects.js`
2. Add a new object to `projectsData` array:

```javascript
{
  id: 7,
  title: "Your Project Name",
  description: "Project description here",
  image: "https://example.com/image.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/project",
  demo: "https://project-demo.com",
}
```

### Updating Colors

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    900: '#0F172A',  // Main background
  },
  secondary: {
    900: '#111827',  // Secondary background
  },
  accent: {
    500: '#3B82F6',  // Primary accent
    400: '#60A5FA',  // Hover accent
  },
}
```

### Changing Fonts

1. Edit `tailwind.config.js`
2. Update the `fontFamily` section
3. Import new fonts in `index.html`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import it in `src/pages/Home.jsx`
3. Add it to the page layout
4. Add a scroll ID for navigation

Example:
```jsx
// src/components/Blog.jsx
const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4">
      {/* Your content */}
    </section>
  );
};

// src/pages/Home.jsx
import Blog from '../components/Blog';

// Add to Home component
<Blog />
```

### Modifying Animations

Framer Motion animations can be customized in each component:

```jsx
// Change animation speed
transition={{ duration: 1 }}  // Slower
transition={{ duration: 0.3 }} // Faster

// Change animation type
initial={{ opacity: 0, y: 20 }}    // Fade in from below
initial={{ opacity: 0, scale: 0.8 }} // Scale in
initial={{ opacity: 0, x: -50 }}    // Slide in from left

// Add hover effects
whileHover={{ scale: 1.1 }}  // Zoom on hover
whileHover={{ y: -10 }}      // Lift on hover
```

### Using Images

For best performance:

1. **Use Unsplash/Pexels**
   - Free high-quality images
   - Direct URL usage
   - No credit needed

2. **Optimize Local Images**
   ```bash
   # Install image optimization tool
   npm install -D imagemin
   
   # Optimize images
   npx imagemin src/assets/*.{jpg,png} --out-dir=src/assets/optimized
   ```

3. **WebP Format**
   - Use WebP for smaller file sizes
   - Fallback to JPG for older browsers

### SEO Optimization

1. **Update Meta Tags** in `index.html`:
```html
<meta name="description" content="Your portfolio description" />
<meta name="keywords" content="your, keywords, here" />
<meta property="og:title" content="Your Name - Developer" />
<meta property="og:image" content="https://your-domain.com/og-image.png" />
```

2. **Add Structured Data**:
Create `src/components/SEO.jsx`:
```jsx
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);
```

3. **Create Sitemap**:
Add `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2024-01-01</lastmod>
  </url>
</urlset>
```

## Development Tips

### Code Organization

```
src/
├── components/     # Reusable UI components
├── pages/         # Page-level components
├── data/          # Static data and configs
├── hooks/         # Custom React hooks
├── constants/     # Constants and utilities
├── styles/        # Global styles
└── assets/        # Images and media
```

### Component Naming
- Use PascalCase: `MyComponent.jsx`
- One component per file
- Name files after component

### Props and Drilling
- Keep prop drilling minimal
- Use context for global state
- Pass only necessary props

### Reusable Components
Create a `Button` component for consistency:

```jsx
// src/components/Button.jsx
const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClass = 'px-6 py-3 rounded-lg font-semibold transition-all';
  const variants = {
    primary: 'bg-accent-500 text-primary-900 hover:shadow-glow-lg',
    secondary: 'border-2 border-accent-500 text-accent-400',
  };
  
  return (
    <button className={`${baseClass} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
```

## Performance Optimization

### Before Deployment

1. **Run Build**
   ```bash
   npm run build
   ```

2. **Check Bundle Size**
   ```bash
   npm install -g source-map-explorer
   source-map-explorer 'dist/**/*.js'
   ```

3. **Analyze Performance**
   - Use Chrome DevTools
   - Check Lighthouse score
   - Aim for 90+ on all metrics

4. **Optimize Images**
   - Compress images: `imagemin`
   - Use WebP format
   - Add alt text

### Lazy Loading

```jsx
import { lazy, Suspense } from 'react';

const Blog = lazy(() => import('./Blog'));

// In parent component
<Suspense fallback={<div>Loading...</div>}>
  <Blog />
</Suspense>
```

## Testing

### Run Linter
```bash
npm run lint
```

### Manual Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iPhone, iPad, Android
- [ ] Test form submission
- [ ] Test all navigation links
- [ ] Test social media links
- [ ] Check scroll performance

## Troubleshooting

### Issue: Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 5173 already in use
```bash
# Use different port
npm run dev -- --port 3000
```

### Issue: Styles not applying
- Check Tailwind config
- Verify CSS import order
- Clear browser cache
- Restart dev server

### Issue: Images not loading
- Check image URLs
- Verify image paths are relative or absolute
- Check browser console for errors
- Ensure images are in `public/` or accessible online

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure EmailJS
3. ✅ Update personal information
4. ✅ Test locally with `npm run dev`
5. ✅ Build for production with `npm run build`
6. ✅ Deploy to Vercel or your hosting
7. ✅ Monitor performance and user feedback

## Support & Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

---

Happy coding! 🚀
