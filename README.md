# Premium Software Developer Portfolio

A modern, fully responsive, production-ready portfolio website built with React 19, Vite, Tailwind CSS, Framer Motion, and EmailJS.

## Features

✨ **Modern Design**
- Premium dark theme with glassmorphism effects
- Smooth animations and transitions using Framer Motion
- Fully responsive design (mobile, tablet, desktop)
- Beautiful gradients and soft shadows
- Scroll-triggered animations

🚀 **Performance**
- Lightning-fast builds with Vite
- Optimized images and code splitting
- Lazy-loaded components
- SEO-friendly structure
- Production-ready optimization

💻 **Components**
- Sticky navigation with smooth scrolling
- Hero section with profile image and CTA buttons
- About section with animated cards
- Skills section with progress bars and categories
- Projects showcase with hover effects
- Certifications timeline
- Education timeline
- Achievements cards
- Contact form with EmailJS integration
- Footer with social links

📱 **Responsive**
- Mobile-first design
- Hamburger menu for mobile devices
- Touch-friendly interactions
- Adapts perfectly to all screen sizes

🔧 **Technologies**
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Router
- React Helmet Async
- EmailJS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd my_portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your EmailJS credentials:
```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_RECIPIENT_EMAIL=your-email@example.com
```

### EmailJS Setup

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service (e.g., Gmail)
4. Create an email template with variables: `from_name`, `from_email`, `subject`, `message`
5. Copy your Service ID, Template ID, and Public Key to `.env.local`

### Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Certifications.jsx
│   ├── Education.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/              # Page components
│   └── Home.jsx
├── data/               # Data files
│   ├── projects.js
│   ├── skills.js
│   └── certificates.js
├── hooks/              # Custom React hooks
│   └── useInView.js
├── assets/             # Images and static files
├── App.jsx             # Main App component
├── main.jsx            # React DOM render
└── index.css           # Global styles

public/                 # Public assets
.env.example           # Environment variables template
.gitignore            # Git ignore file
index.html            # HTML entry point
package.json          # Dependencies and scripts
vite.config.js        # Vite configuration
tailwind.config.js    # Tailwind CSS configuration
postcss.config.js     # PostCSS configuration
```

## Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.jsx`:
   - Change name and title
   - Update profile image URL
   - Modify introduction text

2. **About Section** - Edit `src/components/About.jsx`:
   - Update bio and career goals
   - Modify passion and interests

3. **Skills** - Edit `src/data/skills.js`:
   - Add/remove skills
   - Adjust proficiency levels
   - Modify categories

4. **Projects** - Edit `src/data/projects.js`:
   - Add your projects with details
   - Update project images
   - Add GitHub and demo links

5. **Certifications** - Edit `src/data/certificates.js`:
   - Add your certifications
   - Update dates and credentials

6. **Education** - Edit `src/components/Education.jsx`:
   - Update institution name
   - Change graduation year
   - Modify CGPA and coursework

### Color Theme

The color scheme is defined in `tailwind.config.js`. To customize colors, modify:

```javascript
colors: {
  primary: {
    900: '#0F172A',    // Background
  },
  secondary: {
    900: '#111827',    // Secondary
  },
  accent: {
    500: '#3B82F6',    // Primary accent
    400: '#60A5FA',    // Accent hover
  },
}
```

### Animations

Framer Motion animations can be customized in each component. Adjust:
- `initial` - Starting animation state
- `animate` - End animation state
- `transition` - Animation timing and duration
- `whileHover` - Hover effects
- `whileTap` - Click effects

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Add environment variables from `.env.local`
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Drag and drop the `dist/` folder to Netlify**
   - Or connect GitHub and automatic deploys will work

3. **Add environment variables**
   - Go to Site Settings → Build & Deploy → Environment
   - Add your EmailJS credentials

### Deploy to GitHub Pages

1. **Update `vite.config.js`**
```javascript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

2. **Build and deploy**
```bash
npm run build
npm run deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Images**
   - Use optimized images
   - Consider using WebP format
   - Lazy load images when possible

2. **Bundle Size**
   - Tree-shake unused dependencies
   - Code-split larger components
   - Minify CSS and JavaScript

3. **SEO**
   - Update meta tags in `index.html`
   - Use meaningful headings
   - Optimize images with alt text
   - Submit sitemap to search engines

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG standards
- Focus indicators for keyboard users

## Best Practices Implemented

✅ Clean, maintainable code
✅ Component reusability
✅ Responsive design patterns
✅ Performance optimization
✅ SEO best practices
✅ Accessibility standards
✅ Modern React patterns (hooks, functional components)
✅ Proper error handling
✅ Environment variable management
✅ Git-ready (.gitignore included)

## Troubleshooting

### EmailJS Not Working
- Verify all three environment variables are set correctly
- Check EmailJS dashboard for service/template status
- Ensure email template has correct variable names

### Animations Not Smooth
- Check browser DevTools performance tab
- Reduce number of simultaneous animations
- Ensure hardware acceleration is enabled

### Build Failing
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear Vite cache with `rm -rf .vite`

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on the repository or contact me through the portfolio contact form.

## Future Enhancements

- [ ] Blog section with markdown support
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Project filtering and search
- [ ] Newsletter subscription
- [ ] More interactive animations
- [ ] Client testimonials section
- [ ] Advanced analytics integration

---

Built with ❤️ using React, Vite, and Tailwind CSS. Ready for production deployment to Vercel without modification.
