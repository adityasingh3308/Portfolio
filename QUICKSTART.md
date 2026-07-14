# Quick Start Guide

Get your portfolio live in 5 minutes! ⚡

## Step 1: Install & Run (2 min)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Your portfolio is now running at `http://localhost:5173`

## Step 2: Update Your Information (3 min)

### Priority 1: Personal Details (Must Do First)

**1. Update your name**
- File: `src/components/Hero.jsx` (Line ~37)
- Change: `Aditya narayan` → Your actual name

**2. Add profile image**
- File: `src/components/Hero.jsx` (Line ~18)
- Update the image URL in the Hero section

**3. Update email**
- File: `src/components/Contact.jsx` (Line ~87)
- Change: `your-email@example.com` → Your email
- This is where contact form messages go

**4. Update social links**
- Multiple files: `Navbar.jsx`, `Contact.jsx`, `Footer.jsx`
- Replace dummy URLs with your actual profiles:
  - GitHub: `https://github.com/yourusername`
  - LinkedIn: `https://linkedin.com/in/yourprofile`
  - Twitter: `https://twitter.com/yourhandle`

### Priority 2: Professional Content (Should Do)

**5. Add your skills**
- File: `src/data/skills.js`
- List your programming languages, tools, and technologies

**6. Add your projects**
- File: `src/data/projects.js`
- Add 6 of your best projects with:
  - Project title and description
  - Technologies used
  - Links to GitHub repo and live demo
  - Project image URL

**7. Update education**
- File: `src/components/Education.jsx`
- Add your college/university details
- Update graduation year and CGPA

**8. Add certifications**
- File: `src/data/certificates.js`
- List your courses, certifications, and achievements

### Priority 3: Fine-tuning (Nice to Have)

**9. Update About section**
- File: `src/components/About.jsx`
- Add your bio and career goals

**10. Update achievements**
- File: `src/components/Achievements.jsx`
- Add your hackathon wins, open source contributions, etc.

## Step 3: Set Up EmailJS (Optional but Recommended)

The contact form needs EmailJS to send emails.

### Quick Setup:

1. Go to [emailjs.com](https://www.emailjs.com/) and sign up (free)
2. Create an email service (Gmail recommended)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`

4. Get your credentials:
   - Public Key (in Account settings)
   - Service ID (in Email Services)
   - Template ID (in Email Templates)

5. Create `.env.local` file in project root:
   ```env
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_RECIPIENT_EMAIL=your-email@example.com
   ```

6. Restart dev server: `npm run dev`

## Step 4: Deploy (1 min)

### Fastest: Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial portfolio"
git push origin main

# 2. Go to vercel.com and connect your repository
# 3. Add environment variables
# 4. Deploy!
```

Your portfolio is now live! 🎉

---

## File Reference

**Quick Edit Locations:**

| What to Update | File | Line |
|---|---|---|
| Your name | `src/components/Hero.jsx` | ~37 |
| Profile image | `src/components/Hero.jsx` | ~18 |
| Email (contact form) | `src/components/Contact.jsx` | ~87 |
| Social links | `Navbar.jsx`, `Contact.jsx`, `Footer.jsx` | Various |
| Skills | `src/data/skills.js` | All |
| Projects | `src/data/projects.js` | All |
| Education | `src/components/Education.jsx` | ~70 |
| Certifications | `src/data/certificates.js` | All |
| About info | `src/components/About.jsx` | ~40 |

## Key Files Explained

```
src/
├── components/Navbar.jsx         → Navigation bar + social links
├── components/Hero.jsx           → Name, profile image, intro
├── components/About.jsx          → Your bio
├── components/Skills.jsx         → Technical skills
├── components/Projects.jsx       → Your projects
├── components/Education.jsx      → College & graduation info
├── components/Contact.jsx        → Contact form + email config
├── data/
│   ├── skills.js                 → List of skills
│   ├── projects.js               → Your projects
│   └── certificates.js           → Your certifications
└── pages/Home.jsx                → Combines all sections
```

## Colors Customization

Want to change colors? Edit `tailwind.config.js`:

```javascript
colors: {
  primary: { 900: '#0F172A' },      // Background
  secondary: { 900: '#111827' },    // Secondary bg
  accent: {
    500: '#3B82F6',                 // Primary (Blue)
    400: '#60A5FA',                 // Hover
  },
}
```

Popular color codes:
- Purple: `#8B5CF6` / `#A78BFA`
- Red: `#EF4444` / `#F87171`
- Green: `#10B981` / `#34D399`
- Orange: `#F97316` / `#FB923C`

## Common Tasks

### ❓ How to remove a skill?
Edit `src/data/skills.js` - delete the skill object

### ❓ How to add another project?
Edit `src/data/projects.js` - add new object to array

### ❓ How to change theme colors?
Edit `tailwind.config.js` - update color values

### ❓ How to add a new section?
1. Create component in `src/components/`
2. Import in `src/pages/Home.jsx`
3. Add to page layout

### ❓ How to add a resume?
1. Upload PDF to `public/` folder
2. Update Hero button: `href="/resume.pdf"`

### ❓ How to add Google Analytics?
Add to `index.html` `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Testing Checklist

Before deployment:

- [ ] All navigation links work
- [ ] Contact form sends emails
- [ ] All social links open correctly
- [ ] Projects link to GitHub and demos
- [ ] Images load properly
- [ ] Mobile view looks good
- [ ] No console errors

## Deployment Checklist

- [ ] Run `npm run build`
- [ ] Test with `npm run preview`
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Add environment variables to Vercel
- [ ] Deploy and test live site
- [ ] Add custom domain (optional)

## Need Help?

- Check `README.md` for full documentation
- Check `SETUP.md` for detailed setup
- Check `DEPLOYMENT.md` for deployment guides
- View component source code for customization options

## Next: Full Setup

Ready to go deeper? Read:
1. [SETUP.md](./SETUP.md) - Complete setup guide
2. [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment options
3. [README.md](./README.md) - Full documentation

---

### That's it! You're ready to share your portfolio! 🚀

**Questions?** Check the full documentation files for detailed explanations.
