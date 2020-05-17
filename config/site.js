module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'ImpressionistArts', // Navigation and Site Title
  titleAlt: 'ImpressionistArts', // Title for JSONLD
  description: 'An ImpressionistArts Prototype',
  url: 'https://ia-prototype.larsbehrenberg.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://ia-prototype.larsbehrenberg.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'TheArts', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Tim', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@codetraveling', // Twitter Username
  instagram: 'natgeoyourshot', // Instagram Username - creates the Gallery page
  adsenseId: '', //eg: ca-pub-7292810486004926
}
