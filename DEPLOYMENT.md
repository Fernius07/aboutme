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

### 3. GitHub Pages (Configured)
This project is already configured for GitHub Pages deployment with GitHub Actions.

**Automatic Deployment:**
- Every push to the `main` branch automatically builds and deploys to GitHub Pages
- The workflow file is located at `.github/workflows/deploy.yml`
- The site will be available at: `https://fernius07.github.io/aboutme/`

**Repository Settings:**
Make sure GitHub Pages is configured in your repository settings:
1. Go to Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. The workflow will automatically deploy on the next push to main

**Manual Deployment:**
If needed, you can manually trigger the deployment from the Actions tab in GitHub.

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
