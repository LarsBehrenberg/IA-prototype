const config = require('./config/site')

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
        name: 'backgrounds',
        path: `${__dirname}/static/backgrounds`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'images', // Must match the source name ^
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    // {
    //   // Sourcing Instgram profile information and photo
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     type: `user-profile`,
    //     username: config.instagram,
    //   },
    // },
    // {
    //   // Sourcing Instagram Images - 12 images max
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: config.instagram,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        banner: config.banner,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://netlify.us18.list-manage.com/subscribe/post?u=665784ffab3c1c46436a3f0ab&amp;id=6460b7e027',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
