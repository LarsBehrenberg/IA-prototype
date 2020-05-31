<h1 align="center">ImpressionistArts.com</h1>

<p align="center">
  <strong>
    View the website at <a href="https://ia-site.netlify.app">ImpressionistArts.com</a>.
  </strong>
</p>

## How to install

1. Navigate in your terminal to this folder

```bash
  cd ../IA\ -\ Final\ Build
```

2. Install necessary packages

```bash
  yarn install || npm install
```

3. Run the development server

```bash
  yarn develop || npm develop
```

## Features

- Gatsby v2
- Emotion for styling
- Code syntax highlighting
- Tags
- SEO
  - Sitemap generation
  - Schema.org JSON-LD for Google Rich Snippets
- Offline Support
- Manifest Support
- Gatsby Image
  - Responsive images
  - Traced SVG Loading with Lazy-Loading
  - WebP Support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - Google Lighthouse Optimization

## Folder structure

```bash
├── config # Theme and site metadata
├── content # Post markdown and images
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── style
│   └── templates # For Post generation
├── static # Images for logo and favicon, and robots.txt
├── gatsby-config.js # Plugin loading and configuration
└── gatsby-node.js # Generate posts/tags and modify webpack
```
