# Deployment Guide

## Local Development

### Prerequisites
- Node.js v18 or higher
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/Fernius07/aboutme.git
cd aboutme

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Production Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Deployment Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 2. Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages
Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/aboutme/',
  // ... rest of config
})
```

Then build and deploy:
```bash
npm run build
# Push dist folder to gh-pages branch
```

### 4. Static Hosting
Build the project and upload the `dist` folder to any static hosting service:
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages
- DigitalOcean App Platform

## Environment Configuration

No environment variables required for basic deployment.

## Performance Optimization

The build is already optimized with:
- Code splitting
- Asset minification
- CSS optimization
- Gzip compression support

## Monitoring

Add your preferred analytics:
- Google Analytics
- Plausible Analytics
- Vercel Analytics

## Support

For issues or questions, please open an issue on GitHub.
