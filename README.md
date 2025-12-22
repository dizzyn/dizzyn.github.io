# Tom Randus CV - Next.js Version

This is a modern CV website built with Next.js, TypeScript, and Tailwind CSS, configured for static site generation and GitHub Pages deployment.

## Features

- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 📱 Responsive design
- 🚀 Static site generation for GitHub Pages
- 🔧 Automated deployment with GitHub Actions
- 📄 PDF download option

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Export static files
yarn export

# Deploy (build + export + add .nojekyll)
yarn deploy
```

## Deployment to GitHub Pages

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your CV will be available at `https://[username].github.io/CV`

## Configuration

- **Repository name**: Make sure your repository is named `CV` for the correct GitHub Pages URL
- **Base path**: The `next.config.js` is configured for the `/CV` base path in production
- **Custom domain**: Update `next.config.js` if you want to use a custom domain

## Customization

- Edit `pages/index.tsx` to update your CV content
- Modify `styles/globals.css` for global styles
- Update `tailwind.config.js` for custom colors and fonts
- Replace fonts in the `fonts/` directory with your preferred typefaces

## Original Portfolio

[Portfolio](http://dizzyn.github.io)
