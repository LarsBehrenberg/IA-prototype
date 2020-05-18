const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const remark = require('remark')
const remarkHTML = require('remark-html')

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx')

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/posts/" } }
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                    links
                    cover {
                      relativePath
                      childImageSharp {
                        fixed(width: 300) {
                          aspectRatio
                          src
                          srcSet
                          base64
                          width
                          height
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        // create posts
        posts.forEach(({ node }, index) => {
          const { path } = node.frontmatter
          const sideBarLinks = node.frontmatter.links
          const prev =
            index === 0 ? posts[posts.length - 1].node : posts[index - 1].node
          const next =
            index === posts.length - 1 ? posts[0].node : posts[index + 1].node
          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path,
              sideBarLinks,
              prev,
              next,
            },
          })
        })
      })
    )
  })
}

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  fmImagesToRelative(node)

  if (node.frontmatter) {
    const { textSections } = node.frontmatter

    if (textSections) {
      const bodyText = textSections.map(event =>
        remark().use(remarkHTML).processSync(event.text).toString()
      )
      const bodyTitle = textSections.map(event =>
        remark().use(remarkHTML).processSync(event.textTitle).toString()
      )

      createNodeField({
        name: `bodyText`,
        node,
        value: bodyText,
      })

      createNodeField({
        name: `bodyTitle`,
        node,
        value: bodyTitle,
      })
    }
  }
}
