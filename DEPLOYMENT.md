# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio to various platforms.

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Updated all personal information (name, email, social links)
- [ ] Added your projects with correct GitHub and demo links
- [ ] Updated certifications and education details
- [ ] Configured EmailJS with your email service
- [ ] Tested the contact form locally
- [ ] Built the project successfully (`npm run build`)
- [ ] Tested the production build (`npm run preview`)
- [ ] Updated the favicon in `public/` folder
- [ ] Updated meta tags in `index.html`

## Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and provides excellent support for modern web applications.

#### Prerequisites
- GitHub account with your repository
- Vercel account (free tier available)

#### Steps

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

2. **Configure Build Settings**
   - Framework: Select "Vite"
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Add Environment Variables**
   - Click "Environment Variables"
   - Add the following variables:
     ```
     REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
     REACT_APP_EMAILJS_SERVICE_ID=your_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
     REACT_APP_RECIPIENT_EMAIL=your-email@example.com
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site is now live!

#### Custom Domain (Vercel)
1. Go to project settings
2. Click "Domains"
3. Enter your custom domain
4. Follow DNS configuration instructions

### 2. Netlify

#### Steps

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Option A: Drag & Drop**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist/` folder
   - Your site is live!

3. **Option B: GitHub Integration**
   - Connect your GitHub repository
   - Configure build settings
   - Add environment variables
   - Deploy automatically on push

#### Environment Variables (Netlify)
- Go to Site Settings → Build & Deploy → Environment
- Add your EmailJS credentials

### 3. GitHub Pages

#### Steps

1. **Update vite.config.js**
   ```javascript
   export default {
     base: '/repository-name/',
     // ... rest of config
   }
   ```

2. **Add Deploy Script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     },
     "devDependencies": {
       "gh-pages": "^6.1.0"
     }
   }
   ```

3. **Install and Deploy**
   ```bash
   npm install --save-dev gh-pages
   npm run deploy
   ```

4. **Configure Repository**
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

### 4. Self-Hosted (VPS/Shared Hosting)

#### Steps

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload `dist/` Folder**
   - Upload the entire `dist` folder to your server
   - Point your domain to the `dist` folder

3. **Configure Web Server**

   **For Nginx:**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     root /path/to/dist;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

   **For Apache:**
   ```apache
   <Directory /path/to/dist>
     RewriteEngine On
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule ^ index.html [QSA,L]
   </Directory>
   ```

4. **SSL Certificate**
   - Use Let's Encrypt for free SSL
   - Configure auto-renewal

### 5. Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:

```nginx
events {
  worker_connections 1024;
}

http {
  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  server {
    listen 80;
    location / {
      root /usr/share/nginx/html;
      try_files $uri $uri/ /index.html;
    }
  }
}
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:80 portfolio
```

## Post-Deployment

### 1. Verify Functionality
- [ ] Check all navigation links
- [ ] Test contact form
- [ ] Verify social media links
- [ ] Check project links
- [ ] Test on mobile devices
- [ ] Check page speed (use Lighthouse)

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership
- [ ] Monitor indexing status
- [ ] Add Google Analytics (optional)

### 3. Performance Optimization
- [ ] Enable gzip compression
- [ ] Set up caching headers
- [ ] Optimize images
- [ ] Minimize CSS/JS bundles
- [ ] Enable CDN if available

### 4. Security
- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Update dependencies
- [ ] Run security audit: `npm audit`

## Monitoring

### Analytics
Add Google Analytics (optional):

Update `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Uptime Monitoring
- Use services like Uptime Robot or Pingdom
- Get alerts if your site goes down

## Troubleshooting

### Build Fails on Deployment
1. Check build logs
2. Verify environment variables
3. Ensure all dependencies are in package.json
4. Test build locally: `npm run build`

### Contact Form Not Working
1. Verify EmailJS credentials
2. Check email template exists
3. Verify domain is authorized in EmailJS
4. Test with browser console for errors

### Assets Not Loading
1. Check asset paths (use relative paths)
2. Verify CDN is working
3. Check CORS headers if using external assets

### Performance Issues
1. Enable gzip compression
2. Use image optimization
3. Enable browser caching
4. Minimize CSS/JavaScript

## Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run linter
        run: npm run lint
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Domain Setup

### Buying a Domain
- Namecheap, GoDaddy, or Google Domains recommended
- Usually $10-15/year

### DNS Configuration

For Vercel:
1. Go to domain registrar
2. Add Vercel nameservers
3. Or create CNAME/A records pointing to Vercel

For custom setup:
1. Point A record to your server IP
2. Create CNAME records for subdomains
3. Set up SSL certificate

## Maintenance

### Regular Updates
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Security audit
npm audit
npm audit fix
```

### Backup
- Keep regular backups of your portfolio
- Use Git for version control
- Store important credentials securely

## Additional Resources

- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Web.dev Performance Guide](https://web.dev/performance/)

---

Your portfolio is now ready for production! 🎉
