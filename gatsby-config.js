const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
          options: {
              name: 'images',
              path: `${__dirname}/static/assets`,
          },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-emotion',
    //   options: {
    //     autoLabel: process.env.NODE_ENV !== 'production',
    //     // eslint-disable-next-line
    //     labelFormat: `[filename]--[local]`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'config/typography.js',
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    { // Sourcing Instagram Images - 12 images max
      resolve: `gatsby-source-instagram`,
      options: {
        username: config.instagram
      },
    },
    { // Sourcing Instgram profile information and photo
      resolve: `gatsby-source-instagram`,
      options: {
        type: `user-profile`,
        username: config.instagram
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify',
  ],
};
