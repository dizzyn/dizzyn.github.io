# Tom Randus CV - Next.js Version

This is a modern CV website built with Next.js, TypeScript, and Tailwind CSS, configured for static site generation and GitHub Pages deployment.

## Features

- ⚡ Built with Next.js 14 and TypeScript
- 📦 Package management with pnpm
- 🎨 Styled with Tailwind CSS
- 📱 Responsive design
- 🚀 Static site generation for GitHub Pages
- 🔧 Automated deployment with GitHub Actions
- 📄 Dynamic PDF generation during build

## Requirements

- Node.js 18+
- pnpm (install with `npm install -g pnpm`)

## Quick Start

1. **Install dependencies**: `pnpm install`
2. **Start dev server**: `pnpm dev`
3. **Generate PDF**: `node generate-pdf-now.js` (in another terminal)
4. **View your CV**: Open http://localhost:3000
5. **Download PDF**: Click the download button

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Generate PDF (run in another terminal)
node generate-pdf-now.js
# or use the npm script:
pnpm generate-pdf

# Build for production
pnpm build

# Export static files
pnpm export

# Deploy (build + export + add .nojekyll)
pnpm deploy
```

### Development Workflow

**Simple**: Just run `node generate-pdf-now.js` whenever you want to update the PDF with your latest changes.

- Make changes to your CV content in `data/data.ts`
- Run `node generate-pdf-now.js` to generate a fresh PDF
- The PDF is saved to `public/tom-randus-cv.pdf`
- The download button will serve the updated PDF

### Production Build

For the final deployment, the PDF is automatically generated during the build process and included in the static export.

## PDF Generation

The CV includes a dynamic PDF generation feature that works differently in development and production:

### Development Mode

- The PDF is generated on-demand by running `pnpm generate-pdf-dev` while the dev server is running
- This connects to `http://localhost:3000/pdf` and generates a fresh PDF
- The PDF is saved to `public/tom-randus-cv.pdf`
- You can regenerate the PDF anytime by running the command again

### Production Mode

- The PDF is automatically generated during the `pnpm deploy` command
- It uses the exported static HTML files from the `out/` directory
- A temporary static server is started to render the `/pdf` route
- The PDF is generated and saved to `out/tom-randus-cv.pdf`
- The PDF is then deployed to GitHub Pages as a static file

### How It Works

- The `/pdf` route renders the CV without the download button
- Puppeteer captures this page and converts it to PDF
- The download link on the homepage points to the static PDF file
- No API routes are used (compatible with static export)

## Deployment to GitHub Pages

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your CV will be available at `https://[username].github.io/CV`

The deployment process includes:

- Building the Next.js application
- Exporting static HTML files
- Generating the PDF from the CV content
- Publishing to GitHub Pages

## Configuration

- **Repository name**: Make sure your repository is named `CV` for the correct GitHub Pages URL
- **Base path**: The `next.config.js` is configured for the `/CV` base path in production
- **Custom domain**: Update `next.config.js` if you want to use a custom domain

## Customization

- Edit `data/data.ts` to update your CV content (bio, work experience, skills, etc.)
- Modify `pages/index.tsx` for layout changes
- Update `pages/pdf.tsx` if you need to customize the PDF version
- Modify `styles/globals.css` for global styles
- Update `tailwind.config.js` for custom colors and fonts

## Project Structure

```
├── data/
│   └── data.ts           # CV content (bio, experience, skills)
├── pages/
│   ├── index.tsx         # Main CV page with PDF download button
│   ├── pdf.tsx           # PDF version (without download button)
│   └── api/
│       └── generate-pdf.ts  # API route for PDF generation
├── scripts/
│   └── generate-pdf-static.js  # Build-time PDF generation script
├── public/
│   └── tom-randus-cv.pdf # Generated PDF (created during build)
└── out/                  # Static export output
```

## Original Portfolio

[Portfolio](http://dizzyn.github.io)
